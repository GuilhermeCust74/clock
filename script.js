const horas = document.querySelector('.horas')

const minutos = document.querySelector('.minutos')

const segundos = document.querySelector('.segundos')

function semTempoIrmao(){

    const tempo = new Date();


    const segundosRotacao = ( 360 / 60 ) * tempo.getSeconds()
  
    const minutosRotacao = ( 360 / 60 ) * tempo.getMinutes()
   
    const horaRotacao = ( 360 / 12 ) * tempo.getHours()

    horas.style.transform = `rotate(${horaRotacao}deg)`
   
    minutos.style.transform = `rotate(${minutosRotacao}deg)`
   
    segundos.style.transform = `rotate(${segundosRotacao}deg)`

}

semTempoIrmao()
setInterval(semTempoIrmao, 1000)
