/*______________________________*/
/* proyectos.js
/*      Estructura:
/*        - Constantes
          - Variables
          - Funciones
/*_______________________________*/

//SECCIÓN PROYECTOS

//cuando MOUSEMOVE el ratón en window,
    // .tooltip LE STYLE transform: translateX y translateY

//Selección de todas las imágenes de los proyectos
const tooltip = document.querySelector('.tooltip')

//Obtengo la distancia en horizontal y vertical
window.addEventListener('mousemove', (e) => {
    const { clientX , clientY } = e

//Aplico la transformación de la imágen
    tooltip.style.transform = `translateX(${clientX}px) translateY(${clientY}px)`;
})

// Cuando hago MOUSEOVER en .proyectos__li
    // .tooltip LE ADD la class isVisible
    // TODAS LAS .tooltip__img LE REMOVE isVisible
    // .tooltip__img [i] LE ADD isVisible

//Selección de todos los textos de los proyectos
const proyectos = document.querySelectorAll('.proyectos__li')

//Selección de todas las imágenes
const tooltipImg = document.querySelectorAll('.tooltip__img')

//Se pone el ratón por encima y se añade la clase tooltip
proyectos.forEach(( _ , i )=>{
    proyectos[i].addEventListener('mouseover' , ()=>{
        tooltip.classList.add('isVisible')

//Se elimina y se añade la clase de la imágen
        tooltipImg.forEach(( _ , i )=>{
            tooltipImg[i].classList.remove('isVisible')
        })
        tooltipImg[i].classList.add('isVisible')
    })
    proyectos[i].addEventListener('mouseout' , ()=>{
        tooltip.classList.remove('isVisible')
    })
})