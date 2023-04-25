let nombre = document.getElementById("name");
console.log(nombre);
let apellido = document.getElementById("Nombre");
console.log(nombre);
let txtTelefono = document.getElementById("telefono");
console.log(txtTelefono);
let email = document.getElementById("email");
console.log(email);
let boleta=document.getElementById("boleta");
console.log(boleta);
let contraseña=document.getElementById("contraseña");
console.log(contraseña);
let contraseñaconfirm=document.getElementById("contraseñaconfirm");
console.log(contraseñaconfirm);
let imageniden=document.getElementById("imageniden");
console.log(imageniden);


let btnConfirm = document.getElementById("btnConfirm");

document.addEventListener("DOMContentLoaded", function() {//Inicio DOM

// Función principal
btnConfirm.addEventListener("click", function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    console.log("Validar NomBRE: "+ validarNombre());
    console.log("Validar telefon: "+ validarTelefono());
    console.log("Validar email: "+ validarEmail());
    console.log("Validar apellido: "+ validarApellido());
    console.log("Validar contraseña: "+ validarContraseña());
    console.log("Validar contraseñaconfirm: "+ validarcontraseñaconfirm());
    console.log("Validar boleta: "+ validarBoleta());
    console.log("Validar imageniden: "+ validarimageniden());
    
    //Validacion de los campos
    if (validarNombre() && validarApellido() && validarTelefono() && validarEmail() &&
    validarContraseña() && validarcontraseñaconfirm() && validarBoleta() && validarimageniden()) {
        guardarDatos(nombre, apellido, txtTelefono, email, boleta, contraseña, contraseñaconfirm, imageniden);
        limpiarCampos();
    } else {
        console.log("Por favor, ingresa valores válidos en los campos.");
    }
});
let isValid = true;


// Funciones de validación


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

function validarContraseña() {
  // Obtener la contraseña del campo de entrada
  const contraseña = contraseña.value;

  // Validar que la contraseña tenga al menos 8 caracteres
  if (contraseña.length < 8) {
    isValid = false;
    return false;
  }

  // Validar que la contraseña contenga al menos un número
  if (!/\d/.test(contraseña)) {
    isValid = false;
    return false;
  }

  // Validar que la contraseña contenga al menos una letra mayúscula
  if (!/[A-Z]/.test(contraseña)) {
    isValid = false;
    return false;
  }

  // Validar que la contraseña contenga al menos una letra minúscula
  if (!/[a-z]/.test(contraseña)) {
    isValid = false;
    return false;
  }

  // La contraseña es válida
  return true;
}

function validarcontraseñaconfirm() {
  // Obtener las contraseñas de los campos de entrada
  const contraseña = contraseña.value;
  const contraseñaconfirm = contraseñaconfirm.value;

  // Validar que la contraseña y la confirmación de contraseña sean iguales
  if (contraseña !== contraseñaconfirm) {
    isValid = false;
    return false;
  }

  // Validar que la contraseña tenga al menos 8 caracteres
  if (contraseñaconfirm.length < 8) {
    isValid = false;
    return false;
  }

  // Validar que la contraseña contenga al menos un número
  if (!/\d/.test(contraseñaconfirm)) {
    isValid = false;
    return false;
  }

  // Validar que la contraseña contenga al menos una letra mayúscula
  if (!/[A-Z]/.test(contraseñaconfirm)) {
    isValid = false;
    return false;
  }

  // Validar que la contraseña contenga al menos una letra minúscula
  if (!/[a-z]/.test(contraseñaconfirm)) {
    isValid = false;
    return false;
  }

  // Las contraseñas son válidas
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
    //  valida el correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validar el correo electrónico y limpia el input si es correcto
    if (emailRegex.test(email.value)) {
      return true;
    } else {
      return false;
    }
  }

  function validarimageniden() {
    // Obtener el archivo seleccionado
    const imagen = document.getElementById("imageniden").files[0];
    
    // Validar que se haya seleccionado un archivo
    if (!imagen) {
      isValid = false;
      return false;
    }
    
    // Validar que el archivo sea una imagen en formato JPG o PNG
    const extension = imagen.name.split(".").pop().toLowerCase();
    if (extension !== "jpg" && extension !== "jpeg" && extension !== "png") {
      isValid = false;
      return false;
    }
    
    // La imagen es válida
    return true;
  }

// Función para guardar datos en local storage
function guardarDatos(nombre, txtTelefono, email, apellido, contraseña, contraseñaconfirm, boleta, imageniden) {
    const datos = {
        nombre: nombre.value,
        apellido : apellido.value,
        telefono: txtTelefono.value,
        email: email.value,
        contraseña: contraseña.value,
        contraseñaconfirm: contraseñaconfirm.value,
        boleta: boleta.value,
        imageniden: imageniden,

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
    document.getElementById("contraseña").value = '';
    document.getElementById("contraseñaconfirm").value = '';
    document.getElementById("apellido").value = '';
    document.getElementById("imageniden").value = '';

}

//imagen en codigo solo cambia #imagen al nombre del ID que tenga la imagen

document.querySelector("#imagen").addEventListener("change", function () {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    imagen = reader.result;
  });
  reader.readAsDataURL(this.files[0]);
}); //imagen codigo

});//Final DOM