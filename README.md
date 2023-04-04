# QUIZ

-[Live Site](https://lauriefish22.github.io/quiz/)
-[Github](https://github.com/lauriefish22/quiz)
## TECHNOLOGY USED

-[Local Storage](https://www.w3schools.com/jsref/prop_win_localstorage.asp) 
-[Timer](https://www.w3schools.com/howto/howto_js_countdown.asp)
-[HTML/JS](https://www.w3schools.com/jsref/prop_html_innerhtml.asp)

![assets](./Assets/Screenshot%202023-04-03%20at%209.47.17%20PM.png)
## CONTACT
Laurie Fish
iamlauriefish@gmail.com

## DESCRIPTION

This project creates a quiz that is timed but adds a fun element of losing 15 seconds if you answer a question incorrectly.  When finished, you will see your score is recorded on a leader board that is saved.  This was a great opportunity to use the radio options, local storage and practice functions and event listeners. 


## LEARNING POINTS

The most challenging part of this was to use local storage to save the data as well as putting all of the pieces together to create a full functioning quiz.  The timer piece was also interesting to put together and make it fit in with everything else.  

## A FEW DETAILS 

This project uses JavaScript to combine arrays, functions, event listeners and loops to create this quiz.  Styling was used more than I have before in JavaScript rather than only CSS which was great to practice. Below is an example of the most challenging part of the quiz from me, which was the local storage.  I went one step further and set it up to append future scores to the element. 

```function displayFinalScore () {
    localStorage.setItem(inputInitials.value, score);
    
    var listEl = document.getElementById("list");
    for(var i = 0; i < localStorage.length; i++) {
        var newListItem = document.createElement("li");
        
        newListItem.innerText = ""+localStorage.key(i) + " " +localStorage.getItem(localStorage.key(i));
        listEl.appendChild(newListItem);
        finishedBox.style.visibility = "hidden";
        finalBox.style.visibility = "visible";
        seeQuiz.style.visibility = "hidden";
    }
}    ```




