//business logic//
//logic for amateur level//


var userscore = [];
//logic for rolling dice//
var playerroll = () => {
  var num =Math.floor(Math.random()*6)+1;
  if (num === 1){
    //game ends for Player//
    document.getElementsByClassName('fail')[0].textContent= ""
    document.getElementsByClassName('pass')[0].textContent= "roll the dice";
    //hide button//
    $(".btn").show();
    //no user score dont push to userscore array;
    adduserresult();
  }
  else if(result === undefined)
  {
    alert("Ooops!..you rolled a one.better luck next time")
  }
  else
  {
    document.getElementsByClassName('fail')[0].textContent = "";
    document.getElementsByClassName('pass')[0].textContent = "roll the dice";
    playerroll.push(num);
    var give = document.getElementById('usercount');
    give.innerHTML += "<li>"+num+"</li>";
    $(".btn").show();
    adduserresult();
  }

  }
