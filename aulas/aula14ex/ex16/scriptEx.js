function Contar(){
    var inicio = document.getElementById('txtn1')
    var fim = document.getElementById('txtn2')
    var passo = document.getElementById('txtn3')
    var res = document.getElementById('res')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados')
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            window.alert('Passo invalido! Considerando passo = 1')
            p = 1
        }
        if (i < f) {
            for (var c = 1; c <= f; c = c + p) {
                res.innerHTML += `${c}  `
            }
        } else {
            for (var c = i; c >= f; c = c - p) {
                res.innerHTML += `${c}  `
            }
        }
    }
}