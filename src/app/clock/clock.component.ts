import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  thisTime = moment("2014-06-01T12:00:00Z");
  //Date.now();

  constructor() {}

  ngOnInit() {}

}
