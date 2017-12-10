import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { ClockService } from './clock.service';
import { CookieService } from 'ng2-cookies';
import { WeatherComponent } from './weather/weather.component';
import { WeatherService } from './weather.service';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CookieService, ClockService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
