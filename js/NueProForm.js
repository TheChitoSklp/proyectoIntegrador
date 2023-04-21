const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');

if (form) {
  const nombreProducto = document.querySelector('#nombreProducto');
  const precioProducto = document.querySelector('#precioProducto');
  const imagenProducto = document.querySelector('#imagenProducto');
  const descripcionProducto = document.querySelector('#descripcionProducto');

  // Validar los campos vacíos al perder el foco
  nombreProducto.addEventListener('blur', validateNotEmpty);
  precioProducto.addEventListener('blur', validateNotEmpty);
  imagenProducto.addEventListener('blur', validateNotEmpty);
  descripcionProducto.addEventListener('blur', validateNotEmpty);

  // Validar los campos según su tipo al perder el foco
  precioProducto.addEventListener('blur', validatePrice);
  imagenProducto.addEventListener('blur', validateImage);

  // Agregar un escucha de evento para el envío del formulario
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Validar todos los campos
    validateNotEmpty(nombreProducto);
    validateNotEmpty(precioProducto);
    validateNotEmpty(imagenProducto);
    validateNotEmpty(descripcionProducto);
    validatePrice(precioProducto);
    validateImage(imagenProducto);

    // Verificar si todos los campos son válidos
    const isValid = form.checkValidity();

    // Mostrar un mensaje de error si hay campos inválidos
    if (!isValid) {
      showAlert('Por favor complete todos los campos obligatorios correctamente.', 'danger');
    } else {
      // Deshabilitar el botón de envío para evitar envíos duplicados
      submitButton.disabled = true;

      // Simular un envío del formulario (reemplazar con el código real)
      setTimeout(() => {
        // Mostrar un mensaje de éxito solo cuando se haya enviado correctamente
        showAlert('Se ha creado el producto exitosamente.', 'success');
      }, 2000);
    }
  });
}

function validateNotEmpty(input) {
  if (!input.value.trim()) {
    input.setCustomValidity('Este campo es obligatorio.');
  } else {
    input.setCustomValidity('');
  }
}

function validatePrice(input) {
  if (!input.value.trim()) {
    input.setCustomValidity('Este campo es obligatorio.');
  } else if (isNaN(input.value) || input.value <= 0) {
    input.setCustomValidity('Este campo debe ser un número mayor que cero.');
  } else {
    input.setCustomValidity('');
  }
}

function validateImage(input) {
  if (!input.value.trim()) {
    input.setCustomValidity('Debe seleccionar al menos una foto del producto.');
  } else if (!/\.(jpg|png|gif)$/i.test(input.value)) {
    input.setCustomValidity('Este campo debe ser un archivo de imagen (JPG, PNG o GIF).');
  } else {
    input.setCustomValidity('');
  }
}

function showAlert(message, type) {
  // Mostrar un mensaje de alerta en la página
  const alert = document.createElement('div');
  alert.className = `alert alert-${type}`;
  alert.textContent = message;
  if (document.body) {
    document.body.appendChild(alert);
  }
  

  // Ocultar el mensaje de alerta después de unos segundos
  setTimeout(() => {
    alert.remove();
  }, 5000);
}
