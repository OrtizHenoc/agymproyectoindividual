const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const planSeleccionado = params.get('plan');
const container = document.querySelector('.plans-container--slider');


fetch ('../DATA/seguros.json')
    .then(response => response.json())
    .then(data =>{
        const planData = data.find(plan => plan.id === planSeleccionado);
        if (planData) {
        creacionDetalle(planData);
        } else {
        console.log('No se encontró el plan seleccionado.');
        }
    })
    .catch(error => {
        console.log(error)
    });

//Funcion que manipula el DOM para mostrar en pantalla el detalle de cada plan
function creacionDetalle(data){
    container.innerHTML= 
    `
    <article class="plans-container--card ${data.id}">
        <p class="name-plans"> ${data.nombre}</p>
        <div class="plan-info-container">
            <h3 class="plan-card--title">${data.tiempo_pago}</h3>
            <p class="plan-card--price">$${data.precio}</p>
            <button class="plan-card--ca buy-button">Contratar</button>
        </div>
    </article>
    <span class="descripcion-seguro">
        <div>
            <h4 class="title">
                Coberturas
            </h4>
            <ul class="cobertura-list">
            </ul>
        </div>
        <div>
            <h4 class="title">
                Beneficios
            </h4>
            <ul class="beneficios-list">
            </ul>
        </div>
    </span>
    `
    const beneficiosList = document.querySelector('.beneficios-list')
    data.beneficios.forEach(beneficio => {
        const li = document.createElement('li');
        li.textContent = beneficio;
        beneficiosList.appendChild(li);
    });
    
    const coberturaList = document.querySelector('.cobertura-list');
    data.coberturas.forEach(cobertura => {
        const li = document.createElement('li');
        li.textContent = cobertura;
        coberturaList.appendChild(li);
    });
  
}
