function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoFormulario = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (anoFormulario.value.length == 0 || Number(anoFormulario.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(anoFormulario.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homen'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imgs/bebe-m.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imgs/jovem-m.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imgs/adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'imgs/idoso-m.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imgs/bebe-f.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imgs/jovem-f.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imgs/adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'imgs/idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}