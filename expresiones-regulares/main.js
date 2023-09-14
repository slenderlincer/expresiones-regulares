import './style.css'

//Se define la palabra que sera la expresion regular
let expresionRegular = /[01]/;

//Se le asigna un evento al formulario de tipo "submit"
const formulario = document.querySelector('#formulario');
formulario.addEventListener("submit", mostrarValor);

const parrafo = document.createElement('P');

//Funcion para mostrar el resultado en el DOM
function mostrarValor(e){
  e.preventDefault();

  const cadena = document.querySelector('#cadena');

  if(expresionRegular.test(cadena.value)){
    parrafo.textContent = 'Hizo match';

  }else{
    parrafo.textContent = 'No hizo match';
  }
  
}

document.body.appendChild(parrafo);
