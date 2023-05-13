let txtUsuario = document.getElementById("email");
let txtPasword = document.getElementById("password");
const formulario = document.getElementById("formSend");
const inputs = document.querySelectorAll("#formSend input");

let registros = JSON.parse(localStorage.getItem("registros")) || [];
let usuarioLoged = JSON.parse(localStorage.getItem("usuarioVerificado")) || [];

const campos = {
  password: false,
  correo: false,
};

const validaciones = {
  password: /^.{6,15}$/,
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

window.addEventListener("load", function () {
  if (localStorage.getItem("usuarioVerificado") !== null) {
    let loginCargado = JSON.parse(localStorage.getItem("usuarioVerificado"));
    loginInfo.classList.add("d-none");
    usuarioLogeadoTexto.innerText = `Usuario: ${loginCargado.Usuario}`;
    bienvenida.classList.remove("d-none");
  }
  // corrige el error de que no encuentra el valor rol
  const estadoDelLogin = window.getComputedStyle(loginInfo); //trae todos los elementos css del cardLogin
  if (estadoDelLogin.getPropertyValue("display") === "none") {
    //de todos los elementos busca el display y lo compara con none
    const usuarioCoincidente = registros.find((usuario) => {
      return usuario.correo === usuarioLoged.Usuario;
    });

    if (usuarioCoincidente.rol === "vendedor") {
      vistaVendedor.classList.remove("d-none");
    }
  }
});
//Condicion para agregar productos

//funcion autenticar Usuario Ingresado
function autenticarUsuario(usuario, password) {
  const usuarios = JSON.parse(localStorage.getItem("registros")); //

  if (usuarios) {
    //Vaidacion estricta de los datos
    const usuarioValido = usuarios.find(
      (u) => u.correo === usuario && u.password === password
    );

    if (usuarioValido) {
      const usuarioVerificado = {
        Usuario: txtUsuario.value,
        Pasword: txtPasword.value,
      };
      localStorage.setItem("usuarioVerificado", JSON.stringify(usuarioVerificado));

      document
        .querySelector("#dbtn .formulario__input-error")
        .classList.remove("formulario__input-error-activo");
      formulario.reset();
      if (usuarioValido.rol === "vendedor") {
        window.location.href = "../login.html";
      } else {
        window.location.href = "../index.html";
      }
      //miFormularioLogin.reset();
    } else {
      document
        .querySelector("#dbtn .formulario__input-error")
        .classList.add("formulario__input-error-activo");
    }
  } else {
    document
      .querySelector("#dbtn .formulario__input-error")
      .classList.add("formulario__input-error-activo");
  }
}

const validar = (e) => {
  if (e.target.name === "email") {
    if (validaciones.correo.test(e.target.value)) {
      document.getElementById("demail").classList.remove("formulario_incorrecto");
      document.getElementById("demail").classList.add("formulario_correcto");
      document
        .querySelector("#flogin .formulario__input-error")
        .classList.remove("formulario__input-error-activo");
      campos.correo = true;
    } else {
      document.getElementById("demail").classList.add("formulario_incorrecto");
      document
        .querySelector("#flogin .formulario__input-error")
        .classList.add("formulario__input-error-activo");
      campos.correo = false;
    }
  }

  if (e.target.name === "password") {
    if (validaciones.password.test(e.target.value)) {
      document.getElementById("dpassword").classList.remove("formulario_incorrecto");
      document.getElementById("dpassword").classList.add("formulario_correcto");
      document
        .querySelector("#fpassword .formulario__input-error")
        .classList.remove("formulario__input-error-activo");
      campos.password = true;
    } else {
      document.getElementById("dpassword").classList.add("formulario_incorrecto");
      document
        .querySelector("#fpassword .formulario__input-error")
        .classList.add("formulario__input-error-activo");
      campos.password = false;
    }
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validar);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if (campos.correo && campos.password) {
    document.getElementById("demail").classList.remove("formulario_correcto");
    document.getElementById("dpassword").classList.remove("formulario_correcto");
    autenticarUsuario(txtUsuario.value, txtPasword.value);
  } else {
    document.getElementById("demail").classList.add("formulario_incorrecto");
    document
      .querySelector("#flogin .formulario__input-error")
      .classList.add("formulario__input-error-activo");
    document.getElementById("dpassword").classList.add("formulario_incorrecto");
    document
      .querySelector("#fpassword .formulario__input-error")
      .classList.add("formulario__input-error-activo");
  }
});

function logout() {
  localStorage.removeItem("usuarioVerificado");
  loginInfo.classList.remove("d-none");
  bienvenida.classList.add("d-none");
}
