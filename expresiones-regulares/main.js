import './style.css'

//Se le asigna un evento al formulario de tipo "submit"
const formulario = document.querySelector('#formulario');
formulario.addEventListener("submit", mostrarValor);

const parrafo = document.createElement('P');
parrafo.classList.add('parrafo')

//Funcion para mostrar el resultado en el DOM
function mostrarValor(e){
  e.preventDefault();
  
  //Se define la expresion regular mediante entrada del usuario
  const Expresionregular = document.querySelector('#regular-expresion').value;
  const regularExpresion = new RegExp(`[${Expresionregular}]`);
  console.log(regularExpresion);

  
  //Se define la cadena que sera testeada por la expresion regular.
  const cadena = document.querySelector('#cadena');

  if(regularExpresion.test(cadena.value)){
    parrafo.textContent = 'Hizo match';

    return;
  }else{
    parrafo.textContent = 'No hizo match';
  }
  
}

document.body.appendChild(parrafo);

