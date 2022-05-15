const DINO = document.querySelector(".dino");

/**
 * Método para identificar a tecla precionada espaço
 */
function handleKeyUp(event) {
    if(event.keyCode === 32){
        console.log('pressinou espaço');
        jump();
    }
}

/**
 * pulo do dinossauro
 */
function jump() {
    let position = 0;

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

/**
 * 
 */
document.addEventListener('keyup', handleKeyUp);