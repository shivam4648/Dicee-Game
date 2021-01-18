function diceeRolled(){
   var randomNumber1 = Math.floor(Math.random()*6 + 1);

   var randomImage1 = "images/dice"+randomNumber1+".png";

   document.querySelector(".player1img").setAttribute("src", randomImage1);

   var randomNumber2 = Math.floor(Math.random()*6 + 1);

   var randomImage2 = "images/dice"+randomNumber2+".png";

   document.querySelector(".player2img").setAttribute("src", randomImage2);
 

    
if(randomNumber1 > randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "🏁Player-1 Wins!";
    document.getElementsByTagName("h1")[0].setAttribute("style", "font-size: 100px");
}
else if(randomNumber1 < randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "Player-2 Wins!🏁";
    document.getElementsByTagName("h1")[0].setAttribute("style", "font-size: 100px");
}
else{
    document.getElementsByTagName("h1")[0].innerHTML = "😈 Draw! 😈";
    document.getElementsByTagName("h1")[0].setAttribute("style", "font-size: 100px");
}
}