const display = document.querySelector(".display-time");
const minutes = document.querySelector("#minutes");
let seconds = 0;
const btn = document.querySelector("#start-btn");
let updated_min;
let updated_sec;
let updateTimeInterval;

btn.addEventListener("click", () => {
  if (!minutes.value ) {
    console.log("Please enter a valid time.");
  } else {
    btn.disabled = true;
    handleClick();
  }
});

function displayTime() {
  updated_min = minutes.value <= 9 ? "0" + minutes.value : minutes.value;
  updated_sec = seconds <= 9 ? "0" + seconds : seconds;
  display.textContent = updated_min + ":" + updated_sec;
}

function updateTime() {
  if(seconds == 0 && minutes.value == 0){
    handleStop();
    return;
  }
  if(seconds == 0){
    minutes.value = minutes.value -1;
    seconds = 59;
  }
  else{
    seconds --;
  }
  displayTime();
}

function handleClick (){
  updateTimeInterval = setInterval(updateTime,1000);
}

function handleStop(){
  minutes.value = 0;
  seconds = 0;
  clearInterval(updateTimeInterval);
  display.textContent = "Time's Up!!";
  btn.disabled = false;
}
