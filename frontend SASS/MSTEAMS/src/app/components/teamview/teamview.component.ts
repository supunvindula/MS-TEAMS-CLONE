import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teamview',
  templateUrl: './teamview.component.html',
  styleUrls: ['./teamview.component.sass']
})
export class TeamviewComponent implements OnInit {

  names : string[] = ["Xians","Internal Systems"];
  clicked : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  changeView(): void {
    this.clicked = false;
    // console.log(this.clicked);
  }

}
