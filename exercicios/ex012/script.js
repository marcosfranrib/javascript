
function contar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var incremento = document.getElementById('incremento')
    var exibir = document.getElementById('exibir')
    
    var c = Number(inicio.value)
    var f = Number(fim.value)
    var inc = Number(incremento.value)

    if(c <= 0 || f <= 0 || inc <= 0){
        window.alert('Preencha os campos com numeros positivos e acima de zero')

    }  else if(f > c){
     
        for (c; c <= f; c += inc){
           exibir.innerHTML += ` . ${c}<br>`
        }

    } else {
        for (c; c >= f; c -= inc){
            exibir.innerHTML += ` . ${c}<br>`
         }
    }
}

function limpar(){
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var incremento = document.getElementById('incremento')
    var exibir = document.getElementById('exibir')
    
    inicio.value = ''
    fim.value = ''
    incremento.value = ''
    exibir.innerHTML = ''
}