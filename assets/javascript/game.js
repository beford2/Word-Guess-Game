document.onkeyup = function(event) {
    
    var userGuess = event.key;
    document.getElementById("letters-guessed").appendChild(userGuess);

}


