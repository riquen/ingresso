function comprar() {
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);

    if (tipoIngresso == 'pista') {
        comprarPista(quantidade);
    } else if (tipoIngresso == 'superior') {
        comprarSuperior(quantidade);
    } else {
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade) {
    let quantidadePista = document.getElementById('qtd-pista');

    if(quantidade > parseInt(quantidadePista.textContent)) {
        alert('Quantidade indisponível');
    } else {
        quantidadePista.textContent = parseInt(quantidadePista.textContent) - quantidade;
        alert('Compra realizada com sucesso');
    }
}

function comprarSuperior(quantidade) {
    let quantidadeSuperior = document.getElementById('qtd-superior');

    if(quantidade > parseInt(quantidadeSuperior.textContent)) {
        alert('Quantidade indisponível');
    } else {
        quantidadeSuperior.textContent = parseInt(quantidadeSuperior.textContent) - quantidade;
        alert('Compra realizada com sucesso');
    }
}

function comprarInferior(quantidade) {
    let quantidadeInferior = document.getElementById('qtd-inferior');

    if(quantidade > parseInt(quantidadeInferior.textContent)) {
        alert('Quantidade indisponível');
    } else {
        quantidadeInferior.textContent = parseInt(quantidadeInferior.textContent) - quantidade;
        alert('Compra realizada com sucesso');
    }
}