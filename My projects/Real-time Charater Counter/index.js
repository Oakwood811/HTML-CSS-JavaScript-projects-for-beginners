const textareaEl = document.getElementById("textarea");

const totalCounterEl = document.getElementById("total-counter");

const remainingCounterEl = document.getElementById("remaining-counter");

//add an eventListener to track the text inside the textarea
textareaEl.addEventListener("keyup", () => {
  updateCounter();
})

function updateCounter(){
  totalCounterEl.innerText = textareaEl.value.length;

  remainingCounterEl.innerText = 
    textareaEl.getAttribute("maxLength") - 
    textareaEl.value.length; 
  }