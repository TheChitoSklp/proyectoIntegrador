let body = document.getElementsByTagName("body");
let carritoCantidadProductos = JSON.parse(localStorage.getItem("carrito")) || [];

const Navbar = `  
 <!-- Navbar de arriba -->
<nav class="navbar fixedTop" style="--bs-navbar-padding-x: none;">
  <div class="container-fluid">
    <ul class="navbar-nav row">
      <li class="nav-item col">
        <a class="navbar-brand m-0" href="index.html"
          ><img src="./src/icons/logoIpnTrans.png" class="logoIpn"  /></a
        >
    <li class="nav-item col">
        <a class="nav-link " aria-current="page" href="index.html">Inicio</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link " aria-current="page" href="categorias.html" >Categorías</a >
      </li>
      <li class="nav-item col">
        <a class="nav-link " href="ofertas.html">Promociones</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link " href="conocenos.html">Conócenos</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link " href="acercaDeCliente.html">Acerca de cliente</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link " href="acercaDeEquipo.html">Acerca de equipo</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link " href="contacto.html">Contáctanos</a>
      </li>

      <li class="nav-item col px-2 iconosCarritoLogin">
        
        <a  class="nav-link" href="carrito.html">
          <i  class="bi bi-cart3 fs-3"> 
          </i>
          
        <span id="carritoNumero"></span></a>
        
        <a class="nav-link ms-4" href="login.html">
          <i class="bi bi-person-fill fs-2"></i></a>
      </li>
    </ul>
    <section class="hideForm p-3">
      <div class="d-flex" role="search">
        <input
          id="search"
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button onclick="buscar()" class="btn btn-outline-light" type="submit">Search</button>
      </div>
    </section>
  </div>
</nav>
<!-- Navbar de mobile abajo -->
<nav class="navbar fixed-bottom hideNavbarMobile">
  <div class="container-fluid">
    <a class="navbar-brand m-0" href="index.html"
      ><img src="./src/icons/HOME 2.png" alt=""
    /></a>
    <a id="carritoNumeroCelular" class="navbar-brand m-0" href="carrito.html"
      ><img  src="./src/icons/carritoB.png" alt=""
    /> <span id="carritoNumeroMobile"></span></a>
    <a class="navbar-brand m-0" href="login.html"
      ><img src="./src/icons/login.png" alt=""
    /></a>

    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasDarkNavbar"
      aria-controls="offcanvasDarkNavbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasDarkNavbar"
      aria-labelledby="offcanvasDarkNavbarLabel"
    >
      <div class="offcanvas-header">

      <a class="navbar-brand m-0" href="index.html"
        ><img src="./src/icons/logoIpnTrans.png" class="logoIpn" alt= /></a
      >
   
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <ul class="justify-content-end flex-grow-1 pe-3">
          <li class="nav-item navList">
            <a class="nav-link" href="categorias.html">
              <h3>Categorías</h3>
            </a>
          </li>
          <li class="nav-item navList">
            <a class="nav-link" href="ofertas.html">
              <h3>Promociones</h3>
            </a>
          </li>
          <li class="nav-item navList">
            <a class="nav-link" href="conocenos.html">
              <h3>Conócenos</h3>
            </a>
          </li>
          <li class="nav-item navList">
            <a class="nav-link" href="acercaDeCliente.html">
              <h3>Acerca de cliente</h3>
            </a>
          </li>
          <li class="nav-item navList">
            <a class="nav-link" href="./acercaDeEquipo.html">
              <h3>Acerca de equipo</h3>
            </a>
          </li>
          <li class="nav-item navList">
            <a class="nav-link" href="contacto.html">
              <h3>Contáctanos</h3>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>`;

body[0].insertAdjacentHTML("afterbegin", Navbar);

function buscarEnLocalStorage(search) {
  const resultados = [];
  const searchMinusculas = search.toLowerCase();

  datos.forEach((dato) => {
    const nombreMinusculas = dato.nombre.toLowerCase();
    if (nombreMinusculas.includes(searchMinusculas)) {
      resultados.push(dato);
    }
  });

  return resultados;
}
function buscar() {
  const search = document.getElementById("search").value;
  const resultados = buscarEnLocalStorage(search);
  contenedorTarjetas.innerHTML = "";
  resultados.forEach((objeto) => {
    let card = `
    <div id="${objeto.id}" class="card m-3 col-sm-4 col-md-4 col-lg-3 col-xl-3 ">
    <img src="${objeto.imagen}" alt="img" class="img-fluid fixed-image cardImage">
      <div class="card-body">
        <h5 class="card-title">${objeto.nombre}</h5>
        <p class="card-price">Precio: ${objeto.precio}</p>
        <p class="card-text">${objeto.descripcion}</p>
        <a class="popover-btn">Leer más </a>
        <section class="popover">
        <h3>
        ${objeto.nombre}
        </h3>
        <span>
        Precio: <strong>${objeto.precio}</strong>
        </span>
        <p>
        ${objeto.descripcion}
        </p>
        </section>
        <button onclick="eliminarCard(event)" class="btn btn-danger btn-sm" id="btnEliminar">Eliminar</button>
      </div>
    </div>
  `;
    contenedorTarjetas.insertAdjacentHTML("beforeend", card);
  });
}

function eliminarPoper(event) {
  event.preventDefault();
  let poper = event.target.closest(".popover");
  poper.style.display = "none";
}

carritoNumero.innerText = carritoCantidadProductos.length;
carritoNumeroMobile.innerText = carritoCantidadProductos.length;

// Primero, crea un array vacío llamado 'carrito'
let carritos = JSON.parse(localStorage.getItem("carrito")) || [];
let contador = carritoCantidadProductos.length;
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
