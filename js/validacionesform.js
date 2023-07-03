const form = document.querySelector('.form-container');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe por defecto

  // Validar los campos del formulario
  if (validateForm()) {
    // Si todos los campos son válidos, puedes realizar alguna acción, como enviar el formulario
    form.submit();
  }
});

function validateForm() {
  let isValid = true;

  // Validar cada campo del formulario

  // Matricula
  const matriculaInput = document.getElementById('matricula');
  if (!matriculaInput.value.trim()) {
    alert( 'La matricula es obligatoria');
    isValid = false;
  }
  const precioInput = document.getElementById('precio');
  if (!precioInput.value.trim()) {
    alert( 'El precio es obligatorio.');
    isValid = false;
  }

  // Kilometraje
  const kmInput = document.getElementById('km');
  if (!kmInput.value) {
    alert('Los kilometrajes son obligatorio');
    isValid = false;
  }

  // Tipo de coche
  const tipoCocheInputs = document.querySelectorAll('input[name="tipo-coche"]');
  let isChecked = false;
  tipoCocheInputs.forEach(function(input) {
    if (input.checked) {
      isChecked = true;
    }
  });
  if (!isChecked) {
    alert('Selecciona un tipo de coche o accesorio');
    isValid = false;
  }
  const tipoCambioInputs = document.querySelectorAll('input[name="tipo-cambio"]');
  let isChecked2 = false;
  tipoCambioInputs.forEach(function(input) {
    if (input.checked) {
        isChecked2 = true;
    }
  });
  if (!isChecked2) {
    alert('Selecciona el tipo de cambio de tu coche');
    isValid = false;
  }

  const pics = document.getElementById('images-input');
  const files = pics.files;

  if (files.length === 0) {
    alert('Debe seleccionar al menos una imagen.');
    isValid =false;
  } 
  // Correo electrónico
    const correoInput = document.querySelector('input[type="text"][placeholder="correo@ejemplo.com"]');
    const correoValue = correoInput.value.trim();
    if (!correoValue ) {
    alert('Ingresa un correo electrónico válido');
    isValid = false;
    }

    // Teléfono
    const telefonoInput = document.querySelector('input[type="tel"][placeholder="Telefono: +505 0000-0000"]');
    const telefonoValue = telefonoInput.value.trim();
    if (!telefonoValue) {
    alert('Ingresa un número de teléfono válido');
    isValid = false;
    }

    // WhatsApp
    const whatsappInput = document.querySelector('input[type="tel"][placeholder="WhatsApp: +505 0000-0000"]');
    const whatsappValue = whatsappInput.value.trim();
    if (!whatsappValue) {
    alert('Ingresa un número de WhatsApp válido');
    isValid = false;
    }
  
  return isValid;
}

