console.log("Ejercicio 6:")
const inventario = [];

function agregarProducto(nombre, precio, cantidad) {
    const producto = { nombre, precio, cantidad };
    inventario.push(producto);
}

function calcularValorTotal() {
    return inventario.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
}

// Ejemplo de uso:
agregarProducto('Manzanas', 2, 10);
agregarProducto('Naranjas', 3, 5);
console.log('Valor total del inventario:', calcularValorTotal());
