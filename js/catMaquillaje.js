let contenedorTarjetas = document.getElementById("contenedorTarjetas");

window.addEventListener("load", function () {
  if (localStorage.getItem("datos") !== null) {
    datos = JSON.parse(localStorage.getItem("datos"));

    datos
      .filter((item) => item.categoria === "maquillaje")
      .forEach((cargado) => {
        let card = `
        <div id="${cargado.id}" class="card m-3 col-sm-4 col-md-4 col-lg-3 col-xl-3 ">
        <img src="${cargado.imagen}" alt="img" class="img-fluid fixed-image cardImage">
          <div class="card-body">
            <h5 class="card-title">${cargado.nombre}</h5>
            <p class="card-price">Precio: ${cargado.precio}</p>
            <p class="card-text">${cargado.descripcion}</p>
          </div>
        </div>
      `;

        contenedorTarjetas.insertAdjacentHTML("beforeend", card);
      });
  }
});
