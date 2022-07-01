let numeroAtualSpan = document.getElementById('numeroAtual')
let numeroAtual = 0;

let aumentar = document.getElementById('aumentar')
  aumentar.addEventListener('click', function(){
    numeroAtual++
    numeroAtualSpan.innerHTML = numeroAtual

    if(numeroAtual>0){
      numeroAtualSpan.style.color='green'
     }else if (numeroAtual === 0)
      numeroAtualSpan.style.color='black' 
  })

  let diminuir = document.getElementById('diminuir')
  diminuir.addEventListener('click', function(){
    numeroAtual--
    numeroAtualSpan.innerHTML = numeroAtual

    if (numeroAtual<0) 
      numeroAtualSpan.style.color='red'
      else if (numeroAtual === 0)
        numeroAtualSpan.style.color='black'
    
  }) 

  let zerar = document.getElementById('zerar')
  zerar.addEventListener('click', function(){
    numeroAtual = 0
    numeroAtualSpan.innerHTML = numeroAtual
    if (numeroAtual === 0)
        numeroAtualSpan.style.color='black'
  })

  let maisDez = document.getElementById('maisDez')
  maisDez.addEventListener('click', function(){
    numeroAtual = numeroAtual + 10
    numeroAtualSpan.innerHTML = numeroAtual
      
    if(numeroAtual>0){
      numeroAtualSpan.style.color='green'
    }else if (numeroAtual === 0)
    numeroAtualSpan.style.color='black'
  })

  let menosDez = document.getElementById('menosDez')
  menosDez.addEventListener('click', function(){
    numeroAtual = numeroAtual - 10
    numeroAtualSpan.innerHTML = numeroAtual

    if(numeroAtual<0){
      numeroAtualSpan.style.color='red'
    }else if (numeroAtual === 0)
    numeroAtualSpan.style.color='black'

  })
