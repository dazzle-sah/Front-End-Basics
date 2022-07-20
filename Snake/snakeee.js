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

