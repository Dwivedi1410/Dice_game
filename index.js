var diceOne = Math.random();
diceOne = diceOne * 6 + 1;
diceOne = Math.floor(diceOne);
if(diceOne===1){
    document.querySelector(".first-dice").setAttribute("src","images/dice-six-faces-one.png");
}
else if(diceOne===2){
    document.querySelector(".first-dice").setAttribute("src","images/dice-six-faces-two.png");
}
else if(diceOne===3){
    document.querySelector(".first-dice").setAttribute("src","images/dice-six-faces-three.png");
}
else if(diceOne===4){
    document.querySelector(".first-dice").setAttribute("src","images/dice-six-faces-four.png");
}
else if(diceOne===5){
    document.querySelector(".first-dice").setAttribute("src","images/dice-six-faces-five.png");
}
else if(diceOne===6){
    document.querySelector(".first-dice").setAttribute("src","images/dice-six-faces-six.png");
}



var diceTwo = Math.random();
diceTwo = diceTwo * 6 + 1;
diceTwo = Math.floor(diceTwo);
if(diceTwo===1){
    document.querySelector(".second").setAttribute("src","images/dice-six-faces-one.png");
}
else if(diceTwo===2){
    document.querySelector(".second-dice").setAttribute("src","images/dice-six-faces-two.png");
}
else if(diceTwo===3){
    document.querySelector(".second-dice").setAttribute("src","images/dice-six-faces-three.png");
}
else if(diceTwo===4){
    document.querySelector(".second-dice").setAttribute("src","images/dice-six-faces-four.png");
}
else if(diceTwo===5){
    document.querySelector(".second-dice").setAttribute("src","images/dice-six-faces-five.png");
}
else if(diceTwo===6){
    document.querySelector(".second-dice").setAttribute("src","images/dice-six-faces-six.png");
}


if(diceOne>diceTwo){
    document.querySelector(".game-won").innerHTML="Player 1 won the game";
}
else if(diceOne<diceTwo)
{
    document.querySelector(".game-won").innerHTML="Player 2 won the game";
}
else{
    document.querySelector(".game-won").innerHTML="game draw";
    document.querySelector(".game-won").style.right="570px";
}