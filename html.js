let questionContainer = document.getElementById("questionContainer");
let optionContainer = document.getElementById("optionContainer");
let questionNbr = document.getElementById("questionNbr");
let profileName = document.getElementById("profileName")
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let allLiElements = optionContainer.children;
let nextBtn = document.getElementById("nextBtn");
let correctAnswer =document.getElementById("correctAns")
let wrongAnswer = document.getElementById("wrongAns");
let totalQue = document.getElementById("totalQue");
let percentage = document.getElementById("percentage");
let submitBtn = document.getElementById("submitBtn");
let resultPage = document.getElementById("resultPage");
let quizContainer = document.getElementById("quizContainer");



const showProfileName=()=>{
    let name = JSON.parse(localStorage.getItem("name")); 
    // console.log(name)
    // console.log(profileName)
    profileName.innerHTML = name;

}

let htmlQuestions = [
    {
        "id": 1,
        "question": "HTML stands for?",
        "options": {
            "a": "Hyper Text Markup Language",
            "b": "Hyper Text Programming Language",
            "c": "Hyper Text Styling Language",
            "d": "Hyper Text Scripting Language"
        },
        "answer": "Hyper Text Markup Language"
    },
    {
        "id": 2,
        "question": "Which HTML tag is used to define an internal style sheet?",
        "options": {
            "a": "style",
            "b": "script",
            "c": "link",
            "d": "css"
        },
        "answer": "style"
    },
    {
        "id": 3,
        "question": "What does the <a> tag define in HTML?",
        "options": {
            "a": "Anchor (hyperlink)",
            "b": "Article",
            "c": "Audio",
            "d": "Address"
        },
        "answer": "Anchor (hyperlink)"
    },
    {
        "id": 4,
        "question": "Which tag is used to display a horizontal rule in HTML?",
        "options": {
            "a": "hr",
            "b": "br",
            "c": "line",
            "d": "hline"
        },
        "answer": "hr"
    },
    {
        "id": 5,
        "question": "What is the purpose of the <head> tag in HTML?",
        "options": {
            "a": "Contains metadata and links to scripts or stylesheets",
            "b": "Defines the main body content",
            "c": "Creates a header",
            "d": "Defines a footer"
        },
        "answer": "Contains metadata and links to scripts or stylesheets"
    },
    {
        "id": 6,
        "question": "Which HTML attribute specifies an alternate text for an image?",
        "options": {
            "a": "alt",
            "b": "title",
            "c": "src",
            "d": "longdesc"
        },
        "answer": "alt"
    },
    {
        "id": 7,
        "question": "Which tag is used to define a table row in HTML?",
        "options": {
            "a": "tr",
            "b": "td",
            "c": "th",
            "d": "table"
        },
        "answer": "tr"
    },
    {
        "id": 8,
        "question": "What does the <title> tag define in an HTML document?",
        "options": {
            "a": "The title of the document in the browser tab",
            "b": "The title of a section",
            "c": "The title of an image",
            "d": "The title of a hyperlink"
        },
        "answer": "The title of the document in the browser tab"
    },
    {
        "id": 9,
        "question": "Which tag is used to create a list with bullets?",
        "options": {
            "a": "ul",
            "b": "ol",
            "c": "li",
            "d": "list"
        },
        "answer": "ul"
    },
    {
        "id": 10,
        "question": "Which attribute specifies the destination URL for a hyperlink?",
        "options": {
            "a": "href",
            "b": "src",
            "c": "target",
            "d": "rel"
        },
        "answer": "href"
    },
    {
        "id": 11,
        "question": "What is the purpose of the <meta> tag in HTML?",
        "options": {
            "a": "Provides metadata about the document",
            "b": "Links stylesheets",
            "c": "Defines sections",
            "d": "Creates hyperlinks"
        },
        "answer": "Provides metadata about the document"
    },
    {
        "id": 12,
        "question": "Which tag is used to create a drop-down list in HTML?",
        "options": {
            "a": "select",
            "b": "option",
            "c": "list",
            "d": "dropdown"
        },
        "answer": "select"
    },
    {
        "id": 13,
        "question": "What does the iframe tag do in HTML?",
        "options": {
            "a": "Embeds another HTML document within the current document",
            "b": "Creates an image frame",
            "c": "Defines a form",
            "d": "Creates a button"
        },
        "answer": "Embeds another HTML document within the current document"
    },
    {
        "id": 14,
        "question": "What is the correct tag for inserting a line break in HTML?",
        "options": {
            "a": "br",
            "b": "break",
            "c": "lb",
            "d": "newline"
        },
        "answer": "br"
    },
    {
        "id": 15,
        "question": "Which HTML tag is used to define emphasized text?",
        "options": {
            "a": "em",
            "b": "i",
            "c": "strong",
            "d": "bold"
        },
        "answer": "em"
    },
    {
        "id": 16,
        "question": "What does the <table> tag define in HTML?",
        "options": {
            "a": "A table structure",
            "b": "A table row",
            "c": "A table cell",
            "d": "A table header"
        },
        "answer": "A table structure"
    },
    {
        "id": 17,
        "question": "Which tag is used to define a section in HTML?",
        "options": {
            "a": "section",
            "b": "div",
            "c": "article",
            "d": "aside"
        },
        "answer": "section"
    },
    {
        "id": 18,
        "question": "Which attribute is used to uniquely identify an element in HTML?",
        "options": {
            "a": "id",
            "b": "class",
            "c": "style",
            "d": "name"
        },
        "answer": "id"
    },
    {
        "id": 19,
        "question": "Which HTML tag is used to insert an image?",
        "options": {
            "a": "img",
            "b": "picture",
            "c": "media",
            "d": "figure"
        },
        "answer": "img"
    },
    {
        "id": 20,
        "question": "Which HTML tag is used to create a form?",
        "options": {
            "a": "form",
            "b": "input",
            "c": "button",
            "d": "fieldset"
        },
        "answer": "form"
    }
]
let indexNumber = 0;
const htmlQuiz = ()=>{
showProfileName()

    questionContainer.innerHTML = htmlQuestions[indexNumber].question;
    let optionObg = htmlQuestions[indexNumber].options;
    optionContainer.innerHTML = ""
    for (const key in optionObg) {
        optionContainer.innerHTML += `<li onclick = "checkResult(this)" >${optionObg[key]}</li>`;
    } 
    nextBtn.style.pointerEvents = "none";
}


