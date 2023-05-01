
let txtUsuario = document.getElementById("txtUsuario");
let txtPasword = document.getElementById("txtPasword");

const btnIngresar = document.getElementById("btnIngresar");

//Usuarios Inventados para verificar la funcion
let usuarios = [
    { nombre: "usuario1", password: "password1" },
    { nombre: "usuario2", password: "password2" },
    { nombre: "usuario3", password: "password3" },
];

//para obtener los ususarios del localStorage
localStorage.setItem("usuarios", JSON.stringify(usuarios));  

//Botton de Ingresar
btnIngresar.addEventListener("click", function(event) {
    event.preventDefault();

    autenticarUsuario(txtUsuario.value, txtPasword.value);
 });

//funcion autenticar Usuario Ingresado 
function autenticarUsuario(usuario, password) {
    const usuarios = JSON.parse(localStorage.getItem("usuarios"));
  
    if (usuarios) {
      //Vaidacion estricta de los datos  
      const usuarioValido = usuarios.find(u => u.nombre === usuario && u.password === password);
      
      if (usuarioValido) {
        const usuarioPrueba = {
          txtUsuario: txtUsuario.value,
          txtPasword: txtPasword.value
        };        
        localStorage.setItem("usuarioPrueba", JSON.stringify(usuarioPrueba));        
        console.log("Usuario autenticado correctamente");
        
        //miFormularioLogin.reset();
      } else {
        console.log("Usuario no válido");
      }
    } else {
      console.log("No hay usuarios almacenados");
    }
}