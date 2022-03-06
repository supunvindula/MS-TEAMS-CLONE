import { Component, OnInit } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons,bellIcon,chatBubbleIcon,administratorIcon,calendarIcon,phoneHandsetIcon,fileIcon,ellipsisHorizontalIcon } from '@cds/core/icon';
ClarityIcons.addIcons(bellIcon,chatBubbleIcon,administratorIcon,calendarIcon,phoneHandsetIcon,fileIcon,ellipsisHorizontalIcon);

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.sass']
})
export class MenubarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
