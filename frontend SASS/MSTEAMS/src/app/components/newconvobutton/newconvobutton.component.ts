import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newconvobutton',
  templateUrl: './newconvobutton.component.html',
  styleUrls: ['./newconvobutton.component.sass']
})
export class NewconvobuttonComponent implements OnInit {
  private selected!:boolean;
  constructor() { }

  ngOnInit(): void {
    this.selected = true;
  }

  public clicked():void{
    this.selected = false;
  }
  
  get getSelected():boolean{
    return this.selected;
  }


}
