//eventos de los inputs y text area
const datos = {
    nombre:'',
    email:'',
    telefono:'',
    mensaje:'',
    si:null,
    no: null
}

const nombreinput = document.querySelector ('#nombre');
const emailinput = document.querySelector ('#email');
const telefonoinput=document.querySelector('#telefono')
const mensajeinput = document.querySelector ('#mensaje');
const formulario = document.querySelector('.formulario');
const siinput = document.querySelector('#si')
const noinput = document.querySelector('#no')


nombreinput.addEventListener('input', leerTexto)
emailinput.addEventListener('input', leerTexto)
telefonoinput.addEventListener('input',leerTexto)
mensajeinput.addEventListener('input',leerTexto) 
noinput.addEventListener('change',leerTexto)
siinput.addEventListener('change',leerTexto)

// evento submit para enviar información
formulario.addEventListener('submit', function (evento){
    evento.preventDefault()

    // validar el formulario

    const { nombre, email, telefono, mensaje, si , no } = datos;

    if (nombre=== ''|| email === ''|| telefono===''|| mensaje === ''||si===false ||si=== null|| no === true){
        mostrarAlerta('Todos los campos son obligatorios y se debe aceptar términos y condiciones',true);
        
        
        return;
    }
    // crear la alerta de enviar correctamente
    mostrarAlerta('Mensaje enviado correctamente');
    
});


function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('p');
    alerta.textContent=mensaje;

    if(error){
        alerta.classList.add('error');
    } else {
        alerta.classList.add('correcto')
    }

    formulario.appendChild(alerta);

    setTimeout(() => {
    alerta.remove();
    }, 3000);
}

//toma la inf del formulario y los guarda
function leerTexto (e){
    datos[e.target.id] = e.target.value

    validación[e.target.id]= e.target.value

    console.log(e.target);
};