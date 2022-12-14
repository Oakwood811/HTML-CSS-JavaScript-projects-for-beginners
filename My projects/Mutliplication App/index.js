// to replace the current number we can use random function from the math properties
const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
// converting the id from the html to a variable name
const questionEl = document.getElementById("question");

const inputEl = document.getElementById("input");

const formEl = document.getElementById("form");

const scoreEl = document.getElementById("score");

//in order to prevent the score from remaining 0 
let score = JSON.parse (localStorage.getItem("score"));
// to get no erros we just use the "if" statement.. saving in local storage
if(!score){
  score = 0;
}
// we are now returning the score from storage and updating the score
scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${num1} multiply by ${num2}?`

const answerEl = num1 * num2;

// add an eventListener to track when the answer is submited from the form and get the data from the input
// Everytime the answer is submitted we active a if callback function
formEl.addEventListener("submit", ()=>{
  //to convert strings into numbers just add the + sign before the element
  const userAnswer = +inputEl.value;
  if(userAnswer === answerEl){
    score++; //add 1 to the score
    updateLocalStorage();

  }else{
  score--; // minus 1 to the score
  updateLocalStorage();
}
})

//to store the score insde of the browser we can create a function for that.. ONLY stores strings so we use JSON.stringify
function updateLocalStorage(){
  localStorage.setItem("score", JSON.stringify(score));
}

