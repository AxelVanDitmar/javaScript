const carrito = []
const productos = []

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

const producto1 = new producto(1, "primer vuelo", 15000, 6);
productos.push(producto1)
const producto2 = new producto(2, "tour potrerillos", 15000, 4);
productos.push(producto2)
const producto3 = new producto(3, "tour Aconcagua", 25000, 3);
productos.push(producto3)
const producto4 = new producto(4, "tour full", 35000, 2);
productos.push(producto4)


//Funciones
function agregarAlCarrito(producto) {
    let buscarProducto = carrito.find(item => item.id === producto.id)
    if (buscarProducto !== undefined) {
      buscarProducto.precio = buscarProducto.precio + producto.precio
      buscarProducto.cantidad = buscarProducto.cantidad + 1
    } else {
      carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        img: producto.img,
        cantidad: 1
      })
    }
  }


//DOM
productos.forEach((producto) => {
    let cards = document.querySelector(".cards")
    let div = document.createElement("div")
    div.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio}</p>
 <button id=${producto.id} class="btn">Agregar al Carrito</button>
  `
  div.className = "card"
  cards.append(div)
  const boton = document.getElementById(producto.id)
  boton.addEventListener("click", () => agregarAlCarrito(producto))
});

//Muestro los tours que se encuentran en el carrito
const carritoBtn = document.getElementById("carrito")
carritoBtn.addEventListener("click", () => console.log(carrito));
