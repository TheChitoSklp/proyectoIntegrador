let articulos = [
  {
    nombre: "Camiseta blanca",
    imagen:
      "https://img.freepik.com/vector-premium/maqueta-delantera-trasera-camiseta-blanca_6735-271.jpg",
    categoria: "vestimenta",
    descripcion: "Camiseta de algodón 100% en color blanco, talla M.",
    precio: 20.99,
    id: 1,
  },
  {
    nombre: "Pantalones vaqueros",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_940477-CBT45834105633_052021-O.jpg",
    categoria: "vestimenta",
    descripcion: "Pantalones vaqueros clásicos en color azul, talla L.",
    precio: 39.99,
    id: 2,
  },
  {
    nombre: "Zapatillas deportivas",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_623834-CBT51381245554_092022-O.jpg",
    categoria: "Calzado",
    descripcion: "Zapatillas deportivas en color negro con suela de goma, talla 42.",
    precio: 59.99,
    id: 3,
  },
  {
    nombre: "Chaqueta de cuero",
    imagen:
      "https://media.gq.com.mx/photos/6005e3385939635761c3cd62/master/w_2333,h_3000,c_limit/Chaqueta%20biker%20de%20cuero%20falso%20con%20cinturo%CC%81n%20Pull&Bear.jpg",
    categoria: "vestimenta",
    descripcion: "Chaqueta de cuero auténtico en color marrón, talla XL.",
    precio: 149.99,
    id: 4,
  },
  {
    nombre: "Vestido estampado",
    imagen:
      "https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/11/02/goods-first-img/1512065085087668075.jpg?imbypass=true",
    categoria: "vestimenta",
    descripcion: "Vestido corto estampado en tonos azules, talla S.",
    precio: 29.99,
    id: 5,
  },
  {
    nombre: "Bolso de mano",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_899034-MLM43282982078_082020-O.jpg",
    categoria: "accesorios",
    descripcion: "Bolso de mano en piel sintética en color rosa, con cierre de cremallera.",
    precio: 24.99,
    id: 6,
  },
  {
    nombre: "Pulsera de plata",
    imagen:
      "https://cdn.shopify.com/s/files/1/0012/5662/0117/products/8-2_777abadc-4889-44d7-bb79-9ef723719cbd_3000x.jpg?v=1673890131",
    categoria: "accesorios",
    descripcion: "Pulsera de plata de ley con diseño de cadena.",
    precio: 69.99,
    id: 7,
  },
  {
    nombre: "Sombrero de paja",
    imagen: "https://m.media-amazon.com/images/I/71+NfoDah8L._AC_SX425_.jpg",
    categoria: "accesorios",
    descripcion: "Sombrero de paja con ala ancha en color natural.",
    precio: 12.99,
    id: 8,
  },
  {
    nombre: "Gafas de sol",
    imagen:
      "https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/8053672495652.jpg?scale=350",
    categoria: "accesorios",
    descripcion: "Gafas de sol con montura de pasta en color negro y cristales oscuros.",
    precio: 19.99,
    id: 9,
  },
  {
    nombre: "Reloj de pulsera",
    imagen: "https://i.pinimg.com/474x/7c/e9/d1/7ce9d1c4bf1f017cc6face4b37de62cd.jpg",
    categoria: "accesorios",
    descripcion: "Reloj de pulsera con correa de cuero marrón y esfera plateada.",
    precio: 89.99,
    id: 10,
  },
  {
    nombre: "Camiseta blanca",
    imagen:
      "https://img.freepik.com/vector-premium/maqueta-delantera-trasera-camiseta-blanca_6735-271.jpg",
    categoria: "vestimenta",
    descripcion: "Camiseta de algodón 100% en color blanco, talla M.",
    precio: 20.99,
    id: 11,
  },
  {
    nombre: "Pantalones vaqueros",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_940477-CBT45834105633_052021-O.jpg",
    categoria: "vestimenta",
    descripcion: "Pantalones vaqueros clásicos en color azul, talla L.",
    precio: 39.99,
    id: 12,
  },
  {
    nombre: "Zapatillas deportivas",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_623834-CBT51381245554_092022-O.jpg",
    categoria: "Calzado",
    descripcion: "Zapatillas deportivas en color negro con suela de goma, talla 42.",
    precio: 59.99,
    id: 13,
  },
  {
    nombre: "Chaqueta de cuero",
    imagen:
      "https://media.gq.com.mx/photos/6005e3385939635761c3cd62/master/w_2333,h_3000,c_limit/Chaqueta%20biker%20de%20cuero%20falso%20con%20cinturo%CC%81n%20Pull&Bear.jpg",
    categoria: "vestimenta",
    descripcion: "Chaqueta de cuero auténtico en color marrón, talla XL.",
    precio: 149.99,
    id: 14,
  },
  {
    nombre: "Vestido estampado",
    imagen:
      "https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/11/02/goods-first-img/1512065085087668075.jpg?imbypass=true",
    categoria: "vestimenta",
    descripcion: "Vestido corto estampado en tonos azules, talla S.",
    precio: 29.99,
    id: 15,
  },
  {
    nombre: "Bolso de mano",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_899034-MLM43282982078_082020-O.jpg",
    categoria: "accesorios",
    descripcion: "Bolso de mano en piel sintética en color rosa, con cierre de cremallera.",
    precio: 24.99,
    id: 16,
  },
  {
    nombre: "Pulsera de plata",
    imagen:
      "https://cdn.shopify.com/s/files/1/0012/5662/0117/products/8-2_777abadc-4889-44d7-bb79-9ef723719cbd_3000x.jpg?v=1673890131",
    categoria: "accesorios",
    descripcion: "Pulsera de plata de ley con diseño de cadena.",
    precio: 69.99,
    id: 17,
  },
  {
    nombre: "Sombrero de paja",
    imagen: "https://m.media-amazon.com/images/I/71+NfoDah8L._AC_SX425_.jpg",
    categoria: "accesorios",
    descripcion: "Sombrero de paja con ala ancha en color natural.",
    precio: 12.99,
    id: 18,
  },
  {
    nombre: "Gafas de sol",
    imagen:
      "https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/8053672495652.jpg?scale=350",
    categoria: "accesorios",
    descripcion: "Gafas de sol con montura de pasta en color negro y cristales oscuros.",
    precio: 19.99,
    id: 19,
  },
  {
    nombre: "Reloj de pulsera",
    imagen: "https://i.pinimg.com/474x/7c/e9/d1/7ce9d1c4bf1f017cc6face4b37de62cd.jpg",
    categoria: "accesorios",
    descripcion: "Reloj de pulsera con correa de cuero marrón y esfera plateada.",
    precio: 89.99,
    id: 20,
  },
];

