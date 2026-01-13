let score=0;
let time=5;
function addScore(){
    score=score+1;
    document.getElementById("score").innerText=score;
}
function StartGame(){
    score=0;
    time=5;
    document.getElementById("score").innerText=score;
    document.getElementById("time").innerText=time;
    let timer=setInterval(function(){
        time=time-1;
        document.getElementById("time").innerText=time;
        if(time==0){
            clearInterval(timer);
        alert("time is up! Your score is "+score);
        
    }
    },1000);
}