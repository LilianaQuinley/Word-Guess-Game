console.log ("hola")

var wordlist = ["arbol", "sombrero", "casa", "carro", "bicicleta"];
var guessesleft = 12;
var dash = "";


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
