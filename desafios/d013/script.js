function Situacao() {
    let res = document.querySelector('div#res')
    let nome = window.prompt('Digite o nome do aluno')
    let n1 = Number(window.prompt(`Digite a primeira nota de ${nome}:`))
    let n2 = Number(window.prompt(`Digite a segunda nota de ${nome}:`))
    let media = 0
    media = (n1 + n2) / 2
    let situacao = ''
    res.innerHTML = ''

    if (media < 3) {
        situacao = 'REPROVADO'
    } else if (media < 6) {
        situacao = 'RECUPERAÇÃO'
    } else {
        situacao = 'APROVADO'
    }

    res.innerHTML += `<h2>Analizando a situação de ${nome}</h2>`
    res.innerHTML += `<p>Com as notas de ${n1} e ${n2}, a <strong>média é ${media.toFixed(1)}</strong></p>`
    if (situacao == 'REPROVADO') {
        res.innerHTML += `<p>Com a média abaixo de 3, o aluno está <strong>
        <mark style="background-color: #ff646494; color: #a00000;">REPROVADO</mark>
        </strong></p>`
    } else if (situacao == 'RECUPERAÇÃO') {
        res.innerHTML += `<p>Com a média entre 3 e 6, o aluno está em <strong>
        <mark style="background-color: #f5ff6496; color: #a09d00;">RECUPERAÇÃO</mark>
        </strong></p>`
    } else {
        res.innerHTML += `<p>Com a média acima de 6, o aluno está <strong>
        <mark style="background-color: #71ff6494; color: #05a000;">APROVADO</mark>
        </strong></p>`
    }
}