var cot = window.prompt(`Qual a cotação do dolar?`)

function Converter() {
    var real = window.prompt('Quantos reais você tem?')
    window.alert(`Você tem US$${real / cot} para gastar!`)
}