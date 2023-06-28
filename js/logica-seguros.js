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
    /*<span class="descripcion-seguro">
                <div>
                    <h4 class="title">
                        Coberturas
                    </h4>
                    <ul class="cobertura-list">
                        <li>
                            Responsabilidad civil obligatoria: cubre los daños a terceros en caso de un accidente.
                        </li>
                        <li>
                            Asistencia en carretera básica: cubre el servicio de grúa y reparaciones en caso de avería o accidente.
                        </li>
                        <li>
                            Robo y hurto del vehículo: cubre el robo o hurto del vehículo asegurado.
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 class="title">Beneficios</h4>
                    <ul class="beneficios-list">
                        <li>
                            Protección a un precio accesible
                        </li>
                        <li>
                            Cumplimiento con la ley, al cubrir la responsabilidad civil obligatoria.
                        </li>
                    </ul>
                </div>
            </span>*/ 
}

switch (planSeleccionado) {
    case basic:
        
        break;
    case standard:
        
        break;
    case premium:
        
        break;

    default:
        break;
}