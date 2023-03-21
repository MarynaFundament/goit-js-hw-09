function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  
const startBtn  = document.querySelector(`[data-start]`);
console.log(startBtn)
const stopBtn  = document.querySelector(`[data-stop]`);
console.log(stopBtn)


const PROMPT_DELAY = 1000;
let timerId = null;

startBtn.addEventListener('click', handleStartElement)

function handleStartElement () {
    console.log(`this btn is active`)

    timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
    getRandomHexColor()
    }, PROMPT_DELAY)


    if(getRandomHexColor()) {
        startBtn.disabled = true;
        console.log(`Btn is disabled`)
    } 
    
}

stopBtn.addEventListener('click', handleStopElement)

function handleStopElement () {
    console.log(`stop btn is active`)
    clearInterval(timerId)
    startBtn.disabled = false;
}









