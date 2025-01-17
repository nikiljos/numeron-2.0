// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
// Iteration 3: Creating variables required to make the game functional
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let num1,num2,num3,operator;
let seconds,timer;
let $num1 = document.getElementById("number1");
let $num2 = document.getElementById("number2");
let $num3 = document.getElementById("number3");
let $timer = document.getElementById("timer");
let $score = document.getElementById("score");
let score = 0;
let operatorList = ["+", "-", "*", "/", "%"];

setRandom();

// Iteration 5: Creating a randomise function to make the game functional
function setRandom() {
    let n1 = Math.round(Math.random() * 100);
    let n2 = Math.round(Math.random() * 100);
    if(n1>n2){
        num1=n1;
        num2=n2;
    }
    else{
        num1 = n2;
        num2 = n1;
    }
    $num1.innerText = num1;
    $num2.innerText = num2;
    operator = operatorList[Math.floor(Math.random() * operatorList.length)];
    num3=Math.floor(eval(`${num1} ${operator} ${num2}`))
    if(isNaN(num3)){
        setRandom();
    }
    // console.log({num1,num2,num3,operator})
    $num3.innerText = num3;
    $score.innerText=score;
    resetTimer()
}

// Iteration 6: Making the Operators (button) functional
document.getElementById("buttons").onclick = (e) => {
    let symbol;
    switch (e.target.id) {
        case "plus":
            symbol = "+";
            break;
        case "minus":
            symbol = "-";
            break;
        case "mul":
            symbol = "*";
            break;
        case "divide":
            symbol = "/";
            break;
        case "modulus":
            symbol = "%";
            break;
        default:
            return;
    }
    let res = Math.floor(eval(`${num1} ${symbol} ${num2}`));
    if (res==num3) {
        score++;
        setRandom();
    } else {
        gameOver();
    }
};

// Iteration 7: Making Timer functional
function setTimer(){
    seconds=20
    $timer.innerText = seconds;
    seconds--
    timer=setInterval(() => {
        $timer.innerText = seconds;
        if (seconds > 0) {
            seconds--;
        } else {
            gameOver();
        }
    }, 1000);
}

function resetTimer(){
    clearInterval(timer);
    setTimer();
}


function gameOver() {
    sessionStorage.setItem("score", score);
    window.location = "gameover.html";
}