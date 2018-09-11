console.log ("hola")

var wordlist = ["arbol", "sombrero", "casa", "carro", "bicicleta", "computador", "perro", "cocina", "cuchara", "escuela","estudiante","gato"];
var images = ["assets/images/cat.jpg", "assets/images/bicycle.jpeg", "assets/images/car.jpeg", "assets/images/dog.jpg","assets/images/hat.jpeg","assets/images/house.jpeg", "assets/images/tree.jpeg"]
var guessesleft = 12;
var dash = "";
var guessedLetter = []
var wins = 0;


// DRAW A DASH FOR THE MISSING LETTER 

var pickaWord = wordlist[Math.floor(Math.random() * wordlist.length)]
var pickaImage = images[Math.floor(Math.random() * images.length)]
dash = getDashAndLetters(pickaWord, guessedLetter)
document.getElementById("dash").innerHTML = dash; 

console.log("This is the end " + dash)

///GUESSED WORD
// word The word the game is using right now, such as carro
//  chosenLetters A list of key's pressed, such as ["a", "n", "z"]
//  * @returns A string with dashes on letters not guessed and the guessed characters
//  * For the above cases, it would return _ a r r _


function getDashAndLetters (word, chosenLetters) {
    var result = "";
    for (i=0; i<word.length; i++) {

        if ( chosenLetters.includes(word.charAt(i))) {
            result = result + word.charAt(i) + " ";
        }
        else {
            result = result + "_ "
        }
    }
    return result;
}


// LISTEN THE KEY PRESSED

// If the guessedLetter is not in the array then substract and type letter.
// If the guessedLetter is already in the array then no type. 
// COUNTING DOWN THE letters guessed

document.onkeypress = function(e) { 

    if (guessesleft > 0) {
        if (!guessedLetter.includes(e.key)) {
            guessesleft = guessesleft -1;
            console.log(e.key);
            console.log(guessesleft);

            document.getElementById("countDown").innerHTML = guessesleft;    
            guessedLetter[guessedLetter.length]=e.key;
            console.log(guessedLetter);
            document.getElementById("GuessedLetters").innerHTML = guessedLetter;
            dash = getDashAndLetters(pickaWord, guessedLetter);
            document.getElementById("dash").innerHTML = dash; 
            Winner()
        }      
    }
    else {
        alert ("Start a New Game!")
    }
}

/// win counting

    function Winner () {
        if (!dash.includes("_")) {
            wins++;
            document.getElementById("WinsCounts").innerHTML = "WINS " + "<br>"+ wins;
            guessesleft=0;
        }
    }


// start new game

function StartNewGame(){

   // pick a new word
   pickaWord = wordlist[Math.floor(Math.random() * wordlist.length)]
    // reset guesses to 12
    guessesleft = 12;
    // empty out the guessed list
    guessedLetter = []
    // create a new dash
    dash = "";
    for (var i=0; i < pickaWord.length ; i = i+1) {
        dash = dash  + "_ ";

    } 
    // updated HTML page
    document.getElementById("dash").innerHTML = dash; 
    document.getElementById("countDown").innerHTML = guessesleft; 
    document.getElementById("GuessedLetters").innerHTML = guessedLetter;

}

//     document.onkeypressl = function(e) { 
//     console.log(e.key);
//     guessedLetter[guessedLetter.length]=e.key;
//     console.log(guessedLetter)
//     document.getElementById("GuessedLetters").innerHTML = guessedLetter;

//** SELECT NEW IMAGE CLICKING THE IMAGE 

    function ChangeImg () {
        var pickaImage = images[Math.floor(Math.random() * images.length)];
        document.getElementById("image").src= pickaImage;
       
    }
    
 



 