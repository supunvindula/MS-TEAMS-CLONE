import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MenubarComponent } from './components/menubar/menubar.component';
import { TeamviewComponent } from './components/teamview/teamview.component';
import { MessageviewComponent } from './components/messageview/messageview.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TeamcardComponent } from './components/teamcard/teamcard.component';
import { HeadbarComponent } from './components/headbar/headbar.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MessageComponent } from './components/message/message.component';
import { NewconvobuttonComponent } from './components/newconvobutton/newconvobutton.component';
import { NewmessageComponent } from './components/newmessage/newmessage.component';
import { MymessageComponent } from './components/mymessage/mymessage.component';
import { EditmessageComponent } from './components/editmessage/editmessage.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenubarComponent,
    TeamviewComponent,
    MessageviewComponent,
    NotfoundComponent,
    TeamcardComponent,
    HeadbarComponent,
    MessagesComponent,
    MessageComponent,
    NewconvobuttonComponent,
    NewmessageComponent,
    MymessageComponent,
    EditmessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
