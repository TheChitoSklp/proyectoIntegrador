const formulario = document.getElementById("formLogin");
const inputs = document.querySelectorAll("#formLogin input")

const campos = {
	password: false,
	correo: false
}

const validaciones = {
    password: /^.{6,15}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
}

const validar = (e) => {
    switch (e.target.name){
        case "email":
            if(validaciones.correo.test(e.target.value)){
                document.getElementById("demail").classList.remove("formulario_incorrecto");
                document.getElementById("demail").classList.add("formulario_correcto");
                document.querySelector("#flogin .formulario__input-error").classList.remove("formulario__input-error-activo");
                campos.correo = true;
                console.log(campos.correo);
            } else{
                document.getElementById("demail").classList.add("formulario_incorrecto");
                document.querySelector("#flogin .formulario__input-error").classList.add("formulario__input-error-activo")
                campos.correo = false;
            }
        break;

        case "password":
            if(validaciones.password.test(e.target.value)){
                document.getElementById("dpassword").classList.remove("formulario_incorrecto");
                document.getElementById("dpassword").classList.add("formulario_correcto");
                document.querySelector("#fpassword .formulario__input-error").classList.remove("formulario__input-error-activo");
                campos.password=true; 
            } else{
                document.getElementById("dpassword").classList.add("formulario_incorrecto");
                document.querySelector("#fpassword .formulario__input-error").classList.add("formulario__input-error-activo");
                campos.password=false; 
            }   
        break;
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validar);
    input.addEventListener("blur", validar);
})

formulario.addEventListener("submit", (e) => {
e.preventDefault();

    if (campos.correo && campos.password){
        formulario.reset();
        document.getElementById("demail").classList.remove("formulario_correcto");
        document.getElementById("dpassword").classList.remove("formulario_correcto");

//Aqui va la validacion con el usuario y contraseña almacenados.


    } else{
        document.getElementById("demail").classList.add("formulario_incorrecto");
        document.querySelector("#flogin .formulario__input-error").classList.add("formulario__input-error-activo");
        document.getElementById("dpassword").classList.add("formulario_incorrecto");
        document.querySelector("#fpassword .formulario__input-error").classList.add("formulario__input-error-activo");
    }
})