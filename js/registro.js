let nombre = document.getElementById("name");
let apellido = document.getElementById("Nombre");
let txtTelefono = document.getElementById("telefono");
let email = document.getElementById("email");
let boleta = document.getElementById("boleta");
let password = document.getElementById("password");
let passwordConfirm = document.getElementById("passwordConfirm");
let imagen = document.getElementById("imagen");
let imagenBorde = document.querySelector(".imagenBorde");

let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");

let btnConfirm = document.getElementById("btnConfirm");

let isValid = true;
let idTimeout;
//establece registro como lo que tiene el storage en registros o como array vacio
let registros = JSON.parse(localStorage.getItem("registros")) || [];

//imagen en codigo
document.querySelector("#imagen").addEventListener("change", function () {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    imagen = reader.result;
  });
  reader.readAsDataURL(this.files[0]);
}); //imagen codigo
//Comprueba y deshabilita el boton registro si ya existe el email
email.addEventListener("input", () => {
  const usuarioCoincidente = registros.find((usuario) => {
    return usuario.correo === email.value;
  });

  if (usuarioCoincidente) {
    btnConfirm.disabled = true;
    correoAlerta.style.display = "block";
    btnConfirm.style.background = "red";
  } else {
    btnConfirm.disabled = false;
    btnConfirm.style.background = "rgb(107, 26, 29)";
    correoAlerta.style.display = "none";
  }
});

btnConfirm.addEventListener("click", function (event) {
  event.preventDefault();
  let checkboxes = formSend.querySelector('input[type="radio"]:checked');
  clearTimeout(idTimeout);
  alertValidacionesTexto.innerHTML = "";
  alertValidaciones.style.display = "none";

  let lista = "Los siguientes campos deben ser llenados correctamente:<ul>";
  isValid = true;
  //SI LA FUNCION DA FALSE SE QUITA EL BORDE SI DA TRUE SE PONE EL ALERT Y EL BORDE ROJO
  //validacion de campo nombre
  !validarNombre()
    ? ((nombre.style.border = "solid 2px red"),
      (lista += "<li>Se debe escribir un nombre de 2 o mas letras</li>"),
      (alertValidaciones.style.display = "block"),
      (alertValidacionesTexto.style.color = "black"),
      (isValid = false))
    : (nombre.style.border = "");
  //validacion de campo nombre
  !validarApellido()
    ? ((apellido.style.border = "solid 2px red"),
      (lista += "<li>Se debe escribir un apellido de 2 o mas letras</li>"),
      (alertValidaciones.style.display = "block"),
      (alertValidacionesTexto.style.color = "black"),
      (isValid = false))
    : (apellido.style.border = "");

  //validacion campo Password
  !validarPassword()
    ? ((password.style.border = "solid 2px red"),
      (lista += "<li>Comprueba tu password</li>"),
      (alertValidaciones.style.display = "block"),
      (alertValidacionesTexto.style.color = "black"),
      (isValid = false))
    : (password.style.border = "");
  //confirmar pass
  !validarpasswordConfirm()
    ? ((passwordConfirm.style.border = "solid 2px red"),
      (lista += "<li>La Contraseña debe ser igual</li>"),
      (alertValidaciones.style.display = "block"),
      (alertValidacionesTexto.style.color = "black"),
      (isValid = false))
    : (passwordConfirm.style.border = "");

  //validacion imagen
  imagenBorde.files.length === 0
    ? ((imagenBorde.style.border = "solid thin red"),
      (lista += "<li>Agrega una imagen</li>"),
      (alertValidaciones.style.display = "block"),
      (isValid = false))
    : (imagenBorde.style.border = "");

  //validacion de campo precio
  !validarTelefono()
    ? ((txtTelefono.style.border = "solid 2px red"),
      (lista += "<li> Se debe escribir una precio valido</li>"),
      (alertValidaciones.style.display = "block"),
      (alertValidacionesTexto.style.color = "black"),
      (isValid = false))
    : (txtTelefono.style.border = "");

  //validacion de campo Email
  !validarEmail()
    ? ((email.style.border = "solid 2px red"),
      (lista += "<li> Se debe escribir un email valido (ana.isabel@gmail.com)</li>"),
      (alertValidaciones.style.display = "block"),
      (alertValidacionesTexto.style.color = "black"),
      (isValid = false))
    : (email.style.border = "");
  console.log(email.value);
  console.log(validarEmail());
  //validacion de campo Boleta
  !validarBoleta()
    ? ((boleta.style.border = "solid 2px red"),
      (lista += "<li>Ingresa un numero de boleta que contenga 10 caracteres</li>"),
      (alertValidaciones.style.display = "block"),
      (alertValidacionesTexto.style.color = "black"),
      (isValid = false))
    : (boleta.style.border = "");
  checkboxes === null
    ? ((ownerLabel.style.borderBottom = "1px solid rgba(255, 0, 0, 0.9)"),
      (lista += "<li>Marca una casilla</li>"),
      (alertValidaciones.style.display = "block"),
      (alertValidacionesTexto.style.color = "black"),
      (isValid = false))
    : (ownerLabel.style.borderBottom = "");
  checkboxes === null
    ? (usuarioLabel.style.borderBottom = "1px solid rgba(255, 0, 0, 0.9)")
    : (usuarioLabel.style.borderBottom = "");

  lista += "</ul>";
  //agrega el resultado de los if al campo validaciones
  alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);
  //quita las validaciones despues de 3 seg
  idTimeout = setTimeout(() => {
    alertValidaciones.style.display = "none";
  }, 3000);
  //   Codigo que se ejecuta al cumplir validaciones
  if (isValid) {
    let personas = `{
    "rol"          :        "${checkboxes.value}", 
    "nombre"          :     "${nombre.value}", 
    "apellido"        :     "${apellido.value}", 
    "password"        :     "${password.value}",
    "numeroBoleta"    :     "${boleta.value}",
    "correo"          :     "${email.value}",
    "telefono"        :     "${txtTelefono.value}",
    "imagen"          :     "${imagen}"
  }`;

    registros.push(JSON.parse(personas));
    localStorage.setItem("registros", JSON.stringify(registros));
    limpiarCampos();
    window.location.href = "../login.html";
  }
  //   ---------------------------------------------
});
//Final DOM

