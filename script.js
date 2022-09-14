const jump = () =>{
    const mario = document.querySelector('.mario');
    mario.classList.add('mario-animation');
    setTimeout(() =>{
        mario.classList.remove('mario-animation');
    }, 600);
} 

var scoreCount = 0;
const loop = setInterval(() =>{
    const pipe = document.querySelector('.pipe');
    const mario = document.querySelector('.mario');
    const score = document.getElementById("score");
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ' ');
    if(pipePosition < 87 && marioPosition <  75 && pipePosition > -10) {
        pipe.style.left = `${pipePosition}px`;
        pipe.style.animation = 'none';

        mario.style.bottom = `${marioPosition}px`;
        mario.style.animation = 'none';
        mario.src='./img/game-over.png'
        mario.style.width = '60px';
        mario.style.height = '80px';
        mario.style.marginLeft = '25px';
        
        clearInterval(loop);
    }
    scoreCount +=1;
    score.textContent = `${scoreCount}`

    // score +=1;
    // score.p
    // console.log(score);
}, 10) 
document.addEventListener('keydown', jump);