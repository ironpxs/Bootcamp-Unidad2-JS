console.log("Ejercicio 7:")
const alumnos = [
    { nombre: 'Juan', calificaciones: [10, 9, 8] },
    { nombre: 'Ana', calificaciones: [7, 8, 9] },
];

function calcularPromedios(alumnos) {
    return alumnos.map(alumno => {
        const promedio = alumno.calificaciones.reduce((sum, nota) => sum + nota, 0) / alumno.calificaciones.length;
        return { nombre: alumno.nombre, promedio };
    });
}

console.log('Promedios:', calcularPromedios(alumnos));