let articulos = [
  {
    nombre: "Camiseta blanca",
    imagen:
      "https://img.ltwebstatic.com/gspCenter/goodsImage/2023/4/8/5070517430_1067621/EEBC43B39C7169D2C625CCA70BD215D0_thumbnail_600x.jpg",
    categoria: "maquillaje",
    descripcion:
      "Camiseta de algodón 100% en color blanco, talla M. Camiseta de algodón 100% en color blanco, talla M. Camiseta de algodón 100% en color blanco, talla M.",
    precio: 20.99,
    id: 1,
  },
  {
    nombre: " tennis",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2023/03/01/1677686143df9f5fdb0c996411e4e8f6b61297c2c1_thumbnail_600x.webp",
    categoria: "calzado",
    descripcion:
      "Pantalones vaqueros clásicos en color azul, talla L. vaqueros clásicos en color azul, talla L. vaqueros clásicos en color azul, talla L.",
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
    nombre: "Chaqueta de cuero",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2021/08/10/16285597094805f22dd2451606ed90916df7e3e234_thumbnail_600x.webp",
    categoria: "vestimenta",
    descripcion: "Chaqueta de cuero auténtico en color marrón, talla XL.",
    precio: 149.99,
    id: 4,
  },
  {
    nombre: "Vestido estampado",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2021/05/06/1620274047fcdcd3894a94eb7dce4cd37148b0e6dc_thumbnail_600x.webp",
    categoria: "sexshop",
    descripcion: "Vestido corto estampado en tonos azules, talla S.",
    precio: 29.99,
    id: 5,
  },
  {
    nombre: "Bolso de mano",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2021/04/09/1617949977d6f35c3bcbad225c84b6179c59137a2f_thumbnail_600x.webp",
    categoria: "accesorios",
    descripcion: "Bolso de mano en piel sintética en color rosa, con cierre de cremallera.",
    precio: 24.99,
    id: 6,
  },
  {
    nombre: "Pulsera de plata",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2020/10/30/1604037934f91750c5cb8970f852a55ce2057865d4_thumbnail_600x.webp",
    categoria: "accesorios",
    descripcion: "Pulsera de plata de ley con diseño de cadena.",
    precio: 69.99,
    id: 7,
  },
  {
    nombre: "Sombrero de paja",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2023/03/24/1679653476a851cbc4a680baa3813b76a1cac5a1ab_thumbnail_600x.webp",
    categoria: "varios",
    descripcion: "Sombrero de paja con ala ancha en color natural.",
    precio: 12.99,
    id: 8,
  },
  {
    nombre: "Gafas de sol",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2022/06/11/1654912663faf69ee313df2c0e73b2785fba9148f4_thumbnail_600x.webp",
    categoria: "varios",
    descripcion: "Gafas de sol con montura de pasta en color negro y cristales oscuros.",
    precio: 19.99,
    id: 9,
  },
  {
    nombre: "Reloj de pulsera",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2022/05/30/16538875292fe7e04d9f7a3b21834e4d556e8d4825_thumbnail_600x.webp",
    categoria: "mascotas",
    descripcion: "Reloj de pulsera con correa de cuero marrón y esfera plateada.",
    precio: 89.99,
    id: 10,
  },
  {
    nombre: "Camiseta blanca",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2023/03/27/167990464132244cacc7f43b1202b3bceb76dfae2f_thumbnail_600x.webp",
    categoria: "maquillaje",
    descripcion:
      "Camiseta de algodón 100% en color blanco, talla M. Camiseta de algodón 100% en color blanco, talla M. Camiseta de algodón 100% en color blanco, talla M.",
    precio: 20.99,
    id: 11,
  },
  {
    nombre: "tenis mas pro",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2023/04/10/168110861207dbd0cb833e14b7d4d4adc41fe9626d_thumbnail_600x.webp",
    categoria: "calzado",
    descripcion:
      "Pantalones vaqueros clásicos en color azul, talla L. vaqueros clásicos en color azul, talla L. vaqueros clásicos en color azul, talla L.",
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
      "https://img.ltwebstatic.com/images3_pi/2023/03/30/1680156796f0eae4cac4252654b3cd33a529a873e4_thumbnail_600x.webp",
    categoria: "vestimenta",
    descripcion: "Chaqueta de cuero auténtico en color marrón, talla XL.",
    precio: 149.99,
    id: 14,
  },
  {
    nombre: "Vestido estampado",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2021/09/17/1631866460846e1f19b37f15934839785e15461d17_thumbnail_600x.webp",
    categoria: "sexshop",
    descripcion: "Vestido corto estampado en tonos azules, talla S.",
    precio: 29.99,
    id: 15,
  },
  {
    nombre: "Bolso de mano",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2021/03/11/161544119423ae56e85aab9f15560be51ac3524ac1_thumbnail_600x.webp",
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
    nombre: "Reloj de pulsera",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2022/09/15/16632384464048226aa13ef87d5287e98f55749d06_thumbnail_600x.webp",
    categoria: "mascotas",
    descripcion: "Reloj de pulsera con correa de cuero marrón y esfera plateada.",
    precio: 89.99,
    id: 20,
  },
  {
    nombre: "Camiseta blanca",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2023/04/24/1682322188c82c7507946d0ab3b7ba8d255b745601_thumbnail_600x.webp",
    categoria: "maquillaje",
    descripcion:
      "Camiseta de algodón 100% en color blanco, talla M. Camiseta de algodón 100% en color blanco, talla M. Camiseta de algodón 100% en color blanco, talla M.",
    precio: 20.99,
    id: 21,
  },
  {
    nombre: "Pantalones vaqueros",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2023/02/15/16764479335dfef2d178497b5018c61b63b497c6d1_thumbnail_600x.webp",
    categoria: "calzado",
    descripcion:
      "Pantalones vaqueros clásicos en color azul, talla L. vaqueros clásicos en color azul, talla L. vaqueros clásicos en color azul, talla L.",
    precio: 39.99,
    id: 22,
  },
  {
    nombre: "Zapatillas deportivas",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2022/05/30/1653900614f19f8f99c02c0084bc9273b04421046f_thumbnail_600x.webp",
    categoria: "calzado",
    descripcion: "Zapatillas deportivas en color negro con suela de goma, talla 42.",
    precio: 59.99,
    id: 23,
  },
  {
    nombre: "Chaqueta de cuero",
    imagen:
      "https://media.gq.com.mx/photos/6005e3385939635761c3cd62/master/w_2333,h_3000,c_limit/Chaqueta%20biker%20de%20cuero%20falso%20con%20cinturo%CC%81n%20Pull&Bear.jpg",
    categoria: "vestimenta",
    descripcion: "Chaqueta de cuero auténtico en color marrón, talla XL.",
    precio: 149.99,
    id: 24,
  },
  {
    nombre: "Vestido estampado",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2021/04/06/1617674158b4bb9eb15478d9628269b601c86fc4da_thumbnail_600x.webp",
    categoria: "sexshop",
    descripcion: "Vestido corto estampado en tonos azules, talla S.",
    precio: 29.99,
    id: 25,
  },
  {
    nombre: "Bolso de mano",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2023/02/03/1675415326a5125e583a594965cf33acc54869272b_thumbnail_600x.webp",
    categoria: "varios",
    descripcion: "Bolso de mano en piel sintética en color rosa, con cierre de cremallera.",
    precio: 24.99,
    id: 26,
  },
  {
    nombre: "Pulsera de plata",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2022/09/26/16641802537182c196fba256d8f6eafbbf470f06a5_thumbnail_600x.webp",
    categoria: "accesorios",
    descripcion: "Pulsera de plata de ley con diseño de cadena.",
    precio: 69.99,
    id: 27,
  },
  {
    nombre: "Sombrero de paja",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2022/06/14/1655212727bb552c9109c3ef1029f02513c2c9fee6_thumbnail_600x.webp",
    categoria: "varios",
    descripcion: "Sombrero de paja con ala ancha en color natural.",
    precio: 12.99,
    id: 28,
  },
  {
    nombre: "Gafas de sol",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2022/11/27/16695176696bd32b646842470c8186563e60b87108_thumbnail_600x.webp",
    categoria: "varios",
    descripcion: "Gafas de sol con montura de pasta en color negro y cristales oscuros.",
    precio: 19.99,
    id: 29,
  },
  {
    nombre: "juguete de plastico",
    imagen:
      "https://img.ltwebstatic.com/images3_pi/2022/06/24/1656065628d017e9f8e80890f6f1a189be0ba15030_thumbnail_600x.webp",
    categoria: "mascotas",
    descripcion: "Reloj de pulsera con correa de cuero marrón y esfera plateada.",
    precio: 89.99,
    id: 30,
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
      <a href="https://www.facebook.com/" target="_blank" class=""
        ><i class="yhover bi bi-facebook text-light fs-2"></i
      ></a>
      <a href="https://www.instagram.com/" target="_blank" class=""
        ><i class="yhover bi bi-instagram text-light fs-2"></i
      ></a>
      <a href="https://wa.me/3121253865/" target="_blank" class=""
        ><i class="yhover bi bi-whatsapp text-light fs-2"></i
      ></a>
    </div>
  </section>
</footer>`;
// Se le inserta el footer despues de terminar el main
main[0].insertAdjacentHTML("afterend", footer);
