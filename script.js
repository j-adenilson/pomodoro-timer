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

    btnStart.disabled = true;
    btnPause.disabled = false;
    btnReset.disabled = false;

    timer = setInterval(() => {
        if (tempoAtual > 0) {
            tempoAtual--;
            atualizarDisplay();
        } else {
            clearInterval(timer);
            timer = null;
            cicloConcluido();
            btnStart.disabled = false; // reabilita o start para o próximo ciclo
            btnPause.disabled = true; // desabilita o botão de pausa
            alert("Tempo encerrado! Faça uma pausa.");
        }
    }, 1000);
}

function pausarTimer(){
    if (timer) {
        clearInterval(timer);
        timer = null;
        btnStart.disabled = false; // habilita o botão de start novamente
        btnPause.disabled = true;  // desabilita o botão de pause
    }
}

function reiniciaTimer(){
    clearInterval(timer);
    timer = null;
    tempoAtual = tempo;
    atualizarDisplay();
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnReset.disabled = true;
}


btnStart.addEventListener("click", iniciarTimer);
btnPause.addEventListener("click", pausarTimer);
btnReset.addEventListener("click", reiniciaTimer);

atualizarDisplay(); // atualiza ao carregar

//Ciclos Pomodoros
//Variável que conta quantos ciclos Pomodoros foram concluidos
let cycleCount = 0;

//Função que deve ser chamada sempre que um ciclo(foco + pausa) for concluído
function cicloConcluido(){
    cycleCount++;
    document.getElementById("cycle-count").textContent = cycleCount; //Atualiza o número na interface

        
        // Alterna entre foco e pausa
        if (cycleCount % 2 === 0) {
            tempo = 5 * 60; // 5 minutos de pausa
            tempoAtual = tempo;
            alert("Hora de descansar!");
        } else {
            tempo = 25 * 60; // 25 minutos de foco
            tempoAtual = tempo;
            alert("Hora de focar!");
        }
    
        atualizarDisplay();
    }

//Zera o contador de ciclos quando o usuário clica no botão
document.getElementById("reset-cycles").addEventListener("click", ()=> {
    cycleCount = 0; //Reinicia o valor da variável
    document.getElementById("cycle-count").textContent = cycleCount; // Atualiza na tela
});


