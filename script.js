let tempo = 25 * 60; // 25 minutos em segundos
let tempoAtual = tempo;
let timer = null;
let pausado = false;

const timerDisplay = document.getElementById("timer");
const btnStart = document.getElementById("start");
const btnPause = document.getElementById("pause");
const btnReset = document.getElementById("reset");

function atualizarDisplay(){
    const minutos = Math.floor(tempoAtual / 60);
    const segundos = tempoAtual % 60;
    timerDisplay.textContent = `${
        minutos.toString().padStart(2, "0")}:${
            segundos.toString().padStart(2, "0")}`;
}

function iniciarTimer(){
    if (timer || tempoAtual <= 0) return;

    timer = setInterval(() => {
        if (tempoAtual > 0) {
            tempoAtual--;
            atualizarDisplay();
        }else{
            clearInterval(timer);
            timer = null;
            alert("Tempo encerrado! Faça uma pausa.");
        }
    }, 1000);
}

function pausarTimer(){
    if (timer){
        clearInterval(timer);
        timer = null;
    }
}

function reiniciaTimer(){
    clearInterval(timer);
    timer = null;
    tempoAtual = tempo;
    atualizarDisplay();
}

btnStart.addEventListener("click", iniciarTimer);
btnPause.addEventListener("click", pausarTimer);
btnReset.addEventListener("click", reiniciaTimer);

atualizarDisplay(); // atualiza ao carregar