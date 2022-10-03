function Reajuste() {
    var nome = ''
    var salario = 0
    var porc = 0.0
    var res = document.querySelector('div#res')
    nome = window.prompt('Qual o nome do funcionario?')
    salario = window.prompt(`Qual o salario de ${nome}?`)
    porc = window.prompt(`O salario de ${nome} vai ser reajustado em qual porcentagem?`)
    res.innerHTML = `<h1>${nome} recebeu um aumento salarial!</h1>`
    res.innerHTML += `<p>O salario era R$${salario}.</p>`
    res.innerHTML += `<p>Com um aumento de ${porc}%, o salario vai aumentar R$${((porc / 100) * salario).toLocaleString('pt-BR')} no proximo mês.</p>`
    res.innerHTML += `<p>E a parti dai, ${nome} vai passar a ganhar R$${(((porc / 100) * salario) + Number(salario)).toLocaleString('pt-BR')}.</p>`
}