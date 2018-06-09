var wins = 0;
var losses = 0;
var computerChoices = ["a", "b", "c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var game = {
computerGuess: "",
lives: 9,
guesses: [],
init:function(){
    game.computerGuess=computerChoices[Math.floor(Math.random() * computerChoices.length)];
    this.guesses=[];
    this.lives=9;
}
};

game.init();

document.onkeyup = function(event) {
    console.log("Inside key up function");
    var winsspan= document.getElementById("wins");
    var lossesspan= document.getElementById("losses");
    var livesspan= document.getElementById("lives");
    var guessesspan= document.getElementById("guesses");

    var userGuess = event.key.toLowerCase();
    console.log(userGuess+game.computerGuess);
    if(userGuess == game.computerGuess){
        wins++;
        winsspan.innerText= wins;
        game.init();
        guessesspan.innerText="";

    } else{
        
        game.lives--;
        game.guesses.push(userGuess);
        livesspan.innerText= game.lives;
        guessesspan.innerText= game.guesses;
        if(game.lives==0){
            losses++;
            lossesspan.innerText= losses;
            game.init();
            guessesspan.innerText="";
        }
        

    }

}