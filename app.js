let nomeDigitado = ''; 


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.rate = 1.2;
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
function verificarNomeInfantil() {
    let nome = document.getElementById('nomeInput').value.trim();

    if (nome !== '') {  
        
        exibirTextoNaTela('h1', `Bom dia ${nome.toUpperCase()}`);
        exibirTextoNaTela('p', `Prazer em te conhecer ${nome.toUpperCase()} !`)
        document.getElementById("reiniciar").removeAttribute('disabled');
        limparCampo();
    } else {
        alert("Por favor, digite um nome!");
    }
}

exibirTextoNaTela('h1', 'Olá Turma F1 da tia Vera');
exibirTextoNaTela('p', 'Sou o robô ALFA-Betto. Qual é o seu nome?');

function limparCampo() {
    let campo = document.querySelector('input');
    campo.value = '';
}

function reiniciarJogo(){
    limparCampo();
    exibirTextoNaTela('h1', 'Olá Turma F1 da tia Vera');
    exibirTextoNaTela('p', 'Sou o robô ALFA-Betto. Qual é o seu nome?');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
