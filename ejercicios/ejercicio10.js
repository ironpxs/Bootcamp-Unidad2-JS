console.log("Ejercicio 10:")
const carrito = [];

function agregarAlCarrito(nombre, precio, cantidad) {
    const producto = { nombre, precio, cantidad };
    carrito.push(producto);
}

function calcularTotalCarrito() {
    return carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
}

function mostrarCarrito() {
    carrito.forEach(producto => {
        console.log(`${producto.nombre} - Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`);
    });
    console.log('Total:', calcularTotalCarrito());
}

agregarAlCarrito('Manzanas', 2, 10);
agregarAlCarrito('Pan', 3, 2);
mostrarCarrito();
