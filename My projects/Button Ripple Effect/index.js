// querySelector- returns the first element within the document that matches
const btnEl = document.querySelector(".btn");
// addEventListener sets up a function to be called whenever the specified event is delivered
btnEl.addEventListener("mouseover", (event) =>{
  const x = event.pageX - btnEl.offsetLeft
  const y = event.pageY - btnEl.offsetTop

  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");

})
// offsetTop & offsetLeft -  read-only property returns the distance of the outer border of the current element relative to the inner border of the top or left of the offsetParent, the closest positioned ancestor element.
