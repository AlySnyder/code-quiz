// my variable for questions and answers
var questions = [
    {
        "question": "Which of these are not considered a primitive type of Javascript?",
        "answer1": {"text": "Boolean", "isCorrect": false},
        "answer2": {"text": "Number", "isCorrect": false},
        "answer3": {"text": "String", "isCorrect": false},
        "answer4": {"text": "Object", "isCorrect": true},
    },
    {
        "question": "Vegeta, what's the scouter say about his powerlevel?",
        "answer1": {"text": "Nothing", "isCorrect": false},
        "answer2": {"text": "IT'S OVER 9000!!", "isCorrect": true},
        "answer3": {"text": "He doesnt know", "isCorrect": false},
        "answer4": {"text": "It's under 2000", "isCorrect": false},
    },
    {
        "question": "What is the world's most popular programming language?",
        "answer1": {"text": "Javascript", "isCorrect": true},
        "answer2": {"text": "CSS", "isCorrect": false},
        "answer3": {"text": "HTML", "isCorrect": false},
        "answer4": {"text": "English", "isCorrect": false},
    },
    {
        "question": "Which specifies the layout and style of webpages?",
        "answer1": {"text": "CSS", "isCorrect": true},
        "answer2": {"text": "Read.me", "isCorrect": false},
        "answer3": {"text": "HTML", "isCorrect": false},
        "answer4": {"text": "Local Storage", "isCorrect": false},
    }
];

var questionBlock = document.getElementById("questionBlock")

var currentQuestionIndex = 0;


// answer buttons true and false 
var startQuizButton = document.getElementById("start-quiz")
var questionText = document.getElementById("question")
var answerButton1 = document.getElementById("answer1")
var answerButton2 = document.getElementById("answer2")
var answerButton3 = document.getElementById("answer3")
var answerButton4 = document.getElementById("answer4")

answerButton1.onclick = function() {
    var question = questions[currentQuestionIndex]
    chooseAnswer(question.answer1)
    goToNextQuestion()
}

answerButton2.onclick = function() {
    var question = questions[currentQuestionIndex]
    chooseAnswer(question.answer2)
    goToNextQuestion()
}

answerButton3.onclick = function() {
    var question = questions[currentQuestionIndex]
    chooseAnswer(question.answer3)
    goToNextQuestion()
}

answerButton4.onclick = function() {
    var question = questions[currentQuestionIndex]
    chooseAnswer(question.answer4)
    goToNextQuestion()
}

function chooseAnswer(answer) {
    if (answer.isCorrect) {
        window.alert("Correct!")
        timeLeft += 5
        document.getElementById("time-remaining").innerText = timeLeft;
    } else {
        window.alert("Wrong Answer!")
        timeLeft -= 5
        document.getElementById("time-remaining").innerText = timeLeft;
    }
}

function goToNextQuestion() {
    currentQuestionIndex++
    console.log("current question: " + currentQuestionIndex)
    if (currentQuestionIndex < questions.length) {
        questionText.innerHTML = questions[currentQuestionIndex].question
        answerButton1.innerHTML = questions[currentQuestionIndex].answer1.text
        answerButton2.innerHTML = questions[currentQuestionIndex].answer2.text
        answerButton3.innerHTML = questions[currentQuestionIndex].answer3.text
        answerButton4.innerHTML = questions[currentQuestionIndex].answer4.text
    } else {
        finish()

    }
}

startQuizButton.onclick = startQuiz;

function startQuiz() {
    startQuizButton.style.display = "none"
    console.log(startQuizButton)


    //answer button 1 set attribute , button 2 ,3,4 etc, set value to true or false.
    
    document.getElementById("time-remaining").innerText = timeLeft;
    startTimer();
    currentQuestionIndex = 0;
    // function current indexquestion = 1,2,3

    questionText.innerHTML = questions[currentQuestionIndex].question
    answerButton1.innerHTML = questions[currentQuestionIndex].answer1.text
    answerButton2.innerHTML = questions[currentQuestionIndex].answer2.text
    answerButton3.innerHTML = questions[currentQuestionIndex].answer3.text
    answerButton4.innerHTML = questions[currentQuestionIndex].answer4.text

    questionBlock.hidden = false
}


//This is the timer that countsdown 
var timer;
var timeLeft = 100;
function startTimer() {
    timeLeft = 100;
    if (timer) {
        clearInterval(timer)
    }
    timer = setInterval(function() {
        timeLeft--;
        if (timeLeft <= 0) {
            finish()
        }  
        document.getElementById("time-remaining").innerText = timeLeft;
    },1000)
}


function finish() {
    clearInterval(timer);
    alert("Game Over!");
    document.getElementById("questionBlock").style.display = "none"
    document.getElementById("scoreInputContainer").style.display = "block"
    document.getElementById("finalScoreText").innerHTML += timeLeft
}

var submitButton = document.getElementById("submitButton")
submitButton.onclick = function() {
    var scores = JSON.parse(localStorage.getItem("highscores"));
    if (!scores) {
        scores = []
    }

    var initialsInput = document.getElementById("initialsInput");
    var newScore = {
        score: timeLeft,
        name: initialsInput.value
    };

    scores.push(newScore);
    localStorage.setItem("highscores", JSON.stringify(scores));

    window.location.replace("high-score.html")
}
