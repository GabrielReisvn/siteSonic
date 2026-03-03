//============================================
// Jogo mario
// Criação das variaveis
let mario = document.querySelector(`.mario`);//encontrar mario
let cano = document.querySelector(`.cano`);//encontrar cano
let nuvem = document.querySelector(`.nuvem`);//encontrar nuvem
let telaFim = document.querySelector(`.fim`);//encontra tela gaem over
let botaoReiniciar = document.querySelector(`.reiniciar`);//encontra o botao
let contador = 0;

console.log(`======Parada 01=========`);
console.log(`mario`,mario);
console.log(`cano`,cano);
console.log(`nuvem`,nuvem);
console.log(`tela fim`, telaFim);
console.log(`botãoreiniciar`,botaoReiniciar);


function pular(){
    //`pular` predefinido no css, chamada pelo javascript
    mario.classList.add(`pular`);
    
    
    //CONTADOR
    contador++;
    const spanPulos = document.querySelector('#pulos');
    if (spanPulos) spanPulos.innerText = contador;
    
    
    setTimeout(function(){
        //voltando ao normal após pular
        mario.classList.remove(`pular`)
    },800)
}

document.addEventListener("keydown",function(){
    console.log(`Tecla presionada, chamando pular()`);
    pular();
    
})

document.addEventListener("click",function(){
    console.log(`Tecla presionada, chamando pular()`);
    pular();
})

console.log(`======Iniciando loop do jogo=========`);
console.log(`Jogo vai verificar uma colisão`);

let loopJogo = setInterval(function(){
    let posicaoCano = cano.offsetLeft;

    let posicaoMario = +window.getComputedStyle(mario).bottom.replace(`px`,'');
    // console.log('cano:', posicaoCano, 'Mario:', posicaoMario);

    
    
    if (posicaoCano <= 100 && posicaoCano > 0 && posicaoMario < 53){  
        console.log('========Colisão detectada!=======');
        console.log(`Cano na posição ${posicaoCano}|| Mario na posição ${posicaoMario}.`);
        console.log(`Fim de jogo`);
        
        
        //contador reset
        contador = 0;
        const spanPulos = document.querySelector('#pulos');
        if (spanPulos) spanPulos.innerText = contador;

        //======= Tela fim =======
        cano.style.animation = 'none';
        cano.style.left = posicaoCano +'px';
        
        mario.style.animation = 'none';
        mario.style.bottom = posicaoMario +'px';
        mario.src ='./img/game-over.gif';
        mario.style.width = '80px';

        telaFim.style.visibility = 'visible';
        
        //debug console
        clearInterval(loopJogo);

        }
       


},10)

//====== Função Reiniciar =======
function reiniciarJogo(){
    console.log('===== Reiniciando Jogo =======');
    //TELA GAME OVER
    telaFim.style.visibility = 'hidden';

    //CANO
    cano.style.animation = 'mexerCano 1.2s infinite linear';
    cano.style.left = '';

    // MARIO
    mario.style.animation = ''; //Remove qualquer animação fixa
    mario.style.bottom = '0px';
    mario.src ='./img/mario.gif';
    mario.style.width = '130px';

    //=======================
    //===== NOVO JOGO =======
    
    loopJogo = setInterval(function(){
        let posicaoCano = cano.offsetLeft;
        let posicaoMario = +window.getComputedStyle(mario).bottom.replace(`px`,''); 
        if (posicaoCano <= 100 && posicaoCano > 0 && posicaoMario < 53){  
            console.log('========Colisão detectada!=======');
            console.log(`Cano na posição ${posicaoCano}|| Mario na posição ${posicaoMario}.`);
            console.log(`Fim de jogo`);
            
            //contador reset
            contador = 0;
            const spanPulos = document.querySelector('#pulos');
            if (spanPulos) spanPulos.innerText = contador;

                //======= Tela fim =======
            cano.style.animation = 'none';
            cano.style.left = posicaoCano +'px';
        
            mario.style.animation = 'none';
            mario.style.bottom = posicaoMario +'px';
            mario.src ='./img/game-over.gif';
            mario.style.width = '80px';

            telaFim.style.visibility = 'visible';
        
             
            //debug console
            clearInterval(loopJogo);

        }
    },10)
}

botaoReiniciar.addEventListener('click',function(){
    reiniciarJogo()
});
