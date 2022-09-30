
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imgs/manha.png'
        document.body.style.background = '#b39841'
    } else if(hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'imgs/tarde.png'
        document.body.style.background = '#f78d0e'
    } else {
        //boa noite
        img.src = 'imgs/noite.png'
        document.body.style.background = '#4d3959'
    }
}
