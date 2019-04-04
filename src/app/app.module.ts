import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { MyHttpService } from './service/my-http.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [

    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyHttpService],
  bootstrap: [AppComponent],
})
export class AppModule { }
