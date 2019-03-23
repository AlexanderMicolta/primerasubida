//objeto
let estudiante = {
    nombre: 'Jennifer',
    edad: 19,
    notas: {
        matematicas: 3,
        ingles: 4,
        programacion: 5
    }
};

let obtenerPromedio = (nota_uno, nota_dos, nota_tres) => (nota_uno + nota_dos + nota_tres)/3;

module.exports = {
    estudiante,
    obtenerPromedio
};