import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  thisTime = Date.now();
  //moment("2014-06-01T12:00:00Z");

  constructor() {}

  ngOnInit() {}

}
