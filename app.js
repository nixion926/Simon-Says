let gameSeq = [];
let userSeq = [];
let colors = ["red","green","blue","purple"];
let h3 = document.querySelector("h3");
let allBtns = document.querySelectorAll(".btn");
let body = document.querySelector("body");
const res_btn = document.querySelector(".res-btn");
let started = false;
let level = 0;
let score = 0;
document.addEventListener("keypress", function(){
    if (started == false){
        console.log("game started");
        started = true;
        levelUp();
    }
})
function flash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    }, 300)

}
function usrflash(btn){
    btn.classList.add("usrflash");
    setTimeout(function(){
        btn.classList.remove("usrflash")
    }, 300)

}
function bodyflash(){
    body.classList.add("bodyflash");
    setTimeout(function(){
        body.classList.remove("bodyflash");
    }, 300)

}
function levelUp(){
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random()*3);
    let randomColor = colors[randomIdx];
    let randbtn = document.querySelector(`.${randomColor}`)
    flash(randbtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
    if(score < level){
        score++;
    }
    highScore();

    
    


}
function checkAns(idx){
    

    if (userSeq[idx] === gameSeq[idx] ){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        bodyflash();
        h3.innerHTML = `Game Over! Your Score is <b>${score}</b> <br> Press any key to restart.`;
        reset();
    }
}
function btnPress(){
    let btn = this;
    usrflash(btn);
    let userColor = btn.getAttribute("Id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function highScore(){
    let h4 = document.querySelector("h4");
    h4.innerText = `Highest Score is ${score}`;
    
}
function reset(){
    started = false;
    gameSeq =[];
    userSeq =[];
    level = 0;
}

