let tempoFoco = 25 * 60; // 25 minutos
let tempoPausa = 5 * 60; // 5 minutos
let tempoAtual = tempoFoco;
let timer = null;
let emFoco = true;
let cycleCount = 0;

const timerDisplay = document.getElementById("timer");
const btnStart = document.getElementById("start");
const btnPause = document.getElementById("pause");
const btnReset = document.getElementById("reset");
const taskInput = document.getElementById("task-input");
const currentTaskDisplay = document.getElementById("current-task");

function atualizarDisplay() {
    const minutos = Math.floor(tempoAtual / 60);
    const segundos = tempoAtual % 60;
    timerDisplay.textContent = `${minutos.toString().padStart(2, "0")}:${segundos.toString().padStart(2, "0")}`;
}

function iniciarTimer() {
    if (timer || tempoAtual <= 0) return;

    const tarefa = taskInput.value.trim();
    if (!tarefa && emFoco) {
        alert("Por favor, insira uma tarefa antes de começar o ciclo de foco.");
        return;
    }

    currentTaskDisplay.textContent = emFoco ? `Tarefa: ${tarefa}` : "Tempo de descanso";

    btnStart.disabled = true;
    btnPause.disabled = false;
    btnReset.disabled = false;
    taskInput.disabled = true;

    timer = setInterval(() => {
        if (tempoAtual > 0) {
            tempoAtual--;
            atualizarDisplay();
        } else {
            clearInterval(timer);
            timer = null;
            btnStart.disabled = false;
            btnPause.disabled = true;

            if (emFoco) {
                cicloConcluido();
                alert("Tempo de foco encerrado! Agora é hora de descansar.");
                iniciarDescanso();
            } else {
                alert("Descanso concluído! Vamos voltar ao foco?");
                iniciarFoco();
            }
        }
    }, 1000);
}

function iniciarFoco() {
    emFoco = true;
    tempoAtual = tempoFoco;
    atualizarDisplay();
    currentTaskDisplay.textContent = "";
    taskInput.disabled = false;
}

function iniciarDescanso() {
    emFoco = false;
    tempoAtual = tempoPausa;
    atualizarDisplay();
    iniciarTimer();
}

function pausarTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
        btnStart.disabled = false;
        btnPause.disabled = true;
    }
}

function reiniciaTimer() {
    clearInterval(timer);
    timer = null;
    tempoAtual = emFoco ? tempoFoco : tempoPausa;
    atualizarDisplay();
    currentTaskDisplay.textContent = "";
    taskInput.disabled = false;
    btnStart.disabled = false;
    btnPause.disabled = true;
    btnReset.disabled = true;
}

function cicloConcluido() {
    cycleCount++;
    document.getElementById("cycle-count").textContent = cycleCount;
}

document.getElementById("reset-cycles").addEventListener("click", () => {
    cycleCount = 0;
    document.getElementById("cycle-count").textContent = cycleCount;
});

btnStart.addEventListener("click", iniciarTimer);
btnPause.addEventListener("click", pausarTimer);
btnReset.addEventListener("click", reiniciaTimer);

atualizarDisplay(); // Inicializa ao carregar
