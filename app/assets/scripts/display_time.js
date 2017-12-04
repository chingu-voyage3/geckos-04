import startTime from './modules/startTime';
//var time = require('./modules/time')  ;

function display_time() {
  document.getElementById('time').innerHTML = startTime();
  var recursion = setTimeout(display_time, 500); //500 == 0.5s
}

var Time = new display_time();
