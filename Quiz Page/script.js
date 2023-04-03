const quiz = document.getElementById("quiz");
const answerEl =document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const answer1 = document.getElementById("answer-1-text");
const answer2 = document.getElementById("answer-2-text");
const answer3 = document.getElementById("answer-3-text");
const answer4 = document.getElementById("answer-4-text");
const enterButton = document.getElementById("enter");
const startButton = document.getElementById("start-button")

startButton.addEventListener("click", startQuiz); 
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
            answer: "d"
    }
];
let quizStart = 0;
let score = 0;

function startQuiz () {
    const quizStartData = allQuestions[quizStart];
    const seeQuiz = document.getElementById("container-2");
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
        } 
    }
    clearAnswers();
    startQuiz();
}



function clearAnswers() {
    const checkAnswer = document.getElementsByClassName("answer");
    for(var i = 0; i < checkAnswer.length; i++) {
        checkAnswer[i].checked = false;
    }
}