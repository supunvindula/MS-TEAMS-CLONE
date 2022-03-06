import { Component, OnInit } from '@angular/core';
import '@cds/core/icon/register.js';
import { ClarityIcons, textIcon,paperclipIcon,happyFaceIcon,undoIcon,replayAllIcon,playIcon } from '@cds/core/icon';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


ClarityIcons.addIcons(textIcon,paperclipIcon,happyFaceIcon,undoIcon,replayAllIcon,playIcon);
@Component({
  selector: 'app-newmessage',
  templateUrl: './newmessage.component.html',
  styleUrls: ['./newmessage.component.sass']
})
export class NewmessageComponent implements OnInit {
  public message:string = '';
  public date!: Date;
  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {
  }

  public sendMessage():void{
    // console.log(this.message);
    this.date = new Date();
    const headers = new HttpHeaders()
    .append(
      'Content-Type',
      'application/json'
    );
    // console.log(this.date.toJSON());
    const body = JSON.stringify({
      "messageBody": this.message,
      "created": this.date.toJSON(),
      "memberId": 1,
      "groupId": 7
    });
    console.log(body);
    this.httpClient.post<any>("https://localhost:44327/api/Messages",body,{headers:headers,}).subscribe();
    // (res)=>console.log(res)
    this.message='';

  }
}
