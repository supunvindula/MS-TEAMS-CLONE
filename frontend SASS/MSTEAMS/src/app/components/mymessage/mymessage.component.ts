import { Component, OnInit,Input } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons, ellipsisHorizontalIcon } from '@cds/core/icon';
import { HttpClient } from "@angular/common/http";
import {GlobalComponent} from './../../global-component';
ClarityIcons.addIcons(ellipsisHorizontalIcon);

@Component({
  selector: 'app-mymessage',
  templateUrl: './mymessage.component.html',
  styleUrls: ['./mymessage.component.sass']
})
export class MymessageComponent implements OnInit {
  @Input() name!:string;
  @Input() message!: string;
  @Input() datetime !: string;
  @Input() messageId !: any;
  public opened : boolean = false;
  public edited : boolean = false;
  private date !: Date;

  constructor(private http: HttpClient) { 
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
  open():void{
    if(this.opened) {
      this.opened=false
    }
    else{
      this.opened=true
    }
  }
  deleteMessage(){
    const deleteURL = GlobalComponent.URL+ "api/Messages/7/1/"+String(this.messageId);
    this.http.delete(deleteURL)
        .subscribe();
    this.opened=false
  }
  editMessage(){
    this.edited=true
    this.opened=false
  }

}
