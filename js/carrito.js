const generarPdfBtn = document.querySelector("#generar-pdf");

//tabla
carritoCantidadProductos.forEach((objeto, index) => {
  let fila =
    `<tr id='${objeto.id}'><td>` +
    (index + 1) +
    `</td><td>` +
    objeto.nombre +
    `</td><td>` +
    objeto.precio +
    `</td><td><button type='button' class='btn' onclick='borrarProducto(event)'>
    <i class='bi bi-trash3'></i></button></td></tr>`;

  tabla.innerHTML += fila;
});
//totl producto
let carritoPrecioTotal = 0;
carritoCantidadProductos.forEach((producto) => {
  let precio = parseFloat(producto.precio);
  carritoPrecioTotal += precio;
});
precioTotal.textContent = `$${carritoPrecioTotal.toFixed(2)}`;

carritoCantidadProductos.forEach((objeto, index) => {
  let fila =
    `<tr id='${objeto.id}'><th>` +
    (index + 1) +
    `</th><td>` +
    objeto.nombre +
    `</td><td>` +
    objeto.precio;

  tablaBody.innerHTML += fila;
});
let celularVendedora = "Numero de contacto vendedora: 315 124 4567";
let totalPdf = `
<tr>
<td>
</td>
<td>
</td>
<td id="totalTablaOculta">Total $${carritoPrecioTotal.toFixed(2)}</td>
</tr>
<tr>
<td>${celularVendedora}</td>
</tr>
`;

tablaBody.innerHTML += totalPdf;

function generarPDF() {
  window.print();
}

//boton eliminar
function borrarProducto(eliminar) {
  let producto = eliminar.target.closest("tr");
  let idProducto = producto.getAttribute("id");

  let productoCarritoId = carritoCantidadProductos.findIndex(
    (elemento) => elemento.id === idProducto
  );
  let nuevoPrecio = 0;

  if (productoCarritoId !== -1) {
    carritoCantidadProductos.splice(productoCarritoId, 1);
    localStorage.setItem("carrito", JSON.stringify(carritoCantidadProductos));

    producto.remove();

    carritoCantidadProductos.forEach((producto) => {
      let precio = parseFloat(producto.precio);
      nuevoPrecio += precio;
    });

    carritoNumeroMobile.innerText = carritoCantidadProductos.length;
    carritoNumero.innerText = carritoCantidadProductos.length;
  }
  precioTotal.textContent = `$${nuevoPrecio.toFixed(2)}`;

  function recargarTablaOculta() {
    tablaBody.innerHTML = ``;
    let carritoLocalStorage = JSON.parse(localStorage.getItem("carrito")) || [];

    carritoLocalStorage.forEach((objeto, index) => {
      let fila =
        `<tr id='${objeto.id}'><th>` +
        (index + 1) +
        `</th><td>` +
        objeto.nombre +
        `</td><td>` +
        objeto.precio;

      tablaBody.innerHTML += fila;
    });
    let celularVendedora = "Numero de contacto vendedora: 315 124 4567";
    let totalPdf = `
    <tr>
    <td>
    </td>
    <td>
    </td>
    <td id="totalTablaOculta">Total $${nuevoPrecio.toFixed(2)}</td>
    </tr>
    <tr>
    <td>${celularVendedora}</td>
    </tr>
    `;

    tablaBody.innerHTML += totalPdf;
  }
  recargarTablaOculta();
}
