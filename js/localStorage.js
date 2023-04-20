
let formulario = document.querySelector("formulario");
let nombreProducto = document.getElementById("nombreProducto");
let precioProducto = document.getElementById("precioProducto");
let imagenProducto = document.getElementById("imagenProducto");
let descripcionProducto = document.getElementById("descripcionProducto");
let btnCrear = document.getElementById("btnCrear");
let articulos = [];
let isValid = true; 



  btnCrear.addEventListener("click", function (event){
    event.preventDefault();
    //guardar información
    if(isValid){

      let reader = new FileReader();
      reader.readAsDataURL(imagenProducto.files[0]);
      reader.onload = function(){
        let imageData =reader.result;
      let articulo=`{
          "nombre":"${nombreProducto.value}",
          "img":"${imageData}",
          "descripcion":"${descripcionProducto.value}",
          "precio":"${precioProducto.value}"
      }`;
      articulos.push (JSON.parse(articulo));
      localStorage.setItem("articulos",JSON.stringify(articulos));

  }}});


  
