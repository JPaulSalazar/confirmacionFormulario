/**
 * Ejercicio #4:
 *
 * Validar el formulario
 *
 * ¿Como funciona?:
 * 1. La validacion se hace cuando el usuario presiona el boton "Enviar" para enviar el forom
 * 2. Solo se validan los campos con el * (tienen la clase requerido)
 * 3. Al hacer click en "enviar"
 *     3.1. Los campos invalidos deben ponerse con un borde rojo
 *     3.2. Se debe mostrar un aviso con un titulo de: "Ocurrio un error, verifica
 *     los siguientes campos" y seguido un listado con los campos invalidos. El aviso
 *     debe tener border rojo y fondo rojo claro
 *     3.3. Si todos los camppos son validos, debe mostrar un mensaje abajo del boton enviar
 *     que dice: "Su formulario fue enviado". El aviso debe tener borde verde con fondo verde claro
 *
 * ¿Donde empiezo?:
 *
 * ¿Que voy a evaluar?
 * 1. Que funcione
 * 2. Buenas practicas (incluyendo buenas practicas pasadas)
 *
 */

// BOILERPLATE
const form = document.querySelector("form");
const inputs = document.querySelectorAll(".requerido");
const script = document.querySelector("script");
const h3 = document.createElement('h3');
const formParent = form.parentElement;
const h2 = document.createElement('h2');
let confirmText = '';
let alerText = '';
form.addEventListener("submit", function(e) {
  e.preventDefault();
  inputs.forEach(element => {
    if(element.value != ''){
      element.style.border = '1px solid  black';
      alerText = '';
      confirmText = "Su formulario fue enviado";
      h3.style.backgroundColor = 'rgb(78, 211, 106)';
      h3.style.border = ' 2px solid green';
      h2.style.backgroundColor = 'transparent';
      h2.style.border = 'none';
    } else{
      element.style.border = '3px solid red';
      alerText = "Ocurrio un error, verifica los siguientes campos";
      confirmText = '';
      h3.style.backgroundColor = 'transparent';
      h3.style.border = 'none';
      h2.style.backgroundColor = 'rgb(230, 105, 116)';
      h2.style.border = ' 2px solid red';
    }
  });
  h3.innerText = confirmText;
  h2.innerText = alerText;
  formParent.insertBefore(h2, form);
  formParent.insertBefore(h3, script);
  console.log("FORMULARIO ENVIADO");
});