let elemento = `[{ 
  "id"          :     "${timestamp}", 
  "imagen"      :     "${imagen}", 
  "nombre"      :     "${nombre.value}",
  "precio"      :     "${precios.value}",
  "descripcion" :     "${descripcion.value}",
  "categoria"   :     "${categoria.value}"
}`;
const cardsContainer = document.getElementById("cartas");
function getProducto() {
  articulos.forEach((articulos) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = articulos.img;
    image.alt = articulos.nombre;
    image.setAttribute("id", "imagenesCards");

    const title = document.createElement("h2");
    title.textContent = articulos.nombre;
    title.setAttribute("id", "tituloCards");

    const category = document.createElement("h4");
    category.textContent = articulos.categoria;

    const price = document.createElement("span");
    price.textContent = `$${articulos.precio}`;

    const description = document.createElement("p");
    description.textContent = articulos.descripcion.slice(0, 100) + "...";

    const divButton = document.createElement("div");
    divButton.classList.add("divButton");
    divButton.innerHTML = `
                <div>
                  <!-- Button trigger modal -->
                  <button type="button" class="btn btn-primary" 
                  data-bs-toggle="modal" 
                  data-bs-target="#exampleModal_${articulos.id}">
                    Mas Info
                  </button>
                </div>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal_${articulos.id}" 
                tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">${articulos.nombre}</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <img src="${articulos.img}" class="imgPrincipal" alt="yo">
                        <p> ${articulos.descripcion}  Descripcion Muy muy muy larga
                        </p>
                        <span>$ ${articulos.precio}</span> 
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-secondary" >Agregar al carrito</button>
                      </div>
                    </div>
                  </div>
                </div>

                `; //TerminaModal

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(description);
    card.appendChild(category);
    card.appendChild(divButton); //Agrego modal

    cardsContainer.appendChild(card);
  });
}

getProducto();
