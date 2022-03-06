import { Component, Input, OnInit } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons, playIcon,windowCloseIcon } from '@cds/core/icon';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

ClarityIcons.addIcons(playIcon,windowCloseIcon);

@Component({
  selector: 'app-editmessage',
  templateUrl: './editmessage.component.html',
  styleUrls: ['./editmessage.component.sass']
})
export class EditmessageComponent implements OnInit {
  @Input() editMsg !:string;
  @Input() datetime !:string;
  @Input() messageId !:any;
  hide!:boolean ;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.hide=true;
  }
  editMessage() : void{
    // send the request here
    const headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );
    const body = JSON.stringify({
      "messageBody": this.editMsg,
      "created": this.datetime,
    });
    const url:string = "https://localhost:44327/api/Messages/7/1/" + String(this.messageId);
    this.httpClient.put<any>(url,body,{headers:headers,}).subscribe();
    this.hide = false;
  }
  close():void{
    this.hide = false;
  }
}
