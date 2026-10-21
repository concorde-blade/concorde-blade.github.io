# Design, code and media references

Personal Homepage Studio is a modified derivative of **Magic Portfolio by the Once UI team**, under **CC BY-NC 4.0**. Attribution is available from the website footer's “项目说明” (Project credits) link at `/credits/`, and retained in this document and LICENSE.

Changes include a chronological journal, photography typography and layout, project detail pages, sketch background, grid cursor trail, a local content editor, content backups, Windows/macOS launchers and GitHub Pages publishing. The original branding line in the footer was replaced with a link to the credit page.

- Magic Portfolio: https://github.com/once-ui-system/magic-portfolio — CC BY-NC 4.0, https://creativecommons.org/licenses/by-nc/4.0/legalcode . Non-commercial use only unless separately authorized by the upstream rightsholder.
- Once UI component library (`@once-ui-system/core` 1.5.6): https://github.com/once-ui-system/core — MIT. Copyright (c) 2024-2025 Once UI.
- Anthony Fu's journal and sketch branch-growth approach: https://antfu.me and https://github.com/antfu/antfu.me/blob/main/src/components/ArtPlum.vue — reference code under MIT.
- Astro Bento Portfolio's twelve-cell cursor trail approach: https://github.com/Ladvace/astro-bento-portfolio/blob/master/src/lib/card-grids.ts — reference code under MIT.
- Photography typography inspiration: https://github.com/Cosmic-Themes/horizon . The project uses Playfair Display through next/font; no Horizon template code is included.
- Bundled example photography: Lorant, https://lorant.one, provided in the Magic Portfolio template. It is sample material, not photography by the current site owner; retain its credit while in use and replace it with your own images for a personal portfolio. No independent license beyond the upstream distribution is asserted here.
- Fonts: Geist / Geist Mono by Vercel and Playfair Display by Claus Eggers Sørensen, distributed under the SIL Open Font License through Google Fonts and next/font.
- All visible Chinese sample articles and project descriptions are original sample copy, not the user's actual biography or work.
- Articles and photographs later supplied by a site owner retain their respective authors' rights; the template does not relicense them.
- Personal website icon: “An astronaut standing on top of a red planet” by summertime flag, https://unsplash.com/illustrations/an-astronaut-standing-on-top-of-a-red-planet--cYcR3F_J7M . The source page identifies the illustration as Unsplash+ content. The site owner supplied the screenshot used here; it was cropped and resized with its existing watermarks retained. This third-party image is not relicensed under the project's code license.

## Name origin illustrations

- `public/images/about/ants-from-up-there.webp`: cover artwork of Black Country, New Road's *Ants From Up There* (2022), sourced from the official Ninja Tune release page, https://ninjatune.net/release/black-country-new-road/ants-from-up-there and https://ninjatune.net/images/releases/ants-from-up-there-main.jpg . Shown to identify and discuss the album; artwork rights remain with the respective rights holders and are not covered by this project's code license. Resized to 640 × 640 and encoded as WebP without cropping.
- `public/images/about/concorde-g-boac.webp`: British Airways Concorde G-BOAC, May 1986, photograph by Eduard Marmet, Wikimedia Commons file https://commons.wikimedia.org/wiki/File:British_Airways_Concorde_G-BOAC_03.jpg . Used under CC BY-SA 3.0, https://creativecommons.org/licenses/by-sa/3.0/ . The downloaded Commons revision includes Stevo1000's 2018 background retouch. This site encodes that 1024 × 679 image as WebP without cropping; the image remains under CC BY-SA 3.0. Source and license links are displayed alongside the photograph.

## MIT notices for referenced code and Once UI

Copyright (c) 2020-2021 Anthony Fu

Copyright (c) 2024 Gianmarco Cavallo and others

Copyright (c) 2024-2025 Once UI

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

## Poetry reading and calendar

