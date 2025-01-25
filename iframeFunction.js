function openCity(evt, cityName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " w3-red";
  }

  function convertTime() {
  //user timezone
  const targetTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  //match date time
  let matchDateTime = new Date(2025, 0, 25, 14, 30);
  
  if ((new Date().getDate()) > (matchDateTime.getDate())) {
    document.getElementById("match_yet_to_begin").style.display = 'none';
    document.getElementById("output").innerText = 'Join us on Telegram';
    document.getElementById("output").href = "https://t.me/sports108official";
    return;
   }

  if ((new Date().getDate() >= matchDateTime.getDate()) && (new Date().getTime() >= matchDateTime.getTime())) {
    document.getElementById("match_yet_to_begin").style.display = 'none';
    document.getElementById("output").innerText = '.. Sports108 Live .. ';
    return;
  }

  let todayTomorrow;
  let outputFinal;
  if (new Date().getDate() === matchDateTime.getDate()) {
    todayTomorrow = 'Today, ';
    outputFinal = todayTomorrow + matchDateTime.toLocaleString("en-US", {
      hour: 'numeric',
      minute: 'numeric',
      timeZone: targetTimezone
    });	
  }else if((new Date().getDate() + 1) === matchDateTime.getDate()){
    todayTomorrow = 'Tomorrow, ';
    outputFinal = todayTomorrow + matchDateTime.toLocaleString("en-US", {
      hour: 'numeric',
      minute: 'numeric',
      timeZone: targetTimezone
    });
  }else {
    todayTomorrow = '';
    outputFinal = todayTomorrow + matchDateTime.toLocaleString("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "numeric",
      hour: 'numeric',
      minute: 'numeric',
      timeZone: targetTimezone
    });
  }

  // display the match date time
  document.getElementById("output").innerText = outputFinal;
}




var i1 = document.querySelector('#t1'); 
var l1='https://streambtw.com/iframe/ch6.php';
var l='https://www.warnoir.online/p/media-player.html?embed=https://v5.sportsonline.si/channels/hd/hd2.php';
var l='https://me.webcric.com/frame5.htm';
i1.setAttribute('src', l1); 

var i2 = document.querySelector('#t2'); 
var l2='https://streamtp2.com/global1.php?stream=dazn_laliga';
i2.setAttribute('src', l2); 

var i3 = document.querySelector('#t3'); 
var l3='https://la12hd.com/vivo/canal.php?stream=m_laligatv';
i3.setAttribute('src', l3); 
