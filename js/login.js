let txtUsuario = document.getElementById("email");
let txtPasword = document.getElementById("password");
const formulario = document.getElementById("formSend");
const inputs = document.querySelectorAll("#formSend input");

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
    usuarioLogeadoTexto.innerText = `Bienvenido ${loginCargado.Usuario}`;

    bienvenida.classList.remove("d-none");
  }
});

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
      console.log("Usuario autenticado correctamente");
      document
        .querySelector("#dbtn .formulario__input-error")
        .classList.remove("formulario__input-error-activo");
      formulario.reset();
      window.location.href = "../index.html";
      //miFormularioLogin.reset();
    } else {
      console.log("Usuario no válido");
      document
        .querySelector("#dbtn .formulario__input-error")
        .classList.add("formulario__input-error-activo");
    }
  } else {
    console.log("No hay usuarios almacenados");
    document
      .querySelector("#dbtn .formulario__input-error")
      .classList.add("formulario__input-error-activo");
  }
}

const validar = (e) => {
  switch (e.target.name) {
    case "email":
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
      break;

    case "password":
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
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validar);
  input.addEventListener("blur", validar);
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
