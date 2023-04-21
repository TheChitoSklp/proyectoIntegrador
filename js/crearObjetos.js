const miFormulario = document.getElementById("miFormulario");
const form = document.querySelector("form");
console.log(form);
const productos = JSON.parse(localStorage.getItem("productos")) || [];
const contenedor = document.querySelector("#cartas");
console.log(contenedor);
// const alertValidaciones = document.getElementById("alertValidaciones");
// const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");
// let isValid = true;
//--------------------------------------------------
function mostrarFormulario() {
  const formulario = document.getElementById("miFormulario");
  const boton = document.getElementById("botonAgregar");

  formulario.classList.toggle("d-none");
  formulario.classList.toggle("remove");
  if (formulario.classList.contains("d-none")) {
    boton.innerHTML = "Agregar <i class='bi bi-plus-circle-fill'></i>";
  } else {
    boton.innerHTML = "Cerrar <i class='bi bi-x-circle-fill'></i>";
  }
}
// //-------------validaciones--------------------------
// function validarNombre() {
//   if (form.nombre.value.length < 2) {
//     return false;
//   }
//   return true;
// }
// function validarMensaje() {
//   // .replace quita los espacios
//   if (form.descripcion.value.replace(/\s+/g, "").length < 10) {
//     return false;
//   } else if (form.descripcion.value.length > 160) {
//     return false;
//   } else {
//     return true;
//   }
// }
// function validateImage() {
//   if (!imagen.trim()) {
//     return false;
//   } else if (!/\.(jpg|png|gif)$/i.test(imagen)) {
//     return false;
//   } else {
//     return true;
//   }
// }
// function validatePrice() {
//   if (!form.precio.value.trim()) {
//     return false;
//   } else if (isNaN(form.precio.value) || form.precio.value <= 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

// --------------------------------------------------------

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Evita que el formulario se envíe

  // Obtener los valores de los campos del formulario
  const nombre = form.nombre.value;
  const imagen = form.imagen.files[0];
  const descripcion = form.descripcion.value;
  const precio = form.precio.value;
  const categoria = form.categoria.value;

  // Crear un objeto con los valores del formulario
  const producto = {
    nombre,
    imagen: URL.createObjectURL(imagen),
    descripcion,
    precio,
    categoria,
  };

  // ---------------------------------------------------------------------

  // array de productos del local storage
  let productos = JSON.parse(localStorage.getItem("productos")) || [];

  // Agregar el producto al array
  productos.push(producto);

  // Almacenar el array actualizado en el local storage
  localStorage.setItem("productos", JSON.stringify(productos));

  // Limpiar el contenedor de productos antes de agregar las nuevas tarjetas
  contenedor.innerHTML = "";

  // Crear una tarjeta por cada producto y agregarla al contenedor
  productos.forEach((producto) => {
    // Crear los elementos de la tarjeta
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement("div");
    cardImage.classList.add("image-container");

    const img = document.createElement("img");
    img.src = producto.imagen;
    img.alt = producto.nombre;

    cardImage.appendChild(img); // Agregar imagen a cardImage

    const cardInfo = document.createElement("div");
    cardInfo.classList.add("content-container");

    const h2 = document.createElement("h2");
    h2.textContent = producto.nombre;

    const p = document.createElement("p");
    p.textContent = producto.descripcion;

    const info = document.createElement("div");
    info.classList.add("info");

    const spanPrecio = document.createElement("span");
    spanPrecio.classList.add("precio");
    spanPrecio.textContent = `$${producto.precio}`;

    const spanCategoria = document.createElement("span");
    spanCategoria.classList.add("categoria");
    spanCategoria.textContent = producto.categoria;

    info.appendChild(spanPrecio);
    info.appendChild(spanCategoria);

    cardInfo.appendChild(h2);
    cardInfo.appendChild(p);
    cardInfo.appendChild(info);

    // Crear el botón de eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X";
    botonEliminar.classList.add("delete");
    botonEliminar.addEventListener("click", () => {
      // Encontrar el índice del objeto que deseas eliminar
      let index;
      for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre === producto.nombre) {
          index = i;
          break;
        }
      }
      // Eliminar el objeto del arreglo en el índice encontrado
      productos.splice(index, 1);
      // Actualizar el Local Storage con el arreglo actualizado
      localStorage.setItem("productos", JSON.stringify(productos));
      // Eliminar la tarjeta del contenedor
      card.remove();
    });

    // Agregar los elementos a la tarjeta
    card.appendChild(cardImage);
    card.appendChild(cardInfo);
    card.appendChild(botonEliminar);

    // Agregar la tarjeta al contenedor
    contenedor.appendChild(card);
  });

  // Limpiar el formulario
  form.reset();
});
