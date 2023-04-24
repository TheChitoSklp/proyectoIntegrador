let nombre = document.getElementById("name");
console.log(nombre);
let apellido = document.getElementById("Nombre");
console.log(apellido);
let txtTelefono = document.getElementById("telefono");
console.log(txtTelefono);
let email = document.getElementById("email");
console.log(email);
let boleta=document.getElementById("boleta");
console.log(boleta);


let btnConfirm = document.getElementById("btnConfirm");

// Función principal
btnConfirm.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    console.log("Validar NomBRE: "+ validarNombre());
    console.log("Validar telefon: "+ validarTelefono());
    console.log("Validar email: "+ validarEmail());

    //Validacion de los campos
    if (validarNombre() && validarApellido() && validarTelefono() && validarEmail()) {
        guardarDatos(nombre, apellido, txtTelefono, email);
        limpiarCampos();
    } else {
        console.log("Por favor, ingresa valores válidos en los campos.");
    }
});
let isValid = true;


// Funciones de validación

function validarNombre() {
    if (nombre.value.length < 2) {
        return false;
      }
      return true;
}

function validarApellido() {
  if (apellido.value.length < 2) {
      return false;
    }
    return true;
}

//Validacon Telefono
function validarTelefono() {
    if (
      txtTelefono.value.length == 0 ||
      /^(\d)\1+$/.test(txtTelefono.value) ||
      isNaN(txtTelefono.value) ||
      txtTelefono.value.length > 10 ||
      txtTelefono.value.length < 10
    ) {
      isValid = false;
      return false;
    }
  
    
    return true;
  }
  
  //Validar mail
  function validarEmail() {
    //  valida el correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validar el correo electrónico y limpia el input si es correcto
    if (emailRegex.test(email.value)) {
      return true;
    } else {
      return false;
    }
  }
// Función para guardar datos en local storage
function guardarDatos(nombre, txtTelefono, email) {
    const datos = {
        nombre: nombre.value,
        apellido : apellido.value,
        telefono: txtTelefono.value,
        email: email.value
    };

    localStorage.setItem('datos', JSON.stringify(datos));
}

// Función para limpiar campos
function limpiarCampos() {
    document.getElementById("name").value = '';
    document.getElementById("Nombre").value = '';
    document.getElementById("telefono").value = '';
    document.getElementById("email").value = '';
    document.getElementById("boleta").value = '';
}