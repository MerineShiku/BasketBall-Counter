
let homeScore= 0
let guestScore= 0
homePoints= document.querySelector(".home-points")


guestPoints= document.querySelector(".guest-points")
winnerBanner= document.getElementById("winner-banner")




//display winner banner
 
  //conditions for banner to show
   //banner  visible

  function displayBanner(){
    if (homeScore < guestScore) {
   
   
        winnerBanner.textContent = "Guest Team is winning"

        console.log(winnerBanner.innerHTML)
        
    
    
    
     }
     
     else if(homeScore  > guestScore)
     
     {
        
    
        
        winnerBanner.textContent  = "Home Team  is winning"
          
        console.log(winnerBanner.innerHTML)
       
      }else {
  
       
        
          winnerBanner.textContent  = "Teams are drawing"
      
    
    
      }   
    
    
    
  }



  //adding points to home team
function add1point(){

    homeScore += 1

   homePoints.textContent = homeScore  

 
 
   displayBanner()



}

function add2point(){

   homeScore +=2

   homePoints.textContent = homeScore 
     
   displayBanner()
}


function add3point(){
   
   homeScore  +=3

   homePoints.textContent =  homeScore 
     
   displayBanner()
}



//adding points to guest team

function add1guest(){

   guestScore +=1

   guestPoints.textContent =guestScore
     
   displayBanner()
  
}


function add2guest(){

   guestScore +=2


   guestPoints.textContent = guestScore
     
   displayBanner()
   
}


function add3guest(){
 
   guestScore +=3

   guestPoints.textContent =guestScore
     
   displayBanner()
   
}


function reset(){
   guestScore= 0
   homeScore= 0

   guestPoints.textContent =  guestScore
   homePoints.textContent =  homeScore  
     
  
   winnerBanner.textContent ="Start game"
   
 
}




 
