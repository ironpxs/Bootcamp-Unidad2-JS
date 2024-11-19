console.log("Ejercicio 9:")
const mesas = Array.from({ length: 10 }, (_, i) => ({ numero: i + 1, disponible: true }));

function reservarMesa(numero) {
    const mesa = mesas.find(m => m.numero === numero);
    if (mesa && mesa.disponible) {
        mesa.disponible = false;
        console.log(`Mesa ${numero} reservada.`);
    } else {
        console.log(`Mesa ${numero} no está disponible.`);
    }
}

function mostrarMesasDisponibles() {
    const disponibles = mesas.filter(m => m.disponible);
    console.log('Mesas disponibles:', disponibles.map(m => m.numero).join(', '));
}

mostrarMesasDisponibles();
reservarMesa(3);
mostrarMesasDisponibles();
