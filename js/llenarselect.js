fetch('../DATA/selectvalues.json')
  .then(response => response.json())
  .then(data => {
    // Llenar el select de marcas
    const marcaSelect = document.getElementById('marca');
    data.marcas.forEach(marca => {
      const option = document.createElement('option');
      option.value = marca.nombre;
      option.textContent = marca.nombre;
      marcaSelect.appendChild(option);
    });

    // Función para llenar el select de modelos según la marca seleccionada
    function llenarModelos() {
        const marcaSeleccionada = marcaSelect.value;
        const modeloSelect = document.getElementById('modelo');
        modeloSelect.innerHTML = '';
  
        const marca = data.marcas.find(marca => marca.nombre === marcaSeleccionada);
        if (marca) {
          marca.modelos.forEach(modelo => {
            const option = document.createElement('option');
            option.value = modelo;
            option.textContent = modelo;
            modeloSelect.appendChild(option);
          });
        }
      }
  
      // Llenar el select de modelos inicialmente
      llenarModelos();
  
      // Asignar evento al select de marcas para llenar el select de modelos al cambiar
      marcaSelect.addEventListener('change', llenarModelos);
  
      // Llenar el select de combustibles
      const combustibleSelect = document.getElementById('combustible');
      data.combustibles.forEach(combustible => {
        const option = document.createElement('option');
        option.value = combustible;
        option.textContent = combustible;
        combustibleSelect.appendChild(option);
      });
  
      // Llenar el select de años
      const añoSelect = document.getElementById('año');
      data.años.forEach(año => {
        const option = document.createElement('option');
        option.value = año;
        option.textContent = año;
        añoSelect.appendChild(option);
      });
    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });