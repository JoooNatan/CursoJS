function CalcularTroco() {
    var produto = ''
    var precoP = 0
    var valorDado = 0

    produto = window.prompt('Que produto você está comprando?')
    precoP = window.prompt(`Quanto custa ${produto} que você está comprando?`)
    valorDado = window.prompt(`Qual foi o valor que você deu para pagar ${produto}`)
    troco = valorDado - precoP
    window.alert(`Você comprou um ${produto} que custou R$${precoP}.\nDeu R$${valorDado} em dinheiro e vai receber R$${troco} em troco`)
}