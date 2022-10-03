function CalcularDesconto() {
    var produto = ''
    var precoP = 0
    var res = ''
    res = document.querySelector('div#res')
    produto = window.prompt('Qual produto você está comprando?')
    precoP = window.prompt(`Qual o preço de ${produto}?`)
    var desconto = precoP * 0.10
    res.innerHTML = (`<h1>Calculando desconto de 10% para ${produto}</h1>
    <p>O preço original era R$ ${precoP.toLocaleString('pt-BR')}.</p>
    <p>Você acaba de ganhar R$ ${desconto.toLocaleString('pt-BR')} de desconto (10%).</p>
    <p>No fim você vai pagar R$ ${(precoP - desconto).toLocaleString('pt-BR')} no produto ${produto}</p>`)
}