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
  myFormat: string;
  myTimezone: string;
  cookies: Object;
  keys: Array<string>;

  constructor(private clockService: ClockService, private cookieService: CookieService) {
    this.update();
  }

  ngOnInit() {
    this.clockService.getClock().subscribe(myDate => this.myDate = myDate);
    this.myFormat = this.cookieService.get('clockFormat');
    this.myTimezone = this.cookieService.get('timezone');
  }

  update() {
    this.cookies = this.cookieService.getAll();
    this.keys = Object.keys(this.cookies);

    //first time run, set cookie data for this component to default
    if (!(this.cookieService.check('clockFormat'))) {
      this.myFormat = 'h:mm a EEEE, MMMM d';
      this.cookieService.set('clockFormat', this.myFormat);
    }
    // this.cookieService.delete('timezone')
    if (!(this.cookieService.check('timezone'))) {
      this.myTimezone = `${new Date().getHours() - new Date().getUTCHours()}`;
      this.cookieService.set('timezone', this.myTimezone);
    }
  }

  cycleClockFormat(){
    //date pipe format refrence:
    //  https://angular.io/api/common/DatePipe#datepipe
    var formats = [
    'MMM d, y, h:mm:ss a', //Jun 15, 2015, 9:03:01 AM
    'MMM d, y, HH:mm:ss',  //Jun 15, 2015, 09:03:01 - 24hr time
    'M/d/yy, h:mm a',      //6/15/15, 9:03 AM
    'M/d/yy, HH:mm',       //6/15/15, 9:03 - 24hr time
    'EEEE, MMMM d, y',     //Monday, June 15, 2015
    'h:mm a EEEE, MMMM d', //9:03 AM Monday, June 15
    'HH:mm EEEE, MMMM d',  //9:03 Monday, June 15 - 24hr time
    'h:mm:ss a',           //9:03:01 AM
    'HH:mm:ss',            //09:03:01 - 24hr time
    'h:mm a',              //9:03 AM
    'HH:mm',               //09:03 - 24hr time
    'h:mm a zzzz',          //9:03 AM timezone
    'EEEE, MMMM d h:mm a zzzz'//Monday, June 15 9:03 AM timezone
    ]
    var next = formats.indexOf(this.myFormat) + 1;
    if (next >= formats.length) {next = 0}
    this.myFormat = formats[next];

    this.cookieService.set('clockFormat', this.myFormat);
  }

  assertTimezone(incomingTimezone: "nil"){
    var current = parseInt(incomingTimezone);
    if (incomingTimezone == "nil") {
      var current = new Date().getHours() - new Date().getUTCHours();
    }
    this.myTimezone = `${current}`;
    this.cookieService.set('timezone', this.myTimezone);
  }


}


//refrence for Coockie methods:
// https://github.com/BCJTI/ng2-cookies/wiki/Service-(Minimum-Example)
