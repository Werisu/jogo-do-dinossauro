const DINO = document.querySelector(".dino");
const BACKGROUND = document.querySelector('.background');

let isJumping = false;
let position = 0;

/**
 * Método para identificar a tecla precionada espaço
 */
function handleKeyUp(event) {
    if(event.keyCode === 32 || event.keyCode === 38){
        if(!isJumping){
            jump();
        }
    }
}

/**
 * pulo do dinossauro
 */
function jump() {
    isJumping = true;

    /* setInterval: define intervalos, tudo que estiver dentro vai ser executado
        a cada 20 milisegundos
    */
    let upInterval = setInterval(()=>{
        if(position >= 150){
            clearInterval(upInterval);

            //Descendo
            let downInterval = setInterval(() =>{
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    DINO.style.bottom = position + 'px';
                }
            }, 20)
        } else{
            //subindo
            position += 20;
    
            DINO.style.bottom = position + 'px';
        }
    }, 20);
}

/**criando cactus */
function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() * 6000;

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    BACKGROUND.appendChild(cactus);

    let leftInterval = setInterval(()=>{
        if(cactusPosition < -60){
            clearInterval(leftInterval);
            BACKGROUND.removeChild(cactus);
        } else if(cactusPosition > 0 && cactusPosition < 50 && position < 50) {
            // Game over
            clearInterval(leftInterval);
            document.querySelector('.box').innerHTML = '<h1 class="game-over">Fim de Jogo</h1>'
        } else {
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);