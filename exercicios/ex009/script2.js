function verificarPessoa(){
   
    var nasc = document.getElementById('ano')
    var ano = nasc.value
    var img = document.getElementById('imagem')

    switch(ano){
        case 2015:
            img.src = 'imagens/cm.png'
            img.style.display = 'block'
        break;
    }


}