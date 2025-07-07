/*______________________________*/
/* index.js
/*      Estructura:
/*        - Constantes
          - Variables
          - Eventos
/*_______________________________*/


//sectionProceso
    // SLIDER

let texto = 0
console.log(texto)

// Selección del botón izquierdo para cada texto
const next = document.querySelector('.next')

// Selección del botón derecho para cada texto
const prev = document.querySelector('.prev')

// Selección de todos los textos
const sliderPs = document.querySelectorAll('.slider__p')


//Se hace click sobre el boton
prev.addEventListener('click' , ()=>{
    console.clear()
    console.log(texto)

//Se van pasando hacia delante hasta cuatro textos
    texto++
    if( texto >= 4 ){
        texto = 0
    }

//Se elimina y se añade la clase
    sliderPs.forEach(( _ , i )=>{
        sliderPs[i].classList.remove('isVisible')
    })
    sliderPs[texto].classList.add('isVisible')
    
})

//Se hace click sobre el boton
next.addEventListener('click' , ()=>{
    console.clear()

//Se van pasando hacia atrás hasta cuatro textos.
    texto--
    if(texto <= 0 ){
        texto = 4
    }
    console.log(texto)

//Se elimina y se añade la clase
    sliderPs.forEach(( _ , i )=>{
        sliderPs[i].classList.remove('isVisible')
    })
    sliderPs[texto].classList.add('isVisible')
})

//ACORDEON
    //PROYECTOS

//Cuando hago CLICK en .acordeon__li
    //Los .acordeonMarca__img LE REMOVE isVisible
    //.acordeonMarca__img el mismo index LE ADD isVisible


//Selección de todos los botones del acordeón
const acordeonLi = document.querySelectorAll('.acordeon__li')

//Selección de todas las imágenes del acordeón
const acordeonMarcaImg = document.querySelectorAll('.acordeonMarca__img')

//Se hace click sobre el acordeón
acordeonLi.forEach(( _ , i )=>{
    acordeonLi[i].addEventListener('click' , ()=>{

//Se eliminan y se añade cada imágen.
        acordeonMarcaImg.forEach(( _ , i )=>{
            acordeonMarcaImg[i].classList.remove('isVisible')
        })
        acordeonMarcaImg[i].classList.add('isVisible')

    })
})