let txtName = document.getElementById("name");
let txtemail = document.getElementById("txtCorreo");
let txtMensaje = document.getElementById("mensaje");
let txtTelefono = document.getElementById("telefono");
const form = document.getElementById("formSend");
console.log(form);

let alertValidaciones = document.getElementById("alertValidaciones");
let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

let btnEnviar = document.getElementById("btnEnviar");
let btnClear = document.getElementById("btnClear");

let isValid = true;
let idTimeout;

function validarNombre() {
  if (txtName.value.length < 2) {
    return false;
  }
  return true;
} //Validar Nombre

function validarTelefono() {
  if (txtTelefono.value.length == 0) {
    return false;
  }
  if (isNaN(txtTelefono.value)) {
    console.log("no es un número");
    txtTelefono.style.border = "solid thin red";
    alertValidacionesTexto.innerHTML += "Se debe escribir un número de 10 dígitos";
    alertValidaciones.style.display = "block";
    isValid = false;
    return false;
  }
  if (txtTelefono.value.length > 10) {
    console.log("es mayor a 10 dígitos");
    txtTelefono.style.border = "solid thin red";
    alertValidacionesTexto.innerHTML += "Se debe escribir un número de 10 dígitos";
    alertValidaciones.style.display = "block";
    isValid = false;
    return false;
  }

  if (txtTelefono.value.length < 10) {
    console.log("es menor a 10 dígitos");
    txtTelefono.style.border = "solid thin red";
    alertValidacionesTexto.innerHTML += "Se debe escribir un número de 10 dígitos";
    alertValidaciones.style.display = "block";
    isValid = false;
    return false;
  }
  txtTelefono.style.border = "";
  return true;
} //Validar teléfono

function validateEmail() {
  // Obtener el valor del input de correo electrónico
  const email = document.getElementById("txtCorreo");
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
  if (txtMensaje.value.length < 20) {
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
    /* localStorage.setItem('mensaje', txtMensaje.value);
            mostrarMensaje('Mensaje guardado correctamente.', 'exito'); */
    // Aquí puedes agregar el código para enviar el formulario
  }
}

btnEnviar.addEventListener("click", function (event) {
  event.preventDefault();
  isValid = true;
  console.log("Enviando");
  clearTimeout(idTimeout);

  /* Limpiar mensaje de alerta después del click en agregar */
  alertValidacionesTexto.innerHTML = "";
  alertValidaciones.style.display = "none";

  /* Validación de campos vacíos */
  /* console.log("borde: ",txtName.style.border); // Verificar color de borde */
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
    lista += "<li>Se debe escribir un número de 10 dígitos</li>";
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
  // NO SIRVE EL LINK DE ENVIOS CON SMTP
  // function sendEmail() {
  //   let resumen = `{
  //   "Nombre" : ${txtName},
  //   "Teléfono" : ${txtTelefono},
  //   "Correo" : ${txtemail},
  //   "Mensaje" : ${txtMensaje}
  //   }`;
  //   // Configurar los parámetros del correo electrónico
  //   Email.send({
  //     Host: "smtp.gmail.com",
  //     Username: "enviarmailsprueba@gmail.com",
  //     Password: "C@lamardo2460",
  //     To: "chito.pepsi4@gmail.com",
  //     From: "enviarmailsprueba@gmail.com",
  //     Subject: "Mensaje desde mi sitio web",
  //     Body: resumen,
  //   }).then(function (message) {
  //     alert("Correo electrónico enviado exitosamente");
  //   });
  // }
  if (isValid) {
    form.submit();
  }

  console.log(form);

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
}); /* txtName.blur */
