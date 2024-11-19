console.log("Ejercicio 8:")
const tareas = [];

function agregarTarea(nombre) {
    const tarea = { nombre, completada: false };
    tareas.push(tarea);
}

function marcarComoCompletada(nombre) {
    const tarea = tareas.find(t => t.nombre === nombre);
    if (tarea) {
        tarea.completada = true;
    }
}

function listarTareas() {
    tareas.forEach(tarea => {
        console.log(`${tarea.nombre} - ${tarea.completada ? 'Completada' : 'Pendiente'}`);
    });
}

agregarTarea('Hacer la compra');
agregarTarea('Estudiar JavaScript');
marcarComoCompletada('Hacer la compra');
listarTareas();
