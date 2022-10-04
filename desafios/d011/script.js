function Verificar() {
    let res = document.querySelector('div#res')
    let ano = Number(window.prompt('Qual é o ano que você quer verificar?'))
    let e
    res.innerHTML = ''

    for (let i = 1000; i <= 3000; i = i + 4) {
        if (ano == i) {
            e = true
        } 
        if (ano == i - 1) {
            e = false
        }
    }

    res.innerHTML += `<p><h2>Analizando o ano de ${ano}...</strong></h2>`
    if (e == true) {
        res.innerHTML += `<p>O ano de ${ano} <mark style="background-color: #00af0fad">é bissexto</mark>.</p>`
    } else {
        res.innerHTML += `<p>O ano de ${ano} <mark style="background-color: #af0000ad">não é bissexto</mark>.</p>`
    }   
}
