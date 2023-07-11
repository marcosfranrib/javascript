function carregar(){

    //container de divs
    var msg = document.getElementById('mensagem')
    var img = document.getElementById('imagem')

    //container de horas
    var date = new Date()
    var hora = date.getHours()

    if (hora >= 6 && hora < 12){
        msg.innerHTML = `Agora são ${hora} horas`
        img.src = 'imagens/manha.jpg'

    } else if (hora <= 18){
        msg.innerHTML = `Agora são ${hora} horas`  
        img.src = 'imagens/tarde.jpg' 
        document.body.style.background = 'orange'

    } else {
        msg.innerHTML = `Agora são ${hora} horas`
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#4e06f7'
    }

}




