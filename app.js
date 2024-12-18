let quizName = document.getElementById("quizName");
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let profileName = document.getElementById("profileName");



const showStartPage = ()=>{
    if(userName.value < 3 && userEmail.value < 3){
        alert("Please, Fill the correct Details!")
    }else{
        localStorage.setItem("name" , JSON.stringify(userName.value))
        location.href = "./start.html"
    }
} 


const showProfileName=()=>{
    let name = JSON.parse(localStorage.getItem("name")); 
    // console.log(name)
    // console.log(profileName)
    profileName.innerHTML = name;

}

const showHtmlQuiz=()=>{
        console.log("HTML quiz");
        location.href = "./htmlQuiz.html"    
}
  
const showCssQuiz=()=>{
    console.log("Css quiz");
    location.href = "./CssQuiz.html"
}  


