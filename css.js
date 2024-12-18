let questionContainer = document.getElementById("questionContainer");
let optionContainer = document.getElementById("optionContainer");
let profileName = document.getElementById("profileName");


const showProfileName=()=>{
    let name = JSON.parse(localStorage.getItem("name")); 
    // console.log(name)
    // console.log(profileName)
    profileName.innerHTML = name;

}

let cssQuestions = [
        {
            "id": 1,
            "question": "What does CSS stand for?",
            "options": {
                "a": "Cascading Style Sheets",
                "b": "Colorful Style Sheets",
                "c": "Creative Style Sheets",
                "d": "Computer Style Sheets"
            },
            "answer": "Cascading Style Sheets"
        },
        {
            "id": 2,
            "question": "Which property is used to change the background color of an element?",
            "options": {
                "a": "background-color",
                "b": "color",
                "c": "bgcolor",
                "d": "background-style"
            },
            "answer": "background-color"
        },
        {
            "id": 3,
            "question": "Which CSS property controls the text size?",
            "options": {
                "a": "font-size",
                "b": "text-size",
                "c": "size",
                "d": "text-style"
            },
            "answer": "font-size"
        },
        {
            "id": 4,
            "question": "Which CSS property is used to make text bold?",
            "options": {
                "a": "font-weight",
                "b": "font-bold",
                "c": "text-bold",
                "d": "weight-bold"
            },
            "answer": "font-weight"
        },
        {
            "id": 5,
            "question": "How do you add a comment in CSS?",
            "options": {
                "a": "/* This is a comment */",
                "b": "// This is a comment",
                "c": "# This is a comment",
                "d": "<!-- This is a comment -->"
            },
            "answer": "/* This is a comment */"
        },
        {
            "id": 6,
            "question": "Which property is used to change the font of an element?",
            "options": {
                "a": "font-family",
                "b": "font-type",
                "c": "font-style",
                "d": "font-text"
            },
            "answer": "font-family"
        },
        {
            "id": 7,
            "question": "Which property is used to align text horizontally?",
            "options": {
                "a": "text-align",
                "b": "align",
                "c": "horizontal-align",
                "d": "text-position"
            },
            "answer": "text-align"
        },
        {
            "id": 8,
            "question": "Which property is used to add space inside the border of an element?",
            "options": {
                "a": "padding",
                "b": "margin",
                "c": "spacing",
                "d": "border-space"
            },
            "answer": "padding"
        },
        {
            "id": 9,
            "question": "Which CSS property controls the visibility of an element?",
            "options": {
                "a": "visibility",
                "b": "display",
                "c": "hidden",
                "d": "opacity"
            },
            "answer": "visibility"
        },
        {
            "id": 10,
            "question": "How do you make a list not display bullet points?",
            "options": {
                "a": "list-style-type: none;",
                "b": "list: none;",
                "c": "text-decoration: none;",
                "d": "list-style: no-bullets;"
            },
            "answer": "list-style-type: none;"
        },
        {
            "id": 11,
            "question": "Which CSS property is used to set the space between lines of text?",
            "options": {
                "a": "line-height",
                "b": "text-height",
                "c": "spacing",
                "d": "letter-spacing"
            },
            "answer": "line-height"
        },
        {
            "id": 12,
            "question": "How do you select an element with the id 'header' in CSS?",
            "options": {
                "a": "#header",
                "b": ".header",
                "c": "header",
                "d": "*header"
            },
            "answer": "#header"
        },
        {
            "id": 13,
            "question": "Which CSS property is used to change the text color of an element?",
            "options": {
                "a": "color",
                "b": "text-color",
                "c": "font-color",
                "d": "text-style"
            },
            "answer": "color"
        },
        {
            "id": 14,
            "question": "How do you apply a CSS style to a class?",
            "options": {
                "a": ".classname",
                "b": "#classname",
                "c": "*classname",
                "d": "classname"
            },
            "answer": ".classname"
        },
        {
            "id": 15,
            "question": "Which property is used to set the width of an element's border?",
            "options": {
                "a": "border-width",
                "b": "border-thickness",
                "c": "border-size",
                "d": "border-style"
            },
            "answer": "border-width"
        },
        {
            "id": 16,
            "question": "Which CSS property is used to specify the stacking order of elements?",
            "options": {
                "a": "z-index",
                "b": "position",
                "c": "stack",
                "d": "display"
            },
            "answer": "z-index"
        },
        {
            "id": 17,
            "question": "Which property specifies whether an element is floated left or right?",
            "options": {
                "a": "float",
                "b": "position",
                "c": "align",
                "d": "clear"
            },
            "answer": "float"
        },
        {
            "id": 18,
            "question": "What is the default position property in CSS?",
            "options": {
                "a": "static",
                "b": "relative",
                "c": "absolute",
                "d": "fixed"
            },
            "answer": "static"
        },
        {
            "id": 19,
            "question": "Which property specifies the amount of space between the content and border?",
            "options": {
                "a": "padding",
                "b": "margin",
                "c": "spacing",
                "d": "border-spacing"
            },
            "answer": "padding"
        },
        {
            "id": 20,
            "question": "Which CSS unit is relative to the size of the root element?",
            "options": {
                "a": "rem",
                "b": "em",
                "c": "px",
                "d": "%"
            },
            "answer": "rem"
        }
    ]
    
let indexNumber = 0;
const cssQuiz =_=>{
    showProfileName()
    questionContainer.innerHTML = cssQuestions[indexNumber].question;
    let optinObj = cssQuestions[indexNumber].options;
    optionContainer.innerHTML = ""
    for (const key in optinObj) {
        optionContainer.innerHTML += `<li>${optinObj[key]}</li>` 
    }
}

let nextQuestion = _=>{
    indexNumber++
    cssQuiz()
}