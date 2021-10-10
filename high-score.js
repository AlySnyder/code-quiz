highscoresList = document.getElementById("highscoresList")

function loadScores() {
    var highscores = JSON.parse(localStorage.getItem("highscores"))
    for (var i = 0; i < highscores.length; i++) {
        var highscore = highscores[i];

        var li = document.createElement("li")
        li.innerHTML = highscore.name + ": " + highscore.score;
        highscoresList.appendChild(li)
    }

    
    

}

loadScores()
