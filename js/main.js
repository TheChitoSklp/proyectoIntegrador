let txtName=document.getElementById("name");
let txtemail=document.getElementById("txtCorreo");
let txtMensaje=document.getElementById("mensaje");
let txtTelefono=document.getElementById("telefono");

let alertValidaciones=document.getElementById("alertValidaciones");
let alertValidacionesTexto=document.getElementById("alertValidacionesTexto");

let btnEnviar = document.getElementById("btnEnviar");
let btnClear = document.getElementById("btnClear");

let isValid=true; 
let idTimeout;

/////DANI
var Email = { send: function (a) { return new Promise(function (n, e) { a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send"; var t = JSON.stringify(a); Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) }) }) }, ajaxPost: function (e, n, t) { var a = Email.createCORSRequest("POST", e); a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n) }, ajax: function (e, n) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send() }, createCORSRequest: function (e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t } };

// A partir de aquí esto va en el botón de enviar.
let resumen = `
{
    "Nombre" : ${txtName},
    "Teléfono" : ${txtTelefono},
    "Correo" : ${txtemail},
    "Mensaje" : ${txtMensaje}
} `;

Email.send({
    // Configura las opciones de envío de correo electrónico, como el destinatario, asunto, cuerpo, etc.
    Host : "smtp.elasticemail.com",
    to: 'danieblamessenger@gmail.com',
    from: 'danieblamessenger@gmail.com',
    subject: 'Asunto del correo',
    body: resumen,
    // Configura la función de callback para manejar el resultado del envío de correo electrónico
    // Puedes personalizar esto según tus necesidades
}).then(
    message => alert(message)
  );
//////////// Dani

function validarNombre(){
    if (txtName.value.length<2){
        return false;
    }
    return true;
}//Validar Nombre

function validarTelefono(){
    if(txtTelefono.value.length==0){
        return false;
    }
    if(isNaN(txtTelefono.value)){
        console.log("no es un número");
        txtTelefono.style.border="solid thin red";
        alertValidacionesTexto.innerHTML+="Se debe escribir un número de 10 dígitos";
        alertValidaciones.style.display="block";
        isValid=false;
        return false;
    }
    if (txtTelefono.value.length>10){
        console.log("es mayor a 10 dígitos");
        txtTelefono.style.border="solid thin red";
        alertValidacionesTexto.innerHTML+="Se debe escribir un número de 10 dígitos";
        alertValidaciones.style.display="block";
        isValid=false;
        return false;
    }
    
    
    if (txtTelefono.value.length<10){
        console.log("es menor a 10 dígitos");
        txtTelefono.style.border="solid thin red";
        alertValidacionesTexto.innerHTML+="Se debe escribir un número de 10 dígitos";
        alertValidaciones.style.display="block";
        isValid=false;
        return false;
    }
    txtTelefono.style.border="";
    return true;
}//Validar teléfono

function validateEmail() {
    // Obtener el valor del input de correo electrónico
        const email = document.getElementById("txtCorreo");
    //  valida el correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validar el correo electrónico y limpia el input si es correcto
      if (emailRegex.test(email.value)) {
        return true;
        /* email.classList.remove("invalid-email");
        email.classList.add("valid-email");
        email.value = ""; */
      } else {
        return false;
        /* email.classList.remove("valid-email");
        email.classList.add("invalid-email"); */
      }
    }

function validarMensaje(){
    if (txtMensaje.value.length<20){
            return false;
           /*  mostrarMensaje('El mensaje es demasiado corto. No debe tener menos de 20 caracteres.', 'error');  */
        }else if (txtMensaje.value.length > 160) {
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
};


btnEnviar.addEventListener("click",function(event){
    event.preventDefault();
    isValid=true;
    console.log("Enviando");
    clearTimeout(idTimeout);

    /* Limpiar mensaje de alerta después del click en agregar */
    alertValidacionesTexto.innerHTML=""; 
    alertValidaciones.style.display="none";

    /* Validación de campos vacíos */
/* console.log("borde: ",txtName.style.border); // Verificar color de borde */
   txtName.value=txtName.value.trim();  //* Eliminar espacios - necesita click

    let lista="Los siguientes campos deben ser llenados correctamente:<ul>";

   if(!validarNombre()){
    txtName.style.border="solid thin red";
    lista += "<li>Se debe escribir un nombre válido</li>";
    alertValidaciones.style.display="block";
    isValid=false;
   }else{
    txtName.style.border="";
   }// validar si el campo "Nombre" está vacio"

   if(!validateEmail()){
    txtemail.style.border="solid thin red";
    lista += "<li>Se debe ingresar un correo válido que contenga '@' y un dominio; ejemplo: alguien@ejemplo.com </li>";
    alertValidaciones.style.display="block";
    isValid=false;
   }else{
    txtemail.style.border="";
   }// validar campo email

   if(!validarTelefono()){
    txtTelefono.style.border="solid thin red";
    lista +="<li>Se debe escribir un número de 10 dígitos</li>";
    alertValidaciones.style.display="block";
    isValid=false; 
   }else{
    txtTelefono.style.border="";
   }// validar campo telefono

   if(!validarMensaje()){
    txtMensaje.style.border="solid thin red";
    lista +="<li>Se debe escribir un mensaje de entre 20 y 160 caracteres, sólo se permiten letras y números</li>"
    alertValidaciones.style.display="block";
    isValid=false;
   }else{
    txtMensaje.style.border="";
   }// validar campo mensaje

   lista+="</ul>";
   alertValidacionesTexto.insertAdjacentHTML("beforeend",lista);
   idTimeout=setTimeout(function(){
        alertValidaciones.style.display="none";
   },5000); //tiempo de mensaje

   if(isValid){
    txtName.value="";
    txtTelefono.value="";
    txtemail.value="";
    txtMensaje.value="";
   }
}); //btnEnviar
 


/* function ValidarNombre(){
    if(txtName.ariaValueMax.length<2){
        textName.style.border="solid thin red";
        alertValidaciones.style.display="block";
        isValid=false;
    }else{
        txtName.style.border="";
    }
} */


/* Botón limpiar */
btnClear.addEventListener("click",function(event){
    event.preventDefault();

    /* Limpiar campos */
    txtName.value="";
    txtTelefono.value="";
    txtemail.value="";
    txtMensaje.value="";
});// click btnClear

/* Eliminar espacios en el inicio y fin del campo */
txtTelefono.addEventListener("blur",function(event){
    event.preventDefault();
    txtTelefono.value=txtTelefono.value.trim();
}); /* txtTelefono.blur */
    
txtName.addEventListener("blur",function(event){
    event.preventDefault();
    txtName.value=txtName.value.trim();
}); /* txtName.blur */

txtemail.addEventListener("blur",function(event){
    event.preventDefault();
    txtemail.value=txtemail.value.trim();
}); /* txtName.blur */