durationInMinutes = 20;
function startCountdown() {
    // Calculate the total time in seconds
    let totalTime = durationInMinutes * 60;

    // Reference to the timer display element
    const timerDisplay = document.getElementById("timer");

    // Update the timer every second
    const countdownInterval = setInterval(() => {
        // Calculate minutes and seconds
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;

        // Update the timer display (add leading zeros if needed)
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

        // Check if the timer has reached 00:00
        if (totalTime <= 0) {
            clearInterval(countdownInterval); // Stop the timer
            quizContainer.style.display = "none" //hide the quiz screen
            resultPage.style.display = "block" // Redirect to result page
            showResult()
        }

        totalTime--; // Decrease total time by 1 second
    }, 1000);
}


startCountdown();
questionNbr.innerHTML = `${indexNumber+1}/${htmlQuestions.length}`
const nextQuestion =_ =>{
    nextBtn.style.pointerEvents = "none";
    if(indexNumber < htmlQuestions.length-1){
        indexNumber++
        htmlQuiz()
    }else{
        nextBtn.style.display = "none"
        submitBtn.style.display = "block"
        quizContainer.style.display = "none" //hide the quiz screen
        resultPage.style.display = "block"; //show the result screen
        showResult()  //show the results
    }
    questionNbr.innerHTML = `${indexNumber+1}/${htmlQuestions.length}`
}

let correctAns = 0;
let wrongAns = 0;

function checkResult(element) {
    if(element.innerHTML == htmlQuestions[indexNumber].answer){
        element.style.backgroundColor = "green";
        correctAns++;
    }else{
        element.style.backgroundColor = "red";
        wrongAns++;
    }

    for(var i = 0; i< allLiElements.length; i++){
        allLiElements[i].style.pointerEvents= "none";
    }
    nextBtn.style.pointerEvents = "all";
}

const showResult = ()=>{
    quizContainer.style.display="none";
    resultPage.style.display = "block";
    correctAnswer.innerHTML = correctAns;
    wrongAnswer.innerHTML = wrongAns;
    totalQue.innerHTML = htmlQuestions.length;
    percentage.innerHTML = (correctAns / htmlQuestions.length) * 100;
}
