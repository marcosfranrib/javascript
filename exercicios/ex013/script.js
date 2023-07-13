
function calcular(){
    var multiplicar = document.getElementById('multiplicador')
    var vezes = Number(multiplicar.value)
    var exibir = document.getElementById('exibir')
    exibir.innerHTML = ''

    if(vezes == ''){
        window.alert('Insira um numero para multiplicar')
        exibir.innerHTML = 'Aguardando...'

    } else {
        for(var c = 0;c <= 10; c++){
            exibir.innerHTML += `${c} x ${vezes} = ${c*vezes}<br>`
        }
    }

}