function startTime() {
  var today = new Date(),
      hour  = today.getHours(),
      minute = today.getMinutes(),
      seconds = today.getSeconds();
      //$('#time').text(hour + ":" +minute);
  console.log(hour+":"+minute+":"+seconds);
  return (hour + ":" + minute);
}
export default startTime;
