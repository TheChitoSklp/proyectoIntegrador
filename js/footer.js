let articulos = [
  {
    nombre: "Rimel",
    imagen:
      "https://img.ltwebstatic.com/gspCenter/goodsImage/2023/4/8/5070517430_1067621/EEBC43B39C7169D2C625CCA70BD215D0_thumbnail_600x.jpg",
    categoria: "maquillaje",
    descripcion:
      "Producto en forma de tubo que contiene una fórmula especial diseñada para alargar, dar volumen y definir tus pestañas.",
    precio: 20.99,
    id: 1,
  },
  {
    nombre: "Tennis",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2023/03/01/1677686143df9f5fdb0c996411e4e8f6b61297c2c1_thumbnail_600x.webp",
    categoria: "calzado",
    descripcion:
      "Calzado diseñado específicamente para practicar deportes y actividades físicas.",
    precio: 39.99,
    id: 2,
  },
  {
    nombre: "Zapatillas deportivas",
    imagen: "https://http2.mlstatic.com/D_NQ_NP_623834-CBT51381245554_092022-O.jpg",
    categoria: "calzado",
    descripcion: "Zapatillas deportivas en color negro con suela de goma, talla 42.",
    precio: 59.99,
    id: 3,
  },
  {
    nombre: "Sudadera blanca",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2021/08/10/16285597094805f22dd2451606ed90916df7e3e234_thumbnail_600x.webp",
    categoria: "vestimenta",
    descripcion:
      "Prenda de ropa informal y relajada que se puede usar en una gran variedad de situaciones, desde salir a dar un paseo hasta relajarse en casa.",
    precio: 149.99,
    id: 4,
  },
  {
    nombre: "Tanga abierta",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2021/05/06/1620274047fcdcd3894a94eb7dce4cd37148b0e6dc_thumbnail_600x.webp",
    categoria: "sexshop",
    descripcion:
      "Ropa interior femenina que se caracteriza por tener una banda estrecha en la parte inferior que se ajusta a la cintura y una tira de tela que va desde la parte trasera de la banda hasta la parte inferior delantera.",
    precio: 29.99,
    id: 5,
  },
  {
    nombre: "Collar de Estrellas",
    imagen:
      "https://d2r9epyceweg5n.cloudfront.net/stores/339/933/products/estrellaswandy1-1bfa4d4dc9d25cc7b216173187420689-1024-1024.jpg",
    categoria: "accesorios",
    descripcion:
      "Hermosa pieza de joyería que está diseñada para lucir como un cielo lleno de estrellas en tu cuello.",
    precio: 24.99,
    id: 6,
  },
  {
    nombre: "Collar de Luna",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2020/10/30/1604037934f91750c5cb8970f852a55ce2057865d4_thumbnail_600x.webp",
    categoria: "accesorios",
    descripcion:
      "Hermosa pieza de joyería que está diseñada para lucir como un cielo lleno de estrellas en tu cuello.",
    precio: 69.99,
    id: 7,
  },
  {
    nombre: "Limpiador nasal",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2023/03/24/1679653476a851cbc4a680baa3813b76a1cac5a1ab_thumbnail_600x.webp",
    categoria: "varios",
    descripcion:
      "Dispositivo diseñado para ayudar a limpiar y despejar las fosas nasales, lo que puede mejorar la respiración y reducir la congestión nasal. ",
    precio: 12.99,
    id: 8,
  },
  {
    nombre: "Contenedor de cuchillas usadas",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2022/06/11/1654912663faf69ee313df2c0e73b2785fba9148f4_thumbnail_600x.webp",
    categoria: "varios",
    descripcion:
      "Almacena de manera segura y adecuada cuchillas de afeitar, bisturíes u otras herramientas filosas después de su uso.",
    precio: 19.99,
    id: 9,
  },
  {
    nombre: "Mochila rana para perro",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2022/05/30/16538875292fe7e04d9f7a3b21834e4d556e8d4825_thumbnail_600x.webp",
    categoria: "mascotas",
    descripcion:
      "Está hecha de materiales resistentes y duraderos para soportar el peso de tu mascota, así como también para resistir las condiciones climáticas del exterior.",
    precio: 89.99,
    id: 10,
  },
  {
    nombre: "Paleta de maquillaje",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2023/03/27/167990464132244cacc7f43b1202b3bceb76dfae2f_thumbnail_600x.webp",
    categoria: "maquillaje",
    descripcion:
      "Contiene múltiples colores y texturas de maquillaje para ojos, labios y mejillas.",
    precio: 20.99,
    id: 11,
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
    nombre: "Sudadera roja",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2023/03/30/1680156796f0eae4cac4252654b3cd33a529a873e4_thumbnail_600x.webp",
    categoria: "vestimenta",
    descripcion:
      "Proporciona calor y confort en climas frescos, gracias a su tela suave y cálida, generalmente de algodón o poliéster.",
    precio: 149.99,
    id: 14,
  },
  {
    nombre: "Micro tanga",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2021/09/17/1631866460846e1f19b37f15934839785e15461d17_thumbnail_600x.webp",
    categoria: "sexshop",
    descripcion:
      "El tanga está diseñado para ser cómodo y no dejar marcas visibles bajo la ropa ajustada. ",
    precio: 29.99,
    id: 15,
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
    categoria: "varios",
    descripcion: "Sombrero de paja con ala ancha en color natural.",
    precio: 12.99,
    id: 18,
  },
  {
    nombre: "Gafas de sol",
    imagen:
      "https://resources.sanborns.com.mx/imagenes-sanborns-ii/1200/8053672495652.jpg?scale=350",
    categoria: "varios",
    descripcion: "Gafas de sol con montura de pasta en color negro y cristales oscuros.",
    precio: 19.99,
    id: 19,
  },
  {
    nombre: "Ropa de rana para gato",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2022/09/15/16632384464048226aa13ef87d5287e98f55749d06_thumbnail_600x.webp",
    categoria: "mascotas",
    descripcion:
      "Hecha de materiales suaves y cómodos que no irritan la piel de tu mascota, como algodón, lana o fibras sintéticas. ",
    precio: 89.99,
    id: 20,
  },
];

// Varible que trae main del html
let main = document.getElementsByTagName("main");
//Variable que crea el footer
const footer = `
<footer class="container-fluid footerContainer">
  <section class="row">
    <span class="card-header col-6">Derechos Reservados© IPN GIRL SHOPPING®</span>
    <div class="liksFooter col-6">
      <a href="https://www.facebook.com/" target="_blank" 
        ><i class="yhover bi bi-facebook text-light fs-2"></i
      ></a>
      <a href="https://www.instagram.com/" target="_blank" 
        ><i class="yhover bi bi-instagram text-light fs-2"></i
      ></a>
      <a href="https://wa.me/3121253865/" target="_blank" 
        ><i class="yhover bi bi-whatsapp text-light fs-2"></i
      ></a>
    </div>
  </section>
</footer>`;
// Se le inserta el footer despues de terminar el main
main[0].insertAdjacentHTML("afterend", footer);
