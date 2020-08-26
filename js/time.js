function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var d = today.getDate()
  var m = today.getMonth() + 1
  var y = today.getFullYear()
  var mm = today.getMilliseconds()

  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('time').innerHTML = m +"/"+ d +"/" + y + " | " + h + ":" + m + ":" + s + " : " + mm ;
  t = setTimeout(function() {
    startTime()
  }, 69);
}
startTime();
