// Located all the elements by the id
const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minute")
const secondEl = document.getElementById("second")
const ampmEl = document.getElementById("ampm")

// Create a function to get the data from our computer
function updateClock(){
  let h = new Date().getHours()
  let m = new Date().getMinutes()
  let s = new Date().getSeconds()
  let ampm = "AM";
//So if h is greater then 12 then ampm is change to the after hours
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }
  // create a conditional statement to have 0 before the hours
  // if h is less than 10 ? add "0" to h, if greater then 10 just remain h
  h = h<10 ? "0" + h : h;
  m = m<10 ? "0" + m : m;
  s = s<10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(()=>{
    updateClock()
  },1000)
  //setTimeout method lets you to set the timeout value afrer the timer expires... creates an infinite loop 

}
// Call function
updateClock();