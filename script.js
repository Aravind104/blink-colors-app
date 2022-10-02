const startBtn=document.querySelector("#start");
const stopBtn=document.querySelector("#stop");

startBtn.addEventListener("click",changeColor);
stopBtn.addEventListener("click",stopTextColor)
let intervalId;
function changeColor(){
    if(!intervalId){
        intervalId =setInterval(flashText,1000);
    }
}

function flashText() {
    const oElem = document.getElementById("my_box");
    oElem.className = oElem.className === "go" ? "stop" : "go";
}

function stopTextColor() {
    clearInterval(intervalId);
    // release our intervalId from the variable 
    intervalId = null;
}