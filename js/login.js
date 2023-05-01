
let txtUsuario = document.getElementById("email");
let txtPasword = document.getElementById("password");

const btnIngresar = document.getElementById("btnIngresar");

//Botton de Ingresar
btnIngresar.addEventListener("click", function(event) {
    event.preventDefault();


    //se lleva los datos de los campos
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
          Usuario: txtUsuario.value,
          Pasword: txtPasword.value
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