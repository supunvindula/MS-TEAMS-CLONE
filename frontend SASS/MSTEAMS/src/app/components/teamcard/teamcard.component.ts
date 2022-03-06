import { Component, OnInit, Input } from '@angular/core';
import { ClarityIcons, ellipsisHorizontalIcon } from '@cds/core/icon';
ClarityIcons.addIcons(ellipsisHorizontalIcon);
@Component({
  selector: 'app-teamcard',
  templateUrl: './teamcard.component.html',
  styleUrls: ['./teamcard.component.sass']
})
export class TeamcardComponent implements OnInit {
  @Input() cardName?: any;
  constructor() { }

  ngOnInit(): void {
  }

}
