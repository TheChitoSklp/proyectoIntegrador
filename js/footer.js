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
