function Verificar() {
    let res = document.querySelector('div#res')
    res.innerHTML = ''
    let precoAntes = 0
    let precoDepois = 0

    precoAntes = Number(window.prompt('Qual era o preço anterior do produto?'))
    precoDepois = Number(window.prompt('Qual é o preço atual do produto?'))

    res.innerHTML += '<h1>Analizando os preços informados...</h1>'
    if (precoAntes > precoDepois) {
         res.innerHTML += `O produto custava R$${precoAntes.toLocaleString('pt-BR')} e agora custa R$${precoDepois.toLocaleString('pt-BR')}.`
         res.innerHTML += `<p>Hoje o produto está mais barato.</p>`
         res.innerHTML += `<p>O preço diminuiu R$${(precoAntes - precoDepois).toLocaleString('pt-BR')}</p>`
         res.innerHTML += `<p>Uma variação de ${} para baixo.</p>`
    } else {

    }
}