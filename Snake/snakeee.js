let inputDir = {x:0, y:0};
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
const moveSound = new Audio ('move.mp3');
const musicSound = new Audio('music.mp3');
let speed = 8;
let score=0;
let lastPaintTime = 0;
let snakeArr = [{ x:13,y:15}]
food ={x:14, y:16}

function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime=ctime;    
 gameEngine();
}

function isCollide(snake) {
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
        return true;
    }
        
    return false;
}

function gameEngine(){
    if(isCollide(snakeArr)){
      gameOverSound.play();
      musicSound.pause();
      inputDir={x:0,y:0};
      alert("Game is Over");
      snakeArr=[{x:13,y:15}];
      musicSound.play();
      score =0;
    }

    if(snakeArr[0].y === food.y && snakeArr[0].x ===food.x){
        foodSound.play();
        score +=1;
        if(score>hiscoreval){
            hiscoreval = score;
            localStorage.setItem("hiscore", JSON.stringify(hiscoreval));
            hiscoreBox.innerHTML = "Highest Score: " + hiscoreval;
        }
        scoreBox.innerHTML =" Score : " + score;
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        let a = 2;
        let b = 16;
        food = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
    }

    for(let i = snakeArr.length - 2; i >= 0; i--)
    {
        snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

}