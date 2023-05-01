
let txtUsuario = document.getElementById("txtCorreo");
let txtPasword = document.getElementById("password");

const btnIngresar = document.getElementById("btnEnviar");

//Usuarios Inventados para verificar la funcion
/*let usuarios = [
    { nombre: "usuario1", password: "password1" },
    { nombre: "usuario2", password: "password2" },
    { nombre: "usuario3", password: "password3" },
];

//para obtener los usuarios del localStorage
localStorage.setItem("usuarios", JSON.stringify(usuarios));*/  

//Botton de Ingresar
btnIngresar.addEventListener("click", function(event) {
    event.preventDefault();

    autenticarUsuario(txtUsuario.value, txtPasword.value);
 });

//funcion autenticar Usuario Ingresado 
function autenticarUsuario(usuario, password) {
    const usuarios = JSON.parse(localStorage.getItem("registros"));//
  
    if (usuarios) {
      //Vaidacion estricta de los datos  
      const usuarioValido = usuarios.find(u => u.correo === usuario && u.password === password);
      
      if (usuarioValido) {
        const usuarioVerificado = {
          txtUsuario: txtUsuario.value,
          txtPasword: txtPasword.value
        };        
        localStorage.setItem("usuarioVerificado", JSON.stringify(usuarioVerificado));        
        console.log("Usuario autenticado correctamente");
        
        //miFormularioLogin.reset();
      } else {
        console.log("Usuario no válido");
      }
    } else {
      console.log("No hay usuarios almacenados");
    }
}