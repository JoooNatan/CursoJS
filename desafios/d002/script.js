function Quest() {
    var nome = ''
    var idade = 0
    nome = window.prompt('Qual é o seu nome?')
    idade = window.prompt(`Ola ${nome}, qual a sua idade?`)
    window.alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`)
}