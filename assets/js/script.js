var startButton = document.querySelector(".start-button");
var resetButton = document.querySelector(".reset-button");
var startPage = document.querySelector(".start-page");
var pageTwo = document.querySelector(".page-two");
var pageThree = document.querySelector(".page-three");
var pageFour = document.querySelector(".page-four");
var pageFive = document.querySelector(".page-five");
var pageSix = document.querySelector(".page-six");
var pageSeven = document.querySelector(".page-seven");
var pageEight = document.querySelector(".page-eight")
var pageNine = document.querySelector(".page-nine");
var time = document.querySelector(".timer");
var rightAnswer = document.querySelector(".right");
var wrongAnswer = document.querySelector(".wrong");
var scoreRight = document.querySelector(".best-score");
var nameEl = document.querySelector("#name");
var submitEl = document.querySelector("#submit");
var highscoreClick = document.querySelector(".highscores");
var backButton = document.querySelector(".go-back")
var containerOfScores = document.querySelector(".scoreContainer");
var clearButton = document.querySelector(".clear-highscores")
var count = 50
var scoreTrackerWins = 0;
var scoreTrackerLose = 0;
var timeInterval;
var results;
var yallPercentage;
var leaderBoardObject = [];



function finalScore () {
    var endRatio = scoreTrackerWins / 5;
    var displayPercent = endRatio * 100;
    if(endRatio == Infinity) {
        scoreRight.innerHTML = "100%"
    } else {
        yallPercentage = displayPercent + "%";
        scoreRight.innerHTML = yallPercentage;
    }
}

// The countdown timer that runs
function timer () {
    time.innerHTML = count;
    timeInterval = setInterval(function(){
        count--
        time.innerHTML = count
        if(count === 0 || count < 0) {
            time.innerHTML = 0;
            clearInterval(timeInterval)
            pageTwo.style.display = "none";
            pageThree.style.display = "none";
            pageFour.style.display = "none";
            pageFive.style.display = "none";
            pageSix.style.display = "none";
            pageSeven.style.display = "none";
            pageEight.style.display = "block";
            restartQuiz();
        }
    }, 1000)
}

// The main switcher for the starting page
function mainpageSwitcher () {
    startPage.style.display = "none";
    pageTwo.style.display = "block";
}

// The function that displays if the answer is correct
function correctDisplay () {
    var answerCount = 0;
    var answerInterval = setInterval(function () {
        answerCount++
        if(answerCount === 3) {
            rightAnswer.style.display = "none";
            clearInterval(answerInterval)
        } else {
            rightAnswer.style.display = "block";
        }
    }, 500)
}



// The function that displays when the answer is incorrect
function incorrectDisplay () {
    var incanswerCount = 0;
    var incanswerInterval = setInterval(function () {
        incanswerCount++
        if(incanswerCount === 3) {
            wrongAnswer.style.display = "none";
            clearInterval(incanswerInterval)
        } else {
            wrongAnswer.style.display = "block";
        }
    }, 500)
}

// Page Two Switcher

pageTwo.addEventListener("click", function(event) {
    var element = event.target
    if(element.matches(".incorrect")){
        incorrectDisplay()
        pageTwo.style.display = "none";
        pageThree.style.display = "block";
        count = count - 10;
        scoreTrackerLose = scoreTrackerLose + 1;
    } else if (element.matches(".correct")) {
        correctDisplay()
        pageTwo.style.display = "none";
        pageThree.style.display = "block";
        scoreTrackerWins = scoreTrackerWins + 1
    }
})


// Page Three Switcher

pageThree.addEventListener("click", function(event) {
    var elementTwo = event.target
    if(elementTwo.matches(".incorrect")){
        incorrectDisplay()
        pageThree.style.display = "none";
        pageFour.style.display = "block";
        count = count - 10;
        scoreTrackerLose = scoreTrackerLose + 1;
    } else if (elementTwo.matches(".correct")){
        correctDisplay()
        pageThree.style.display = "none";
        pageFour.style.display = "block";
        scoreTrackerWins = scoreTrackerWins + 1
    }
})


