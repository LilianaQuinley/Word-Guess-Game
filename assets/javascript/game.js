console.log ("hola")

var wordlist = ["arbol", "sombrero", "casa", "carro", "bicicleta"];
var guessesleft = 12;
var dash = "";
var guessedLetter = []


// DRAW A DASH FOR THE MISSING LETTER 

var pickaWord = wordlist[Math.floor(Math.random() * wordlist.length)]
console.log("choosen word is "+ pickaWord)

console.log("the length of the word is " + pickaWord.length)

for (var i=0; i < pickaWord.length ; i = i+1) {
    dash = dash  + "_ ";

    console.log(dash);
    console.log("In my loop " + i + " " + pickaWord.charAt(i));
} 
document.getElementById("dash").innerHTML = dash; 

console.log("This is the end " + dash)

// LISTEN THE KEY PRESSED

// If the guessedLetter is not in the array then substract and type letter.
// If the guessedLetter is already in the array then no type. 
// COUNTING DOWN THE letters guessed

document.onkeypress = function(e) { 

    if (!guessedLetter.includes(e.key)) {
        guessesleft = guessesleft -1;
        console.log(e.key);
        console.log(guessesleft);
        document.getElementById("countDown").innerHTML = guessesleft;
    
        guessedLetter[guessedLetter.length]=e.key;
        console.log(guessedLetter);
        document.getElementById("GuessedLetters").innerHTML = guessedLetter;

        if (pickaWord.includes(e.key)) {
            console.log("is included in word " + e.key);
            console.log(pickaWord);
            document.getElementById("word").innerHTML = pickaWord;
        }
    }      
}



//     document.onkeypressl = function(e) { 
//     console.log(e.key);
//     guessedLetter[guessedLetter.length]=e.key;
//     console.log(guessedLetter)
//     document.getElementById("GuessedLetters").innerHTML = guessedLetter;

// }







