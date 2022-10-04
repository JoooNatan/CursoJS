function Calcular() {
    let a = Number(window.prompt('Digite o valor de a'))
    let b = Number(window.prompt('Digite o valor de b'))
    let c = Number(window.prompt('Digite o valor de c'))
    let res = document.querySelector('div#res')

    let delta = b * b - 4 * a * c
    res.innerHTML = (`<p>O calculo realizado sera <strong>Δ = ${b}<sup>2</sup> - 4. ${a}. ${c}</strong></p>`)
    res.innerHTML += (`O valor calculado foi <mark>Δ = ${delta}</mark>`)
}