// Page Four Switcher

pageFour.addEventListener("click", function(event) {
    var elementThree = event.target
    if(elementThree.matches(".incorrect")){
        incorrectDisplay()
        pageFour.style.display = "none";
        pageFive.style.display = "block";
        count = count - 10;
        scoreTrackerLose = scoreTrackerLose + 1;
    } else if (elementThree.matches(".correct")){
        correctDisplay()
        pageFour.style.display = "none";
        pageFive.style.display = "block";
        scoreTrackerWins = scoreTrackerWins + 1
    }
})


// Page Five Switcher

pageFive.addEventListener("click", function(event) {
    var elementFour = event.target
    if(elementFour.matches(".incorrect")){
        incorrectDisplay()
        pageFive.style.display = "none";
        pageSix.style.display = "block";
        count = count - 10;
        scoreTrackerLose = scoreTrackerLose + 1;
    } else if (elementFour.matches(".correct")){
        correctDisplay()
        pageFive.style.display = "none";
        pageSix.style.display = "block";
        scoreTrackerWins = scoreTrackerWins + 1
    }
})


// Page Six Switcher

pageSix.addEventListener("click", function(event) {
    var elementFive = event.target
    if(elementFive.matches(".incorrect")){
        incorrectDisplay()
        pageSix.style.display = "none";
        pageSeven.style.display = "block";
        count = count - 10;
        scoreTrackerLose = scoreTrackerLose + 1;
        finalScore();
        clearInterval(timeInterval)
    } else if (elementFive.matches(".correct")){
        correctDisplay()
        pageSix.style.display = "none";
        pageSeven.style.display = "block";
        scoreTrackerWins = scoreTrackerWins + 1
        finalScore();
        clearInterval(timeInterval)
    }
})


function restartQuiz () {
    resetButton.addEventListener("click", function() {
        count = 50;
        pageEight.style.display = "none";
        startPage.style.display = "block";
    })
}


submitEl.addEventListener("click", function(event) {
    event.preventDefault();
    if(nameEl.value === null || nameEl.value === "" || nameEl.value === undefined) {
        window.alert("Please put in a name!")
    } else {
        results = nameEl.value;
        addToLeaderboard();
        pageSeven.style.display = "none";
        pageNine.style.display = "block";
        var wholeScore = JSON.parse(localStorage.getItem("Leaderboard"));
        containerOfScores.innerHTML = "";
        wholeScore.forEach(function(person) {
            var newItem = document.createElement("p")
            newItem.innerText = person.name + ": " + person.score;
            containerOfScores.appendChild(newItem);
        })
    }
})

function addToLeaderboard () {
    upObject = {
        name: null,
        score: null,
    }
    upObject.name = results;
    upObject.score = yallPercentage;
    leaderBoardObject.push(upObject);
    localStorage.setItem("Leaderboard", JSON.stringify(leaderBoardObject));
}

function highScores () {
    highscoreClick.addEventListener("click", function() {
        startPage.style.display = "none";
        pageTwo.style.display = "none";
        pageThree.style.display = "none";
        pageFour.style.display = "none";
        pageFive.style.display = "none";
        pageSix.style.display = "none";
        pageSeven.style.display = "none";
        pageEight.style.display = "none";
        clearInterval(timeInterval);
        pageNine.style.display = "block";
        var wholeScore = JSON.parse(localStorage.getItem("Leaderboard"));
        containerOfScores.innerHTML = "";
        wholeScore.forEach(function(person) {
            var newItem = document.createElement("p")
            newItem.innerText = person.name + ": " + person.score;
            containerOfScores.appendChild(newItem);
        })
    })
}

backButton.addEventListener("click", function() {
    pageNine.style.display = "none"
    startPage.style.display = "block";
    count = 50;
    yallPercentage;
    scoreTrackerLose = 0;
    scoreTrackerWins = 0;
})

// This is the main function that starts the quiz
function startQuiz () {
    startButton.addEventListener("click", function() {
        mainpageSwitcher();
        timer();
    })
}

startQuiz();
highScores();