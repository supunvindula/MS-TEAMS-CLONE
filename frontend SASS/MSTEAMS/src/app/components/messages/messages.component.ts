import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild, } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import '@cds/core/icon/register.js';
import { ClarityIcons, noteIcon } from '@cds/core/icon';

ClarityIcons.addIcons(noteIcon);

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.sass']
})
export class MessagesComponent implements OnInit , AfterViewChecked {
  public messages:any = []

  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
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
    const url ='https://localhost:44327/api/Messages/7'
    this.http.get(url).subscribe((res)=>{
      this.messages = res
      // console.log(this.messages)
    })
  }

}
