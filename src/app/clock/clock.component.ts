import { Component, OnInit } from '@angular/core';
import { ClockService } from "../clock.service";
import { CookieService } from 'ng2-cookies';
// import * as moment from 'moment';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  myDate: Date;
  myFormat: String;
  cookies: Object;
  keys: Array<string>;

  constructor(private clockService: ClockService, private cookieService: CookieService) {
    this.update();
  }

  ngOnInit() {
    this.clockService.getClock().subscribe(myDate => this.myDate = myDate);

    this.myFormat = this.cookieService.get('clockFormat');
  }

  update() {
    this.cookies = this.cookieService.getAll();
    this.keys = Object.keys(this.cookies);
    this.cookieService.delete('format');

    //first time run, set cookie data for this component to default
    if (!(this.cookieService.check('clockFormat'))) {
      this.cookieService.set('clockFormat', '12hrDigital');
      this.myFormat = "12hrDigital";
    }
    if (!(this.cookieService.check('appCity'))) {
      this.cookieService.set('appCity', 'local');
    }
  }

  cycleClockFormat(){
    console.log("responding " + this.myFormat);
  }
  
}


//refrence for Coockie methods:
// https://github.com/BCJTI/ng2-cookies/wiki/Service-(Minimum-Example)
