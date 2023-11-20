// Iteration 2: Generate 2 random number and display it on the screen
var num_1 = Math.round(Math.random()*100);
var num2 = Math.round(Math.random()*100);

var num_1div = document.getElementById("number1")
num_1div.innerHTML = num_1;
var num2div = document.getElementById("number2")
num2div.innerHTML = num2;
// Iteration 3: Make the options button functional
var greater_button = document.getElementById("greater-than");
var lesser_button = document.getElementById("lesser-than");
var equalButton = document.getElementById("equal-to");

var totalscore = 0;
greater_button.onclick = () =>{
    if (num_1 > num2){
        totalscore++;
        resetTimer(timerID)
    }else{
        window.location.href = "./gameover.html"
    }

    num_1 = Math.round(Math.random()*100);
    num2 = Math.round(Math.random()*100);
    num_1div.innerHTML = num_1;
    num2div.innerHTML = num2;
}

equalButton.onclick = () =>{
    if (num_1 == num2){
        totalscore++;
        resetTimer(timerID)
    }else{
        window.location.href = "./gameover.html"
    }

    num_1 = Math.round(Math.random()*100);
    num2 = Math.round(Math.random()*100);
    num_1div.innerHTML = num_1;
    num2div.innerHTML = num2;
}

lesser_button.onclick = () =>{
    if (num_1 < num2){
        totalscore++;
        resetTimer(timerID)
    }else{
        window.location.href = "./gameover.html"
    }

    num_1 = Math.round(Math.random()*100);
    num2 = Math.round(Math.random()*100);
    num_1div.innerHTML = num_1;
    num2div.innerHTML = num2;
}
// Iteration 4: Build a timer for the game
var present_time = document.getElementById('timer');
var time = 5;
var timerID;
function startTimer(){
    time = 5;
    present_time.innerHTML = time;
    timerID=setInterval(()=>{
        time--;
        if(time<=0){
            window.location.href = "./gameover.html";
        }
        present_time.innerHTML= time;
    }, 1000);
    localStorage.setItem("score", JSON.stringify(totalscore));
}
function resetTimer(timerID){
    console.log(timerID)
    clearInterval(timerID)
    startTimer();
}
startTimer();