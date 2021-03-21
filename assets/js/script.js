var startButton = document.querySelector(".start-button")
var startPage = document.querySelector(".start-page")
var pageTwo = document.querySelector(".page-two")
var time = document.querySelector(".timer")
var count = 60

// The countdown timer that runs
function timer () {
    time.innerHTML = 60;
    var timeInterval = setInterval(function(){
        count--
        time.innerHTML = count
        if(count === 0) {
            clearInterval(timeInterval)
            // Take to game over page
        }
    }, 1000)
}

function mainpageSwitcher () {
    startPage.style.display = "none";
    pageTwo.style.display = "block";
}

// Need to do matching for each page
function pageTwoSwitcher () {
    pageTwo.addEventListener("click", function(event) {
        var element = event.target
        if(element.matches(".incorrect")){
            console.log("This is wrong")
        } else {
            console.log("This is right")
        }
    })
}

// This is the main function that starts the quiz
function startQuiz () {
    startButton.addEventListener("click", function() {
        mainpageSwitcher();
        pageTwoSwitcher();
        timer();
    })
}
startQuiz();