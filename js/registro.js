let nombre = document.getElementById("name");
let apellido = document.getElementById("Nombre");
let txtTelefono = document.getElementById("telefono");
let email = document.getElementById("email");
let boleta = document.getElementById("boleta");

let btnConfirm = document.getElementById("btnConfirm");

//Esto es de las validaciones
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");
let isValid = true;
//-------------------------------------------------------

// Función principal
btnConfirm.addEventListener("click", function (event) {
  event.preventDefault(); // Evita que el formulario se envíe

  isValid = true;
  clearTimeout(idTimeout);
  //quita los textos si se cumple todo
  alertValidacionesTexto.innerHTML = "";
  //quita el se debe escribir.. estableciendolo en none fijo
  alertValidaciones.style.display = "none";
  //   nombre.value = nombre.value.trim(); HACE LO MISMO QUE BLUR
  let lista = "Los siguientes campos deben ser llenados correctamente:<ul>";

  //SI LA FUNCION DA FALSE SE QUITA EL BORDE SI DA TRUE SE PONE EL ALERT Y EL BORDE ROJO
  //validacion de campo nombre
  !validarNombre()
    ? ((nombre.style.border = "solid thin red"),
      (lista += "<li>Se debe escribir un nombre de 2 o mas letras</li>"),
      (alertValidaciones.style.display = "block"),
      (isValid = false))
    : (nombre.style.border = "");
  //validacion de campo nombre
  !validarApellido()
    ? ((apellido.style.border = "solid thin red"),
      (lista += "<li>Se debe escribir un apellido de 2 o mas letras</li>"),
      (alertValidaciones.style.display = "block"),
      (isValid = false))
    : (apellido.style.border = "");

  //validacion campo Password
  !validarPassword()
    ? ((password.style.border = "solid thin red"),
      (lista += "<li>Comprueba tu contraseña</li>"),
      (alertValidaciones.style.display = "block"),
      (isValid = false))
    : (password.style.border = "");

  //validacion imagen
  !validarImagen()
    ? ((imagen.style.border = "solid thin red"),
      (lista += "<li>Agrega una imagen</li>"),
      (alertValidaciones.style.display = "block"),
      (isValid = false))
    : (imagen.style.border = "");

  //validacion de campo precio
  !validarTelefono()
    ? ((txtTelefono.style.border = "solid thin red"),
      (lista += "<li> Se debe escribir una precio valido</li>"),
      (alertValidaciones.style.display = "block"),
      (isValid = false))
    : (txtTelefono.style.border = "");

  //validacion de campo Email
  !validarEmail()
    ? ((correo.style.border = "solid thin red"),
      (lista += "<li> Se debe escribir un email valido (ana.isabel@gmail.com)</li>"),
      (alertValidaciones.style.display = "block"),
      (isValid = false))
    : (correo.style.border = "");

  //validacion de campo Boleta
  !validarBoleta()
    ? ((boleta.style.border = "solid thin red"),
      (lista += "<li>Ingresa un numero de boleta que contenga 10 caracteres</li>"),
      (alertValidaciones.style.display = "block"),
      (isValid = false))
    : (boleta.style.border = "");

  lista += "</ul>";
  //agrega el resultado de los if al campo validaciones
  alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
  //quita las validaciones despues de 3 seg
  idTimeout = setTimeout(() => {
    alertValidaciones.style.display = "none";
  }, 3000);

  //   Codigo que se ejecuta al cumplir validaciones
  // if (isValid) {

  // }
  //   ---------------------------------------------
});

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
    apellido: apellido.value,
    telefono: txtTelefono.value,
    email: email.value,
  };

  localStorage.setItem("datos", JSON.stringify(datos));
}

// Función para limpiar campos
function limpiarCampos() {
  document.getElementById("name").value = "";
  document.getElementById("Nombre").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("email").value = "";
  document.getElementById("boleta").value = "";
}
