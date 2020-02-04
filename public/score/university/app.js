function startCount()
{
  const db = firebase.database().ref();
  db.update({i:0})
  get = document.getElementById("setsec").value=180;
  display();
}
  function display() {
  nowmin = Math.floor(get/60)
  nowsec = get%60;
  if (get>=0)
  {
    document.getElementById("time").innerHTML = nowmin+"<span>:</span>"+nowsec;
    document.getElementById("setsec").value = get;
    get = get - 1 ;
    setTimeout("display()",1000);
    /*if (get==0)
    {
      document.getElementById("container").innerHTML="<audio autoplay='autoplay'><source src='ding.mp3' type = 'audio/mpeg'></audio>";
    }*/
  }
}
function resetTime()
{
  
}
function stop()
{
  var sr = firebase.database().ref("KMTIL/1");
  sr.update({i:0})
   document.getElementById("setsec").value = get;
   document.getElementById("nowmin").innerHTML = (2-nowmin) +"<span>:</span>"+ (60-nowsec);
get = 0;
}