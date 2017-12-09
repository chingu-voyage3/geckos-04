import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { ClockService } from './clock.service';
import { CookieService } from 'ng2-cookies';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CookieService, ClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
