const quiz = document.getElementById("quiz");
const answerEl =document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const answer1 = document.getElementById("answer-1-text");
const answer2 = document.getElementById("answer-2-text");
const answer3 = document.getElementById("answer-3-text");
const answer4 = document.getElementById("answer-4-text");
const enterButton = document.getElementById("enter");
const startButton = document.getElementById("start-button");
const scoreButton = document.getElementById("view-high-scores");
var inputInitials = document.getElementById("input-initials");
var initialsButton = document.getElementById("initials-button");
var secCount = 60
var timer = document.getElementById("timer");
var timerId;
var totalScore = document.getElementById("final-score");
const seeQuiz = document.getElementById("container-2");
var finishedBox = document.getElementById("finished-box-container");

finishedBox.style.visibility = "hidden";


startButton.addEventListener("click", startQuiz); 
// scoreButton.addEventListener("click", )
enterButton.addEventListener("click", getAnswer);
    


const allQuestions = [
    {
        
        question: "What does the C in Crud stand for?",
            a: "Construct",
            b: "Copy",
            c: "Create", 
            d: "Cut",
            answer: "c"
    },
    {
           
        question: "what does API stand for?",
            a: "Application Program Interface",
            b: "Application Private Interface",
            c: "Application Program Index",
            d: "Absolute Program Interface",
            answer: "a"
         
    },
    {
                
        question: "What is a function?",
            a: "Code that changes colors on a page",
            b: "Code that creates buttons",
            c: "Functions save files to a directory",
            d: "Code that will complete a set task",
            answer: "d"
    }, 
    {
        
        question: "A group of properties like color, size and names together form what?",
            a: "An array",
            b: "A parameter",
            c: "An object",
            d: "An element",
            answer: "c"
    }
];
let quizStart = 0;
let score = 0;
let counter;

// function displayScore () {





function startQuiz () {
    // timerId = setInterval(timer, 1000);
    const quizStartData = allQuestions[quizStart];
    
    const noIntro = document.getElementById("intro");
    noIntro.style.visibility = "hidden";
    seeQuiz.style.display = "flex";
    questionEl.innerText = quizStartData.question
    answer1.innerText = quizStartData.a
    answer2.innerText = quizStartData.b
    answer3.innerText = quizStartData.c
    answer4.innerText = quizStartData.d
}
function getAnswer() {
    var answer = "";
    const checkAnswer = document.getElementsByClassName("answer"); 
    for(var i = 0; i < checkAnswer.length; i++) {
        if(checkAnswer[i].checked) {
            answer = checkAnswer[i].value;
            if(answer == allQuestions[quizStart].answer) {
                quizStart++;
                score++;
            } else {
                quizStart++;
                alert ("wrong");
            }
            totalScore.innerHTML = "Your score is " + score;
        } 
    }
        clearAnswers();
        if(quizStart < allQuestions.length) {
            startQuiz();
        } else {
            seeQuiz.style.visibility = "hidden";
            finishedBox.style.visibility = "visible";
            inputScore();
        }
        
}


    


function clearAnswers() {
    const checkAnswer = document.getElementsByClassName("answer");
    for(var i = 0; i < checkAnswer.length; i++) {
        checkAnswer[i].checked = false;
    }
}


/*function startTimer(time){
    counter = setInterval(timer, 1000);

function timer () {
    secCount.textContent = time;
    time--;
    }
    function timer() {
    secCount--;
    timer.textContent = secCount;
    
}*/
 function inputScore () {
    initialsButton.addEventListener("click", displayFinalScore);
 }
 function displayFinalScore () {
    localStorage.setIem(inputInitials.value, score);
    
    var listEl = document.getElementById("list");
    for(var i = 0; i < localStorage.length; i++) {
        var newListItem = document.createElement("li");
        localStorage.key(i);
        listEl.innerHTML = ""+localStorage.key(i) + " " +localStorage.getItem(localStorage.key(i));
        listEl.appendChild(newListItem);
        

    }
 }    