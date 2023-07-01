const mainContainer = document.querySelector('.main-container');

const carritoItems = JSON.parse(localStorage.getItem('carrito'));

if(!carritoItems || carritoItems.length === 0){
    const voidMessage = document.createElement('span');
  voidMessage.classList.add('void-message');
  voidMessage.innerHTML = '<p>No has agregado ningún producto.</p>';
  mainContainer.appendChild(voidMessage);
}else{
    carritoItems.forEach((item) => {
        const elementContainer = document.createElement('span');
        elementContainer.classList.add('element-container');
        elementContainer.innerHTML = 
        `
        <p class="element-name">${item.nombre}</p>
        <p>$${item.precio}</p>
        <img src="${item.srcImage}" class="img-product">
        <input type="number" min="1" value="1" class="cantidad-container">
        <button class="delete-button">Eliminar</button>
        `
        mainContainer.appendChild(elementContainer);
    });
}

const totalP = document.querySelector('.total-number');

const inputs = mainContainer.querySelectorAll('.cantidad-container');


totalP.innerText = calTotal(carritoItems);

inputs.forEach((input, index) => {
    input.addEventListener('change', ()=> {
        totalP.innerText = calTotal(carritoItems);
    })
})

function calTotal(items){
    let sumTotal = 0;
    for(let i = 0; i < items.length; i++){
        sumTotal += parseFloat(items[i].precio * inputs[i].value);
        console.log(inputs.value)
    }
    return sumTotal;
}

mainContainer.addEventListener("click", function (event){
    if(event.target.classList.contains("delete-button")){
        const productName = event.target.closest(".element-container").querySelector(".element-name").innerText;
        console.log(productName);
        
        const updatedCarrito = carritoItems.filter((item) => item.nombre !== productName);

        if(updatedCarrito.length < carritoItems.length){
            localStorage.setItem("carrito",JSON.stringify(updatedCarrito));

            location.reload();
        }
    }
})
