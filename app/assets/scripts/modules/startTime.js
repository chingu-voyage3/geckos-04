function startTime() {
  var today = new Date(),
      hour  = today.getHours(),
      minute = today.getMinutes(),
      seconds = today.getSeconds();

      //$('#time').text(hour + ":" +minute);
  //console.log(hour+":"+minute+":"+seconds);
  hour = ('0' + hour).slice(-2);
  minute = ('0' + minute).slice(-2);
  var time = hour + ":" + minute; //+ ":" + seconds;
  //this.time = time;
  return time
}
export default startTime;
