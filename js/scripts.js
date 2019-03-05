//business logic//
//logic for amateur terrain//


var userscore = [];
var userresult = function (){
  var result = eval(userscore.join('+'));
  alert(result);
}
//logic for rolling dice//
var playerroll = () => {
  var num =Math.floor(Math.random()*6)+1;
  if (num === 1){
    //game ends for Player//
    alert("1");
    location.reload();
    //no user score dont push to userscore array;
}
  else
  {

    userscore.push(num);
    var give = document.getElementById('usercount');
    give.innerHTML += "<li>"+num+"</li>";
    userresult();
  }

  }


//logic for professional fiasco


//UserInterface//
$(document).ready(function(){
 $(".roll").on("click",function(){
   playerroll();
 });

});
