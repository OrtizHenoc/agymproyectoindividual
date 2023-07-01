const botonesCompra = document.querySelectorAll(".car-icon");
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    console.log(`Clave: ${key}, Valor: ${value}`);
  }
  
for (let i = 0; i < botonesCompra.length; i++ ){
    botonesCompra[i].addEventListener("click",agregarAlCarrito);
}

function agregarAlCarrito(event){
    const product = getInfoProduct(event.target);//Se usa para saber que elemento origino el evento, en esto caso cual fue el boton que se presiono
    const productSaved = saveProduct(product);
    
    if(productSaved.success){
        mostrarPopUp(productSaved.message);
    }else{
        if(productSaved.type ==="error"){
            mostrarPopUp(productSaved.message);
        }
        else{
            mostrarPopUp(productSaved.message);
        }
    }
}

function getInfoProduct (botonComprar) {
    const elementoProducto = botonComprar.closest(".element-container");//closest busca al elemento mas cercano en la jerarquia del dom que coincida con el parametro dado
    const nombre = elementoProducto.querySelector(".list-container li:nth-child(1) p").innerText;//inner text, es para obtener el valor de texto que contiene ese elemento
    const precio = elementoProducto.querySelector(".price-number").innerText;
    const descripcion = elementoProducto.querySelector(".list-container li:nth-child(3) p").innerText;
    const publicado = elementoProducto.querySelector(".list-container li:nth-child(4) p").innerText;
    const srcImage = elementoProducto.querySelector(".detail-image").getAttribute("src");
    return { nombre, precio, descripcion, publicado, srcImage };
  }

function saveProduct(product){
    try {
        let carrito = JSON.parse(localStorage.getItem("carrito")) || [];//se obtiene la data guardada y si es nulo entonces se da un valor de un array vacio.
        const existProduct = carrito.some((item) => item.nombre === product.nombre);

        if(existProduct){
            return {success:false, message:"El producto ya se encuentra agregado", type: "duplicate"};
        }
        carrito.push(product);
    
        localStorage.setItem("carrito", JSON.stringify(carrito));
        return {success:true, message:"Producto agregado correctamente", type: "success"};
    } catch (error) {
        return {success:false, message:"Error al guardar el producto", type: "error"};
    }
}
function mostrarPopUp(mensaje){
    const popup = document.getElementById("popup");
    const poupMessage = document.getElementById("popup-message");
    poupMessage.textContent = mensaje;
    popup.style.display = "block";

    setTimeout(function () {
        popup.style.display = "none";
    },3000);
}

