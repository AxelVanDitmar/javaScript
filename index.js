//DOM
const carritoBtn = document.getElementById("carrito");
const modal = document.getElementById("modal_overlay");
const cerrarModal = document.querySelector(".modal_close");
const vaciarCarrito = document.getElementById("vaciar_carrito");
const modalContainer = document.querySelector(".modal_container");
const span = document.querySelector(".contador");
const cards = document.querySelector(".cards");
const carritoCards = document.getElementById("cards_carrito");
const precioFinal = document.querySelector(".total");

//Evento para vaciar el carrito
vaciarCarrito.addEventListener("click", () => {
  carrito.length = 0;
  actualizarCarrito();
  localStorage.removeItem("carrito");
  Toastify({
    text: "Se vacio el carrito!",
    className: "toast_red",
    duration: 2500,
  }).showToast();
});

//Modal
carritoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("modal_show");
});
cerrarModal.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.remove("modal_show");
});

let carrito = [];
const productos = [];

class producto {
    constructor(id, nombre, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
    sumarIva() {
        return this.precio = this.precio * 1, 21
    }
}

const producto1 = new producto(
  1, 
  "primer vuelo", 
  15000, 
  6,
  "img/p92enVuelo.jpg");

const producto2 = new producto(
  2, 
  "tour potrerillos", 
  15000, 
  4,
  "img/p92perfil.jpg");

const producto3 = new producto(
  3, 
  "tour Aconcagua", 
  25000, 
  3,
  "img/skymasterPrendido.jpg");

const producto4 = new producto(
  4, 
  "tour full", 
  35000, 
  2,
  "img/stearman.jpg");

  productos.push(
    producto1,
    producto2,
    producto3,
    producto4,
    );

//Obtengo el localstorage al inciar
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    actualizarCarrito();
  }
});



//Funciones
function agregarAlCarrito(producto) {
  let buscarProducto = carrito.find((item) => item.id === producto.id);
    if (buscarProducto !== undefined) {
      buscarProducto.precio = buscarProducto.precio + producto.precio;
    buscarProducto.cantidad = buscarProducto.cantidad + 1;
    } else {
      carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        img: producto.img,
        cantidad: 1
      });
    }
    actualizarCarrito();
  }
  
  function actualizarCarrito() {
    carritoCards.innerHTML = "";
    carrito.forEach((producto) => {
      const { id, nombre, precio, img } = producto;
      let div = document.createElement("div");
      div.innerHTML = `
        <img src="${img}">
        <h3>${nombre}</h3>
        <p>Cantidad:${producto.cantidad}</p>
        <p>$${precio}</p>
        <button id="eliminar${id}" class="btn eliminar">Eliminar</button>
        `;
      localStorage.setItem("carrito", JSON.stringify(carrito));
      carritoCards.append(div);
      div.className = "card";
  
      const btnEliminar = document.getElementById(`eliminar${producto.id}`);
      btnEliminar.addEventListener("click", (e) => eliminarDelCarrito(producto));
    });
    span.innerHTML = carrito.length;
    precioFinal.innerHTML = carrito.reduce((acc, prod) => acc + prod.precio, 0);
  }
  
  function eliminarDelCarrito(producto) {
    let buscado = carrito.find((prod) => prod.id === producto.id);
    let indice = carrito.indexOf(buscado);
    carrito.splice(indice, 1);
    actualizarCarrito();
    Toastify({
      text: "Se elimino el producto del carrito!",
      className: "toast_red",
      duration: 2500,
    }).showToast();
  }


//DOM renderizo productos
productos.forEach((producto) => {
  const { id, nombre, precio, img } = producto;
  let div = document.createElement("div");
    div.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio}</p>
 <button id=${producto.id} class="btn">Agregar al Carrito</button>
  `;
  div.className = "card";
  cards.append(div);

  const boton = document.getElementById(producto.id);
  boton.addEventListener("click", (e) => {
    agregarAlCarrito(producto);
  });
});