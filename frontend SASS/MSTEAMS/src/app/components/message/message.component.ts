import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.sass']
})
export class MessageComponent implements OnInit {
  @Input() name!:string;
  @Input() message!: string;
  @Input() datetime !: string;
  private date !: Date;
  constructor() { 
  }

  ngOnInit(): void {
    this.date = new Date(this.datetime);
  }

  get getDate(): string{
    return this.date.toDateString();
  }

  get getTime():string{
    return this.date.toISOString().substr(11, 5);
  }


}
