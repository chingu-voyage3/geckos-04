import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ClockService {

  private clock: Observable<Date>;

  constructor() {
    this.clock = Observable.interval(1000).map(tick => new Date()).share();
  }

  getClock(): Observable<Date> {
    return this.clock;
  }

}


//refrence:
//https://codereview.stackexchange.com/questions/155944/angular-2-clock-with-rxjs-observable
// This service provides a date object every second based on the interval (1000)
