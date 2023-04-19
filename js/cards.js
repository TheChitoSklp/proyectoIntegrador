let producto = [
    {
      nombre: "Camiseta blanca",
      img: "",
      descripcion: "Camiseta de algodón 100% en color blanco, talla M.",
      precio: 20.99,
    },
    {
      nombre: "Pantalones vaqueros",
      img: "",
      descripcion: "Pantalones vaqueros clásicos en color azul, talla L.",
      precio: 39.99,
    },
    {
      nombre: "Zapatillas deportivas",
      img: "",
      descripcion: "Zapatillas deportivas en color negro con suela de goma, talla 42.",
      precio: 59.99,
    },
    {
      nombre: "Chaqueta de cuero",
      img: "",
      descripcion: "Chaqueta de cuero auténtico en color marrón, talla XL.",
      precio: 149.99,
    },
    {
      nombre: "Vestido estampado",
      img: "",
      descripcion: "Vestido corto estampado en tonos azules, talla S.",
      precio: 29.99,
    },
    {
      nombre: "Bolso de mano",
      img: "",
      descripcion: "Bolso de mano en piel sintética en color rosa, con cierre de cremallera.",
      precio: 24.99,
    },
    {
      nombre: "Pulsera de plata",
      img: "",
      descripcion: "Pulsera de plata de ley con diseño de cadena.",
      precio: 69.99,
    },
    {
      nombre: "Sombrero de paja",
      img: "",
      descripcion: "Sombrero de paja con ala ancha en color natural.",
      precio: 12.99,
    },
    {
      nombre: "Gafas de sol",
      img: "",
      descripcion: "Gafas de sol con montura de pasta en color negro y cristales oscuros.",
      precio: 19.99,
    },
    {
      nombre: "Reloj de pulsera",
      img: "",
      descripcion: "Reloj de pulsera con correa de cuero marrón y esfera plateada.",
      precio: 89.99,
    },
  ];

const cardsContainer = document.getElementById("cartas");

function getProducto() {


            producto.forEach(producto => {
                const card = document.createElement("div");
                card.classList.add("card");
            
                const image = document.createElement("img");
                image.src = producto.img;
                image.alt = producto.nombre;
            
                const title = document.createElement("h2");
                title.textContent = producto.nombre;
            
                const category = document.createElement("h4")
                category.textContent = producto.category;
            
                const price = document.createElement("p");
                price.textContent = `$${producto.precio}`;
            
                const description = document.createElement("p");
                description.textContent = producto.descripcion.slice(0,100) +"...";
            
                card.appendChild(image);
                card.appendChild(title);
                card.appendChild(price);
                card.appendChild(description);
                card.appendChild(category);
            
                cardsContainer.appendChild(card);
            
            });
}

getProducto()