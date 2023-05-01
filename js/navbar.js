let body = document.getElementsByTagName("body");

const Navbar = `  
 <!-- Navbar de arriba -->
<nav class="navbar fixedTop">
  <div class="container-fluid">
    <ul class="navbar-nav row">
      <li class="nav-item col">
        <a class="navbar-brand m-0" href="index.html"
          ><img src="./src/icons/logoIpn.png" class="logoIpn" alt= /></a
        >
      </li>
      <li class="nav-item col">
        <a class="nav-link fs-5" aria-current="page" href="categorias.html"
          >Categorías</a
        >
      </li>
      <li class="nav-item col">
        <a class="nav-link fs-5" href="ofertas.html">Promociones</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link fs-5" href="conocenos.html">Conócenos</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link fs-5" href="acercaDeCliente.html">Acerca de cliente</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link fs-5" href="acercaDeEquipo.html">Acerca de equipo</a>
      </li>
      <li class="nav-item col">
        <a class="nav-link fs-5" href="contacto.html">Contáctanos</a>
      </li>

      <li class="nav-item col iconosCarritoLogin">
        <a class="nav-link" href="carrito.html">
          <i class="bi bi-cart3 fs-2"> </i
        ></a>
        <a class="nav-link" href="login.html"
          ><i class="bi bi-person-fill fs-2"></i
        ></a>
      </li>
    </ul>
    <section class="hideForm p-3">
      <div class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-light" type="submit">Search</button>
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
    <a class="navbar-brand m-0" href="carrito.html"
      ><img src="./src/icons/carritoB.png" alt=""
    /></a>
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
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
          <img src="./src/icons/logoIpn.jpg" class="logoIpn" alt="" />
        </h5>
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
