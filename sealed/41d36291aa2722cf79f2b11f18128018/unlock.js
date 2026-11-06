'use strict';
const form=document.querySelector('#unlock'),input=document.querySelector('#password'),submit=document.querySelector('#submit'),status=document.querySelector('#status'),result=document.querySelector('#result'),download=document.querySelector('#download');
let objectURL;
function lock(){if(objectURL)URL.revokeObjectURL(objectURL);objectURL=undefined;download.removeAttribute('href');download.removeAttribute('download');document.querySelector('#filename').textContent='';input.value='';result.hidden=true;form.hidden=false;status.textContent='';}
document.querySelector('#lock').addEventListener('click',()=>{lock();input.focus();});window.addEventListener('pagehide',lock);
form.addEventListener('submit',async e=>{
 e.preventDefault();if(submit.disabled)return;let password=input.value;input.value='';submit.disabled=true;status.textContent='正在解锁…';let plaintext;
 try{
  if(!globalThis.crypto?.subtle)throw new Error('BROWSER');
  const response=await fetch('./payload.bin',{cache:'no-store',credentials:'omit',referrerPolicy:'no-referrer'});if(!response.ok)throw new Error('NETWORK');
  const bytes=new Uint8Array(await response.arrayBuffer()),header=bytes.slice(0,40);
  if(bytes.length<57||new TextDecoder().decode(header.slice(0,8))!=='SEALPDF1'||new DataView(header.buffer).getUint32(36)!==600000)throw new Error('FORMAT');
  const material=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveKey']);password='';
  const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt:header.slice(8,24),iterations:600000,hash:'SHA-256'},material,{name:'AES-GCM',length:256},false,['decrypt']);
  plaintext=new Uint8Array(await crypto.subtle.decrypt({name:'AES-GCM',iv:header.slice(24,36),additionalData:header,tagLength:128},key,bytes.slice(40)));
  const length=new DataView(plaintext.buffer).getUint32(0);if(length>4096||4+length>=plaintext.length)throw new Error('FORMAT');
  const meta=JSON.parse(new TextDecoder().decode(plaintext.slice(4,4+length))),body=plaintext.slice(4+length);
  if(meta.type!=='application/pdf'||meta.size!==body.length||new TextDecoder().decode(body.slice(0,5))!=='%PDF-')throw new Error('FORMAT');
  objectURL=URL.createObjectURL(new Blob([body],{type:'application/pdf'}));body.fill(0);download.href=objectURL;download.download=String(meta.name).replace(/[/\\]/g,'_');document.querySelector('#filename').textContent=meta.name+' · '+(meta.size/1048576).toFixed(1)+' MB';
  form.hidden=true;result.hidden=false;status.textContent='已解锁，可以下载。';download.focus();
 }catch(error){status.textContent=error.message==='BROWSER'?'请用最新版系统浏览器打开此链接。':error.message==='NETWORK'||error instanceof TypeError?'文件加载失败，请检查网络后重试。':'密码不正确或文件已损坏，请重试。';}
 finally{password='';plaintext?.fill(0);submit.disabled=false;}
});