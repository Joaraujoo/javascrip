function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtidade')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifque os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src' , 'imagens/fotocriancah.png')
            } else if (idade < 21){
                img.setAttribute('src' , 'imagens/fotoadolescenteh.png')
            } else if (idade < 50){
                img.setAttribute('src' , 'imagens/fotoadultoh.png')
            } else {
                img.setAttribute('src' , 'imagens/fotoidoso.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.setAttribute('src' , 'imagens/fotocriancaf.png')
            } else if (idade < 21){
                img.setAttribute('src' , 'imagens/fotoadolescentef.png')
            } else if (idade < 50){
                img.setAttribute('src' , 'imagens/fotoadultof.png')
            } else {
                img.setAttribute('src' , 'imagens/fotoidosa.png')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}