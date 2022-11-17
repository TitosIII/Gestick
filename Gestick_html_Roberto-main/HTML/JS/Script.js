'use strict'

const grande = document.querySelector('.grande')
const punto  = document.querySelectorAll('.punto')

//Cuando Click en punto
    //Saber la posicion de ese punto
    //Aplicar un transform Translate X al grande
    //Quitar la clase activo
    //Añadir la clase activo al punto que hemos hecho click


//RECORRER LOS PUNTOS
punto.forEach ((cadaPunto, i ) => {
    punto[i].addEventListener('click', ()=>{

        //Asiganar un click a cadaPunto
        let posicion = i
        //Calculo de el movimiento
        let operacion = posicion * -50

        //Ejecutar movimiento
        grande.style.transform = `translateX(${ operacion }%)`

        //Recorremos todos los puntos
        punto.forEach ((cadaPunto, i )=>{
            //Quitamos la clase Activo a todos los puntos
            punto[i].classList.remove('activo')
        })
            //Añadimos la clase Activo de el punto
        punto[i].classList.add('activo')
    })
})

function traer(){
    //document.documentElement.style.setProperty('--btn-color','pink')
    console.log("funcion traer")
}
function pink(){ document.body.style.backgroundColor = "pink"; }


function cantidadproductos(){
    var cantidadvar=1;
    document.getElementById("cantidad").innerHTML = cantidadvar;
}


function cantidadproductosdos(){
    var cantidadvar2=0;
    document.getElementById("cantidad").innerHTML = cantidadvar2;
}

