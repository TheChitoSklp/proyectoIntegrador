// TODO Cuando recarga la pagina el id de las card vuelve a iniciar en 2
let nombre = document.getElementById("Name");
let precios = document.getElementById("precios");
let descripcion = document.getElementById("descripcion");
let categoria = document.getElementById("categoria");
let imagen;

let btnAgregar = document.getElementById("btnAgregar");
let btnEliminar = document.getElementById("btnEliminar");
const imagenValidacion = document.getElementById("imagen");
const iconoImagen = document.querySelector(".btnImagen");

let alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
let alertValidaciones = document.getElementById("alertValidaciones");

let contenedorTarjetas = document.getElementById("contenedorTarjetas");

let datos = JSON.parse(localStorage.getItem("datos")) || []; // aqui se guarda la tabla

let newId = 0;
let isValid = true;
let idTimeout;
let precio = 0;
//sii no hay un objeto en el arreglo del local el id sera 0

if (datos.length === 0) {
  newId = 0;
} else {
  newId = datos.length;
}
console.log(newId);
//imagen en codigo
document.querySelector("#imagen").addEventListener("change", function () {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    imagen = reader.result;
  });
  reader.readAsDataURL(this.files[0]);
}); //imagen codigo

//Delete button
function eliminarCard(event) {
  // Obtener una referencia al elemento padre de la tarjeta que contiene el botón eliminar
  let tarjeta = event.target.closest(".card");
  // Obtener el ID de la tarjeta que se va a eliminar
  let idTarjeta = tarjeta.getAttribute("id");
  // Eliminar la tarjeta del DOM

  // Eliminar la tarjeta de los datos almacenados en el local storage
  let indice = datos.findIndex((elemento) => elemento.id === idTarjeta);
  if (indice !== -1) {
    datos.splice(indice, 1);
    localStorage.setItem("datos", JSON.stringify(datos));
  }
  tarjeta.remove();
}

//Previsualiza la imagen del input
function previewImagen(event) {
  let reader = new FileReader();
  reader.onload = function () {
    let vista_previa = document.getElementById("vista-previa");
    vista_previa.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
} // prevImagen

function validarPrecio() {
  if (precios.value.length == 0) {
    return false;
  }
  if (isNaN(precios.value)) {
    return false;
  }
  if (parseFloat(precios.value) <= 0) {
    return false;
  }
  return true;
}

//VALIDA CAMPOS CON BORDE ROJO  O VERDE
btnAgregar.addEventListener("click", function (event) {
  event.preventDefault();
  isValid = true;
  clearTimeout(idTimeout);
  //quita los textos si se cumple todo
  alertValidacionesTexto.innerHTML = "";
  //quita el se debe escribir.. estableciendolo en none fijo
  alertValidaciones.style.display = "none";
  //   nombre.value = nombre.value.trim(); HACE LO MISMO QUE BLUR
  let lista = "Los siguientes campos deben ser llenados correctamente:<ul>";
  //validacion de campo nombre
  nombre.value.length < 2
    ? ((nombre.style.border = "solid thin red"),
      (lista += "<li>Se debe escribir un nombre de 2 o mas letras</li>"),
      (alertValidaciones.style.display = "block"),
      (isValid = false))
    : (nombre.style.border = "");
  //validacion campo descripcion
  descripcion.value.length < 10
    ? ((descripcion.style.border = "solid thin red"),
      (lista += "<li>Se debe escribir una descripcion mayor a 10 caracteres</li>"),
      (alertValidaciones.style.display = "block"),
      (isValid = false))
    : (descripcion.style.border = "");
  //validacion categoria
  !categoria.value
    ? ((categoria.style.border = "solid thin red"),
      (lista += "<li>Se debe seleccionar una categoria</li>"),
      (alertValidaciones.style.display = "block"),
      (isValid = false))
    : (categoria.style.border = "");
  //validacion imagen
  imagenValidacion.files.length === 0
    ? ((iconoImagen.style.border = "solid thin red"),
      (lista += "<li>Agrega una imagen</li>"),
      (alertValidaciones.style.display = "block"),
      (isValid = false))
    : (iconoImagen.style.border = "");

  //validacion de campo precio
  !validarPrecio()
    ? ((precios.style.border = "solid thin red"),
      (lista += "<li> Se debe escribir una precio valido</li>"),
      (alertValidaciones.style.display = "block"),
      (isValid = false))
    : (precios.style.border = "");

  lista += "</ul>";
  alertValidacionesTexto.insertAdjacentHTML("beforeend", lista);

  idTimeout = setTimeout(() => {
    alertValidaciones.style.display = "none";
  }, 3000);

  if (isValid) {
    newId++;
    let card = `
    <div id="${newId}" class="card m-3 col-sm-4 col-md-4 col-lg-3 col-xl-3 ">
    <img src="${imagen}" alt="img" class="img-fluid fixed-image cardImage">
      <div class="card-body">
        <h5 class="card-title">${nombre.value}</h5>
        <p class="card-price">Precio: ${precios.value}</p>
        <p class="card-text">${descripcion.value}</p>
        <button onclick="eliminarCard(event)" class="btn btn-danger btn-sm" id="btnEliminar">Eliminar</button>
      </div>
    </div>

    `;

    let elemento = `{ 
    "id"          :     "${newId}", 
    "imagen"      :     "${imagen}", 
    "nombre"      :     "${nombre.value}",
    "precio"      :     "${precios.value}",
    "descripcion" :     "${descripcion.value}",
    "categoria"   :     "${categoria.value}"
  }`;

    datos.push(JSON.parse(elemento));
    localStorage.setItem("datos", JSON.stringify(datos));

    contenedorTarjetas.insertAdjacentHTML("beforeend", card);

    descripcion.value = "";
    precios.value = "";
    nombre.value = "";
    document.getElementById("vista-previa").src = "";
    nombre.focus();
    categoria.value = "";
  }
});

// CUANDO TE SALES DEL CAMPO "BLUR" en este caso quita espacios
precios.addEventListener("blur", function (event) {
  event.preventDefault();
  precios.value = precios.value.trim();
  nombre.value = nombre.value.trim();
  descripcion.value = descripcion.value.trim();
});

// carga items al abrir
window.addEventListener("load", function () {
  if (localStorage.getItem("datos") !== null) {
    datos = JSON.parse(localStorage.getItem("datos"));

    datos.forEach((cargado) => {
      let card = `
      <div id="${cargado.id}" class="card m-3 col-sm-4 col-md-4 col-lg-3 col-xl-3 ">
      <img src="${cargado.imagen}" alt="img" class="img-fluid fixed-image cardImage">
        <div class="card-body">
          <h5 class="card-title">${cargado.nombre}</h5>
          <p class="card-price">Precio: ${cargado.precio}</p>
          <p class="card-text">${cargado.descripcion}</p>
          <button onclick="eliminarCard(event)" class="btn btn-danger btn-sm" id="btnEliminar">Eliminar</button>
        </div>
      </div>
    `;

      contenedorTarjetas.insertAdjacentHTML("beforeend", card);
    });
  }
});
