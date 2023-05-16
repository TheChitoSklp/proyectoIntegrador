let contenedorTarjetas = document.getElementById("contenedorTarjetas");

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
            <div>
            <div>
            <p class="card-text">${cargado.descripcion}</p>
            <button class="popover-btn">Leer más </button>
            <button  onclick="agregarProducto(event)" class="btn carritoBoton"><i class="bi bi-cart-plus fs-4"></i></button>
            <section class="popover">
            <h3>
            ${cargado.nombre}
            </h3>
            <span>
            Precio: <strong>${cargado.precio}</strong>
            </span>
            <p>
            ${cargado.descripcion}
            </p>
            <button onclick="eliminarPoper(event)" class="" id="btnPoper"><i class="bi bi-x-circle fs-5"></i></button>
            </section>
            </div>
          </div>
        </div>
      `;

      contenedorTarjetas.insertAdjacentHTML("beforeend", card);
    });
  }
  let buttons = document.querySelectorAll(".popover-btn");
  let popovers = document.querySelectorAll(".popover");

  buttons.forEach(function (button, index) {
    let popover = popovers[index];
    button.addEventListener("click", function () {
      popover.style.display = "block";
    });
  });

  document.addEventListener("click", function (event) {
    buttons.forEach(function (button, index) {
      let popover = popovers[index];
      if (!button.contains(event.target) && !popover.contains(event.target)) {
        popover.style.display = "none";
      }
    });
  });
});
articulos.forEach((cargado) => {
  let card = `
    <div id="${cargado.id}" class="card m-3 col-sm-4 col-md-4 col-lg-3 col-xl-3 ">
    <img src="${cargado.imagen}" alt="img" class="img-fluid fixed-image cardImage">
      <div class="card-body">
        <h5 class="card-title">${cargado.nombre}</h5>
        <p class="card-price">Precio: ${cargado.precio}</p>
        <div>
        <div>
        <p class="card-text">${cargado.descripcion}</p>
        <button class="popover-btn">Leer más </button>
        <button  onclick="agregarProducto(event)" class="btn carritoBoton"><i class="bi bi-cart-plus fs-4"></i></button>
        <section class="popover">
        <h3>
        ${cargado.nombre}
        </h3>
        <span>
        Precio: <strong >${cargado.precio}</strong>
        </span>
        <p>
        ${cargado.descripcion}
        </p>
        <button onclick="eliminarPoper(event)" class="" id="btnPoper"><i class="bi bi-x-circle fs-5"></i></button>
        </section>
        </div>
      </div>
    </div>
  `;

  contenedorTarjetas.insertAdjacentHTML("beforeend", card);
});

// Primero, crea un array vacío llamado 'carrito'
let carritos = JSON.parse(localStorage.getItem("carrito")) || [];
let contador = carritoCantidadProductos.length;

// Luego, define la función 'agregarProducto'
function agregarProducto(event) {
  // Obtén el ID del producto que se agregó al carrito
  let idProducto = event.target.closest(".card").id;
  contador++;
  carritoNumero.innerText = contador;
  carritoNumeroMobile.innerText = contador;
  if (idProducto.length > 12) {
    // Busca el objeto correspondiente en el array 'articulos'
    let producto = datos.find((item) => item.id == idProducto);

    // Crea un objeto con el nombre y precio del producto
    let productoCarrito = {
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
    };

    // Agrega el objeto al array 'carrito'
    carritos.push(productoCarrito);
  } else {
    // Busca el objeto correspondiente en el array 'articulos'
    let producto = articulos.find((item) => item.id == idProducto);

    // Crea un objeto con el nombre y precio del producto
    let productoCarrito = {
      id: producto.id.toString(),
      nombre: producto.nombre,
      precio: producto.precio,
    };

    // Agrega el objeto al array 'carrito'
    carritos.push(productoCarrito);
  }

  // Puedes mostrar un mensaje al usuario para indicar que el producto se agregó al carrito
  localStorage.setItem("carrito", JSON.stringify(carritos));

  // Aquí podrías actualizar la interfaz de usuario para reflejar los cambios en el carrito
}
