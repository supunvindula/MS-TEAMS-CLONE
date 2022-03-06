import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import '@cds/core/icon/register.js';
import { ClarityIcons, noteIcon } from '@cds/core/icon';
import {GlobalComponent} from './../../global-component';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';
ClarityIcons.addIcons(noteIcon);

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit , AfterViewChecked {
  public messages:any = []
  private _hubConnection!: HubConnection;

  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const url = "https://localhost:44327/notify";
    this._hubConnection = new HubConnectionBuilder().withUrl(url).build();
    this._hubConnection.start()
    .then(()=>console.log("Connection Started"))
    .catch(err=>console.log(err,"Error in signalR"));
    this._hubConnection.on('BroadcastMessage',(message)=>{
      // window.location.reload();
      this.getData();
      console.log(message);
    });
    this.scrollToBottom();
    this.getData();
  }
  ngAfterViewChecked() {        
    this.scrollToBottom();        
  } 

  scrollToBottom(): void {
      try {
          this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch(err) { }                 
  }

  getData(){
    const url = GlobalComponent.URL+ 'api/Messages/7'
    this.http.get(url).subscribe((res)=>{
      this.messages = res
      // console.log(this.messages)
    })
  }

}
