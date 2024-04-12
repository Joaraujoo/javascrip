function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 5) {
        img.src = 'imagens/fotomadruga.png'
        document.body.style.background = '#202529'
    } else if (hora >= 5 && hora < 12) {
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#abbbc4'
    } else if (hora >= 12 && hora <= 18){
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#fdb170'
    } else {
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#171e28'
    }
}