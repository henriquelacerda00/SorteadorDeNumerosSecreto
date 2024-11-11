function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let resultado = document.getElementById('resultado');

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = numeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = numeroAleatorio(de, ate);
        }
        sorteados.push(numero);
    }

    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados.join(', ')}</label>`;
    alteraStatusBotao(); // Habilita o botão de reiniciar
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    alteraStatusBotao(); // Desabilita o botão de reiniciar
}

function alteraStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    botao.classList.toggle('container__botao-desabilitado');
    botao.classList.toggle('container__botao');
}