// Función para limpiar campos
function limpiarCampos() {
  document.getElementById("owner").checked = false;
  document.getElementById("usuarioComun").checked = false;
  document.getElementById("name").value = "";
  document.getElementById("Nombre").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("email").value = "";
  document.getElementById("boleta").value = "";
  document.getElementById("password").value = "";
  document.getElementById("passwordConfirm").value = "";
  document.getElementById("imagen").value = "";
}

//imagen en codigo solo cambia #imagen al nombre del ID que tenga la imagen

document.querySelector("#imagen").addEventListener("change", function () {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    imagen = reader.result;
  });
  reader.readAsDataURL(this.files[0]);
}); //imagen codigo

//Validacion Nombre
function validarNombre() {
  if (nombre.value.length < 2) {
    return false;
  }
  return true;
}
//Validacion Apellido

function validarApellido() {
  if (apellido.value.length < 2) {
    return false;
  }
  return true;
}

function validarPassword() {
  // Validar que la password tenga al menos 8 caracteres
  if (password.value.length < 8) {
    return false;
  }

  // Validar que la password contenga al menos un número
  if (!/\d/.test(password.value)) {
    return false;
  }

  // Validar que la password contenga al menos una letra mayúscula
  if (!/[A-Z]/.test(password.value)) {
    return false;
  }

  // Validar que la password contenga al menos una letra minúscula
  if (!/[a-z]/.test(password.value)) {
    return false;
  }

  // La password es válida
  return true;
}

function validarpasswordConfirm() {
  // Validar que la password y la confirmación de password sean iguales
  if (password.value !== passwordConfirm.value) {
    return false;
  }

  // Validar que la password tenga al menos 8 caracteres
  if (passwordConfirm.value.length < 8) {
    return false;
  }

  // Validar que la password contenga al menos un número
  if (!/\d/.test(passwordConfirm.value)) {
    return false;
  }

  // Validar que la password contenga al menos una letra mayúscula
  if (!/[A-Z]/.test(passwordConfirm.value)) {
    isValid = false;
    return false;
  }

  // Validar que la password contenga al menos una letra minúscula
  if (!/[a-z]/.test(passwordConfirm.value)) {
    return false;
  }

  // Las passwords son válidas
  return true;
}

//Validacion Telefono
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

//Validacion Boleta
function validarBoleta() {
  if (
    boleta.value.length == 0 ||
    /^(\d)\1+$/.test(boleta.value) ||
    isNaN(boleta.value) ||
    boleta.value.length > 10 ||
    boleta.value.length < 10
  ) {
    isValid = false;
    return false;
  }

  return true;
}

//Validar mail
function validarEmail() {
  //  valida el email electrónico
  const emailRegex = /^[\w.]+@\w+\.\w{2,3}$/;
  // Validar el email electrónico y limpia el input si es correcto
  if (emailRegex.test(email.value)) {
    return true;
  } else {
    return false;
  }
}
