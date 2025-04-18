# Pomodoro Timer

Aplicação web feita com HTML, CSS e JavaScript para controle de tempo no método Pomodoro.

##Funcionalidades

- Contador regressivo de 25 minutos.
- Botões de iniciar, pausar e reiniciar.
- Projeto limpo e objetivo.
- Projeto hospedado online (GitHub Pages).

## Estrutura

- `index.html`: estrutura da página
- `style.css`: estilos visuais
- `script.js`: lógica do cronômetro

## Lógica do cronômetro

- A contagem começa em 25 minutos (1500 segundos).
- O botão "Iniciar" inicia a cntagem regressiva.
- O botão "Pause" interrompe temporariamente a contagem.
- O botão "Reiniciar" volta o tempo para 25:00.
- Ao chegar em 0, exibe um alerta: "tempo encerrado! Faça uma pausa."

## Estilo

- Layout centralizado e responsivo.
- Estilo viual limpo e focado na usabilidade.
- Botões com destaque em vermelho, indicando ação.
- Fonte simples e moderna para legibilidade.

## Deply

O projeto foi publicado com GitHub Pages.

Link:
https://j-adenilson.github.io/pomodoro-timer/

## Alterações

- Elemento HTML para exibir o número de ciclos concluídos.
- Variável `cycleCount` para armazenar os ciclos.
- Função `cicloConcluido()` chamada ao fim de cada ciclo para atualizar o vaalor.
- Botão "Zerar ciclos" para reiniciar o contador.
- Estilo básico para centralizar e deixar viual agradável.

## Exemplo de uso
Ao finalizar um ciclo completo, o número de ciclos exibido é incrementado automaticamente. O usuário pode resetar esse número clicando em "Zerar ciclos."

## Adições

- Implementação de transição entre foco e pausa no ciclo Pomodoro.
- Lógica para alternar entre o tempo de trabalho (25 minutos) e o tempo de pausa (5 minutos).
- Correção no comportamento dos botões "Start", "Pause" e "Reset" para desabilitar e habilitar corretamente conforme o estado do timer.
- Adição de contagem de ciclos completados (Pomodoro) e exibição na interface.

## Funcionalidade

- Contador regressivo de **25 minutos** (tempo de foco).
- Botões de **iniciar, pausar e reiniciar**.
- Alternância automática entre **tempo de foco (25min)** e **tempo de descanso (5min)**.
- Campo para inserir a **tarefa atual**.
- Exibição da tarefa enquanto o ciclo está em andamento.
- Contador de **ciclos concluídos**.
- Botão para **zerar ciclos**.
- Projeto com **interface simples, limpa e responsiva**.
- Lógica automatizada para manter o ritmo de produtividade e descanso.

##  Como funciona

- O usuário insere a tarefa no campo de texto.
- Ao clicar em **"Iniciar"**, o cronômetro começa a contagem regressiva.
- Ao final dos 25 minutos, inicia-se automaticamente o **tempo de descanso (5 minutos)**.
- A cada ciclo completo de foco, o contador de **ciclos é incrementado**.
- O botão de **reinício** permite voltar ao tempo inicial.
- O botão de **pausa** interrompe a contagem.

##  Estrutura dos Arquivos

- `index.html`: Estrutura principal da aplicação.
- `style.css`: Estilo visual da interface.
- `script.js`: Lógica de funcionamento do timer.
- `README.md`: Descrição do projeto.

##  Exemplo de uso

1. Digite a tarefa no campo "Digite sua tarefa".
2. Clique em **Iniciar**.
3. Concentre-se na tarefa até o timer chegar a zero.
4. Após a notificação, descanse por 5 minutos automaticamente.
5. Ao final do descanso, o ciclo será contabilizado e o foco recomeça.