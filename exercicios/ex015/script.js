
function clicar(num){
   let res = document.getElementById('res')
   res.value +=num
}

function calculo(){
    
    let res = document.getElementById('res')
    let res1 = res.value
    res.value = eval(res1)

}