- The 30 complete poem texts in `src/content/shijing.json` were selected from https://github.com/chinese-poetry/chinese-poetry/blob/master/诗经/shijing.json (retrieved 2026-10-15). The ancient poems are in the public domain; the digital collection is distributed under MIT, Copyright (c) 2016 JackeyGao. Source wording is retained in the full text. Excerpts may adjust terminal punctuation. The short modern reading notes are separately written editorial summaries, not attributed to the ancient text.
- `src/content/poetry.json` expands this selection to 72 complete poems and ci, including the existing 30 Shijing poems in traditional characters. Eighteen Tang texts and twelve Song ci were selected from chinese-poetry's `全唐诗/唐诗三百首.json` and `宋词/宋词三百首.json` (retrieved 2026-10-21 via jsDelivr); its MIT notice is retained below. Other public-domain texts are transcribed from the classical collections identified on each entry. Punctuation, script and some variant characters are normalized for reading. The Song selection corrects the digital collection's “故人今不在” to the conventional “故人今在否” in Liu Guo's *Tangduoling*. Editorial recommendations and glosses are independently written. Neither generated modern translations nor third-party modern commentaries are included.
- `src/components/personal/fonts/PoetrySong.woff2` is a renamed, static weight-400 glyph subset of **Noto Serif TC**, from https://github.com/google/fonts/tree/main/ofl/notoseriftc (retrieved 2026-10-21 via jsDelivr), with the single historical-name glyph 眘 supplied by the matching **Noto Serif SC** family through Google Fonts. Font metadata copyright (c) 2017–2024 Adobe; the upstream OFL file also retains Copyright 2012 Google Inc. Distributed under the SIL Open Font License 1.1; the complete copyright and license are retained in `src/components/personal/fonts/OFL.txt`. Modifications are subsetting, instancing at weight 400, adding that outline, and renaming to “Poetry Song”. The font is bundled locally and requires no font service at runtime.
- Solar terms, lunar dates and the traditional seventy-two phenological periods are computed with `lunar-typescript` 1.8.6: https://github.com/6tail/lunar-typescript — MIT, Copyright (c) 2020 6tail. The site uses calendar functions only. Traditional phenological names are cultural time markers.
- Site-wide water/ink waves and starfield interaction are original Canvas/CSS implementations. Visual references: React Bits Waves (https://github.com/DavidHDev/react-bits) and Magic UI Particles (https://github.com/magicuidesign/magicui). No code from these two components is bundled.

### MIT notice for the digital Shijing collection and lunar-typescript

Copyright (c) 2016 JackeyGao

Copyright (c) 2020 6tail

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

## Star atlas and traditional Chinese asterisms

- `src/content/sky-catalog.json` and `sky-preview.json` are compact subsets/conversions of D3-Celestial data (`data/stars.6.json`, `data/constellations.cn.json`, `data/constellations.lines.cn.json`): https://github.com/ofrohn/d3-celestial , revision `7e720a3de062059d4c5400a379146a601d9010e0`, retrieved 2026-10-15. D3-Celestial is distributed under BSD 3-Clause (Olaf Frohn). Original stellar data: XHIP, Anderson & Francis (2012), VizieR V/137D; traditional Chinese asterism arrangements: Stellarium skycultures. Original names and coordinates are preserved; GeoJSON wrappers and unused properties are removed. No D3 or Stellarium program code is bundled.
- The website independently implements precession, local sidereal time, the horizon transformation and an azimuthal equidistant projection. The 1900–2100 chart is a naked-eye orientation guide; no proper motion, refraction, extinction, terrain or daylight brightness is modeled. Classical quotations are public-domain text; modern explanatory notes are independently written.
- Classical reading sources: 《周易·系辞上》, 《论语·为政》, 《史记·天官书》, 《诗经·小雅·大东》《召南·小星》《豳风·七月》, 《古诗十九首·迢迢牵牛星》, and 杜甫《赠卫八处士》. The folk association of the Cowherd star with 河鼓二 is distinguished from 牛宿. The chart depicts the chosen modern date, not a reconstruction of the ancient sky.

### BSD 3-Clause notice for D3-Celestial

Copyright (c) 2015, Olaf Frohn
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
