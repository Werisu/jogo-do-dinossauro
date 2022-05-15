const DINO = document.querySelector(".dino");
const BACKGROUND = document.querySelector('.background');

let isJumping = false;

/**
 * Método para identificar a tecla precionada espaço
 */
function handleKeyUp(event) {
    if(event.keyCode === 32){
        if(!isJumping){
            jump();
        }
    }
}

/**
 * pulo do dinossauro
 */
function jump() {
    let position = 0;
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

    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    BACKGROUND.appendChild(cactus);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);