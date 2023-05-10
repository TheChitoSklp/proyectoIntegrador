//Se definen las variables del formulario mediante su ID
let txtName = document.getElementById("name");
let txtemail = document.getElementById("txtCorreo");
const email = document.getElementById("txtCorreo");
let txtMensaje = document.getElementById("mensaje");
let txtTelefono = document.getElementById("telefono");
const form = document.getElementById("formSend");

//Se definen los divs ocultos de las alertas
let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
//Se define el btn enviar y clear en variables
let btnEnviar = document.getElementById("btnEnviar");
let btnClear = document.getElementById("btnClear");
//Variable de comprobacion y el timout para quitar las validaciones
let isValid = true;
let idTimeout;
// Validacion nombre
function validarNombre() {
  if (txtName.value.length < 2) {
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

  txtTelefono.style.border = "";
  return true;
}

//Validar mail
function validateEmail() {
  //  valida el correo electrónico
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validar el correo electrónico y limpia el input si es correcto
  if (emailRegex.test(email.value)) {
    return true;
  } else {
    return false;
  }
}

function validarMensaje() {
  // .replace quita los espacios
  if (txtMensaje.value.replace(/\s+/g, "").length < 20) {
    return false;
    /*  mostrarMensaje('El mensaje es demasiado corto. No debe tener menos de 20 caracteres.', 'error');  */
  } else if (txtMensaje.value.length > 160) {
    return false;
    /* mostrarMensaje('El mensaje es demasiado largo. No debe tener más de 160 caracteres.', 'error'); */
  } else if (!/^[a-zA-Z0-9\s]*$/.test(txtMensaje.value)) {
    return false;
    /*  mostrarMensaje('El mensaje solo puede contener letras y números.', 'error'); */
  } else {
    return true;
  }
}
// Boton comprueba las validaciones
btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();
  isValid = true;
  console.log("Enviando");
  clearTimeout(idTimeout);

  /* Limpiar mensaje de alerta después del click en agregar */
  alertValidacionesTexto.innerHTML = "";
  alertValidaciones.style.display = "none";

  /* Validación de campos vacíos */
  txtName.value = txtName.value.trim(); //* Eliminar espacios - necesita click

  let lista = "Los siguientes campos deben ser llenados correctamente:<ul>";

  if (!validarNombre()) {
    txtName.style.border = "solid thin red";
    lista += "<li>Se debe escribir un nombre válido</li>";
    alertValidaciones.style.display = "block";
    isValid = false;
  } else {
    txtName.style.border = "";
  } // validar si el campo "Nombre" está vacio"

  if (!validateEmail()) {
    txtemail.style.border = "solid thin red";
    lista +=
      "<li>Se debe ingresar un correo válido que contenga '@' y un dominio; ejemplo: alguien@ejemplo.com </li>";
    alertValidaciones.style.display = "block";
    isValid = false;
  } else {
    txtemail.style.border = "";
  } // validar campo email

  if (!validarTelefono()) {
    txtTelefono.style.border = "solid thin red";
    lista += "<li>Se debe escribir un número valido</li>";
    alertValidaciones.style.display = "block";
    isValid = false;
  } else {
    txtTelefono.style.border = "";
  } // validar campo telefono

  if (!validarMensaje()) {
    txtMensaje.style.border = "solid thin red";
    lista +=
      "<li>Se debe escribir un mensaje de entre 20 y 160 caracteres, sólo se permiten letras y números</li>";
    alertValidaciones.style.display = "block";
    isValid = false;
  } else {
    txtMensaje.style.border = "";
  } // validar campo mensaje

  lista += "</ul>";
  alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
  idTimeout = setTimeout(function () {
    alertValidaciones.style.display = "none";
  }, 5000); //tiempo de mensaje

  //  Envia el formulario una vez se validan los campos
  if (isValid) {
    form.submit();
  }
  console.log(form);
  //Limpia los campos cuando ya se enviaron
  if (isValid) {
    txtName.value = "";
    txtTelefono.value = "";
    txtemail.value = "";
    txtMensaje.value = "";
  }
}); //btnEnviar

/* Botón limpiar */
btnClear.addEventListener("click", function (event) {
  event.preventDefault();

  /* Limpiar campos */
  txtName.value = "";
  txtTelefono.value = "";
  txtemail.value = "";
  txtMensaje.value = "";
}); // click btnClear

/* Eliminar espacios en el inicio y fin del campo */
txtTelefono.addEventListener("blur", function (event) {
  event.preventDefault();
  txtTelefono.value = txtTelefono.value.trim();
}); /* txtTelefono.blur */

txtName.addEventListener("blur", function (event) {
  event.preventDefault();
  txtName.value = txtName.value.trim();
}); /* txtName.blur */

txtemail.addEventListener("blur", function (event) {
  event.preventDefault();
  txtemail.value = txtemail.value.trim();
}); /* txtMail.blur */

// le quita el display al label de mensaje cuando tiene algo escrito y si no tiene nada lo regresa
mensaje.addEventListener("input", () => {
  if (mensaje.value.length == 0) {
    document.getElementById("labelMensaje").style.display = "block";
  } else {
    labelMensaje.style.display = "none";
  }
});
