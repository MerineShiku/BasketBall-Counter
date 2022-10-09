
let homeScore= 0
let guestScore= 0
homePoints= document.querySelector(".home-points")

guestPoints= document.querySelector(".guest-points")
winnerBanner= document.getElementById("winner-banner")



 
//adding points to home team
function add1point(){

    homeScore+=1

    homePoints.textContent = homeScore   

   


}

function add2point(){

    homeScore +=2

    homePoints.textContent = homeScore 
}


function add3point(){
    
    homeScore  +=3

    homePoints.textContent =  homeScore 
}



//adding points to guest team

function add1guest(){

    guestScore +=1

    guestPoints.textContent =  guestScore
   
}


function add2guest(){

    guestScore +=2


    guestPoints.textContent = guestScore
    
}


function add3guest(){
  
    guestScore +=3

    guestPoints.textContent =  guestScore
    
}


function reset(){
    guestScore= 0
    homeScore= 0
    guestPoints.textContent =  guestScore
    homePoints.textContent =  homeScore   
}


//display winner banner
 
  //conditions for banner to show
   //banner  visible

 if (6 < 4) {
    winnerBanner.style.display="block";
   
    winnerBanner.innerText="Guest Team is Winning";

    console.log("GuestTeam winning");



 }else if(4>6){

    console.log("homeTeam winning");


    winnerBanner.style.display="block";
    
    winnerBanner.innerText="Home Team is Winning";
      

    //banner  not visible
  }else if(homeScore==guestScore && guestScore!=0){

    winnerBanner.style.display="block";
    
      winnerBanner.innerText ="DRAW";
      console.log("Draw!")


   //banner  not visible
 }else(homeScore==guestScore==0)
 {
 
      winnerBanner.style.display="none";

      console.log("ALL losers")

 //banner  not visible
}




// Set the date we're counting down to
let countDownDate = new Date("20 January 2023, 15:50:00").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("timer-display").innerHTML = days + "d: " + hours + "h: " 
  + minutes + "m: " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer-display").innerHTML = "EXPIRED";}
}, 1000);
