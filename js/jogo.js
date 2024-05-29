
var sorteio = sorteia(10);
var tentativas = 2;
var input = document.getElementById("numero-input");
var button = document.querySelector("button");
var tentativasRestantes = document.getElementById("tentativas-restantes");
var feedback = document.getElementById("feedback");

function sorteia(n) {
    return Math.ceil(Math.random() * n);
}

function verifica() {
  
    var valor = parseInt(input.value);
    if (isNaN(valor) || valor < 1 || valor > 10) {
        alert("Por favor, digite um número válido entre 1 e 10.");
        return;
    }

    tentativas--;

    if (valor === sorteio) {
        feedback.textContent = "Você ACERTOU !!! O número secreto é: " + sorteio;
        resetGame();
    } else if (tentativas > 0) {
        feedback.textContent = "Você errou! tente novamente.";
        tentativasRestantes.textContent = "Tentativas restantes: " + tentativas;
    } else {
        feedback.textContent = "Você errou! Suas tentativas acabaram. O número secreto era: " + sorteio;
        resetGame();
    }
}

function resetGame() {
    sorteio = sorteia(10);
    tentativas = 2;
    tentativasRestantes.textContent = "Tentativas restantes: 2";
    input.value = '';
}

button.onclick = verifica;








