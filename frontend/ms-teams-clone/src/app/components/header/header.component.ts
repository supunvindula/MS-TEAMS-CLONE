import { Component, OnInit } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons, barsIcon } from '@cds/core/icon';
ClarityIcons.addIcons(barsIcon);

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() {
    ClarityIcons.addIcons(['nine-dots','<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="512.000000pt" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"> <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none"> <path d="M640 4054 l0 -425 268 3 268 3 75 37 c93 46 158 112 202 206 l32 67 3 268 3 267 -425 0 -426 0 0 -426z"/> <path d="M2130 4054 l0 -425 268 3 c317 4 340 10 446 108 124 117 146 193 146 518 l0 222 -430 0 -430 0 0 -426z"/> <path d="M3630 4055 l0 -425 248 0 c281 0 310 5 409 69 69 45 134 124 166 203 20 49 22 75 25 316 l3 262 -425 0 -426 0 0 -425z"/> <path d="M640 2560 l0 -430 223 0 c311 0 383 18 494 122 61 59 94 112 117 187 13 44 16 104 16 303 l0 248 -425 0 -425 0 0 -430z"/> <path d="M2135 2978 c-3 -7 -4 -200 -3 -428 l3 -415 210 -3 c116 -1 239 2 273 7 189 29 334 174 363 363 5 34 8 158 7 273 l-3 210 -423 3 c-333 2 -424 0 -427 -10z"/> <path d="M3630 2559 l0 -431 253 4 c228 3 258 6 310 25 115 43 214 139 258 250 22 55 24 74 27 321 l3 262 -425 0 -426 0 0 -431z"/> <path d="M640 1064 l0 -425 263 3 c240 3 266 5 315 25 117 48 209 145 252 266 18 51 20 82 20 307 l0 250 -425 0 -425 0 0 -426z"/> <path d="M2130 1065 l0 -425 238 0 c259 0 313 8 405 57 61 34 138 117 170 186 38 80 47 152 47 389 l0 218 -430 0 -430 0 0 -425z"/> <path d="M3630 1065 l0 -425 230 0 c129 0 252 5 282 11 157 33 293 170 327 327 6 30 11 151 11 282 l0 230 -425 0 -425 0 0 -425z"/> </g> </svg>']);
    
   }

  ngOnInit(): void {

    
  }

}
