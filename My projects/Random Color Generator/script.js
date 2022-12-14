// Convert the id into a element
const containerEl = document.querySelector(".container")

// Using FOR LOOP 
// in for loop index start at 0 and you can replace array.length with the number of elements you want
for (let index = 0; index < 30; index++) {
  // We have to create an element for the div
  const colorContainerEl = document.createElement("div")
  // Then, to add a class we can use the classList property and add method
  colorContainerEl.classList.add("color-container")
  //Next, we need to append this new element inside this container... so write container element.append
  containerEl.appendChild(colorContainerEl)
}
const colorContainerEls = document.querySelectorAll(".color-container")

generateColors();

function generateColors(){
  colorContainerEls.forEach((colorContainerEl) => {
    const newColorCode = randomColor();
    colorContainerEl.style.backgroundColor = "#" + newColorCode;
    colorContainerEl.innerText = "#" + newColorCode;
  });
}

//Back in HTML remove the boxes we created with the "div"

//Create a color codes using a function

function randomColor() {
  const chars = "0123456789abcdef"
  const colorCodeLength = 6;
  let colorCode = ""; //start with empty and then we use for loop again, replace array.length now with the colorCodeLength 
  for (let index = 0; index < colorCodeLength; index++) {
    // want to create a variable from 0-15 from the chars
    const randomNumber = Math.floor(Math.random()*
    chars.length)
    colorCode += chars.substring(randomNumber,randomNumber+1)
   
  }
  return colorCode;
}



