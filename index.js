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
    vendido() {
        this.stock = this.stock - 1
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





function mostrarProductos() {
    alert("Bienvenido a Skymaster Mendoza, nuestros tours son los siguientes")
    productos.forEach(producto => {
        alert(`
            ${producto.nombre}
            $${producto.precio}
        `)
    })
}

function mostrarCarrito() {
    alert("Usted tiene los siguientes tours en su carrito:")
    carrito.forEach(producto => {
        alert(`
            ${producto.nombre}
            $${producto.precio}
        `)
    })

    let continuar = Number(prompt("Que quiere hacer: 1-confirmar compra, 2-vaciar carrito"))
    switch (continuar) {
        case 1:
            let total = carrito.reduce((acc, producto) => acc + producto.precio, 0)
            let iva = total * 1.21
            alert(`El total de su compra es de $${iva}`)
            break;
        case 2:
            carrito.splice(0, carrito.length)
            alert("Su carrito se vacio con exito!")
            console.log(carrito)
            break;
    }
}

function comprar() {
    let compra = Number(prompt("Elija el producto que quiera: 1-primer vuelo, 2-tour potrerillos, 3-tour aconcagua, 4-tour full"))

    while (compra !== 0) {
        let resultado
        switch (compra) {
            case 1:
                resultado = productos.find((producto) => producto.id === compra)
                carrito.push(resultado)

                break;
            case 2:
                resultado = productos.find((producto) => producto.id === compra)
                carrito.push(resultado)

                break;
            case 3:
                resultado = productos.find((producto) => producto.id === compra)
                carrito.push(resultado)

                break;
            case 4:
                resultado = productos.find((producto) => producto.id === compra)
                carrito.push(resultado)

                break;

            default:
                alert("Ingrese un producto de la lista por favor")

        }
        compra = Number(prompt("Elija el tour que quiera: 1-primer vuelo, 2-tour potrerillos, 3-tour aconcagua, 4-tour full o 0-salir"))

    }
}



mostrarProductos()
comprar()
mostrarCarrito()