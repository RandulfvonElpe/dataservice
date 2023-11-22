import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConnectionsComponent } from './connections/connections.component';

import { FormsModule } from '@angular/forms';
import { NgIf,NgFor, UpperCasePipe } from '@angular/common';
import { ConnectionDetailComponent } from './connection-detail/connection-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    ConnectionsComponent,
    ConnectionDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, 
    FormsModule, NgIf, NgFor, UpperCasePipe   //dies hat angular in connections.component stehen
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
