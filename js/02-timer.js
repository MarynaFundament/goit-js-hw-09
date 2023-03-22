const myInput = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("[data-start]");
console.log(startBtn);
const dataDays = document.querySelector("[data-days]");
const dataHours = document.querySelector("[data-hours]");
const dataMinutes = document.querySelector("[data-minutes]");
const dataSeconds = document.querySelector("[data-seconds]");



startBtn.disabled = true;
let chosenData;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
  
      chosenData = selectedDates[0];
      const currentDate = new Date();
  
      if (chosenData < currentDate) {
        alert("Please choose a date in the future");
        return;
      }
  
      if (chosenData > currentDate) {
        startBtn.disabled = false
    }
   }
  };
  
  flatpickr(myInput, options);

class Timer{
    constructor({onTick}){
        this.intervalId = null 
        this.onTick = onTick;
    }

    start() {
        this.intervalId = setInterval(() => {
          const currentTime = new Date();
          const deltaTime = chosenData - currentTime;

          const { days, hours, minutes, seconds } = this.convertMs(deltaTime);
          this.onTick({ days, hours, minutes, seconds } )
        }, 1000);

        

      }

      

    //   if(deltaTime < = 0){
    //     clearInterval(this.intervalId )
    //     return 
    //   }
    
    
    // stop(){
    //     clearInterval(this.intervalId)
    //   }


       convertMs(ms) {
        // Number of milliseconds per unit of time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        // Remaining days
        const days = this.pad(Math.floor(ms / day));
        // Remaining hours
        const hours = this.pad(Math.floor((ms % day) / hour));
        // Remaining minutes
        const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
        // Remaining seconds
        const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));
      
        return { days, hours, minutes, seconds };
      }


     pad(value) {
        return String(value).padStart(2, "0");
      }
}

const timer = new Timer({
    onTick:updateClockface
    
});

startBtn.addEventListener(`click`, () => {
  timer.start();
  
});



function updateClockface({ days, hours, minutes, seconds }) {
  dataDays.textContent = `${days}`;
  dataHours.textContent = `${hours}`;
  dataMinutes.textContent = `${minutes}`;
  dataSeconds.textContent = `${seconds}`;
}



