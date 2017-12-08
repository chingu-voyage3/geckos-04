import { Component, OnInit } from '@angular/core';
import { ClockService } from "../clock.service";
// import * as moment from 'moment';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  myDate: Date;

  constructor(private clockService: ClockService) { }

  ngOnInit() {
    this.clockService.getClock().subscribe(myDate => this.myDate = myDate);
  }
}
