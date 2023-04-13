let main = document.getElementsByTagName("main");

const footer= `
<footer class="container-fluid footerContainer">
  <section class="row">
    <span class="card-header col-6">Derechos Reservados© IPN GIRL SHOPPING®</span>
    <div class="liksFooter col-6">
      <a href="https://www.facebook.com/" target="_blank" class=""
        ><i class="bi bi-facebook text-primary fs-2"></i
      ></a>
      <a href="https://www.instagram.com/" target="_blank" class=""
        ><i class="bi bi-instagram text-danger fs-2"></i
      ></a>
      <a href="https://wa.me/3121253865/" target="_blank" class=""
        ><i class="bi bi-whatsapp text-success fs-2"></i
      ></a>
    </div>
  </section>
</footer>`;

main[0].insertAdjacentHTML("afterend",footer);
