const startBtn = document.querySelector(".start")//------start button
const stopBtn = document.querySelector(".stop") //-------stop button
const resetBtn = document.querySelector(".reset") //------reset button
const miliSecond = document.getElementById("miliSecond"); //milisecond timer selected here
const stopWatch = document.getElementById("watchTime"); // stopwatch span selected here
let timer; //timer is a stopwatch timer
let tens;   //tens is a milisecond timer
let second = 0, minut = 0, hour = 0;  //----second, minut and hour intilized here
let ms = 0;  // ms is a milisecond
let value = 0;
const tick = new Audio("./tick.mp3"); //---stopwatch tick-tick sound


//To start the timer when start button is clicked--------------
const startTheTimer = () =>{
    tick.play(); //-----tick sound play
    second++;
    if(second >= 60){
        second = 0;
        minut++;
    }
    if(minut >= 60){
        minut = 0;
        hour++;
    }
    if(hour >= 12){
        hour = 0;
    }
         const s = second<10?"0"+second : second;
         const m = minut<10?"0"+minut : minut;
         const h = hour<10?"0"+hour : hour;

         stopWatch.innerHTML = `${h}:${m}:${s}`
}

// To start the milisecond timer--------------
const startTheTens = () =>{
    ms++;
    if(ms >=100){
        console.log(ms)
        ms = 0
    }
    const t = ms<10?"0"+ms: ms;
        miliSecond.innerHTML = "."+t;
}

//start button listened here-----------
startBtn.addEventListener("click", ()=>{
    value++;
    if(value == 1){
        tens = setInterval(startTheTens, 10)
         timer = setInterval(startTheTimer, 1000)
    }else{
        return;
    }
       
})

// stop button listened here-----------
stopBtn.addEventListener("click", ()=>{
    tick.pause(); //----tick sound pause
    value = 0;
    clearInterval(timer)
    clearInterval(tens)
})

// reset button listened here----------------
resetBtn.addEventListener("click", ()=>{
    tick.pause(); //----tick sound stop
    value = 0;
    ms = 0;
    second = 0;
    minut = 0;
    hour = 0;
    clearInterval(tens)
    clearInterval(timer);
    stopWatch.innerHTML = `00:00:00`;
    miliSecond.innerHTML = `.00`;
})

