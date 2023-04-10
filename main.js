const personajesSimpson = [
    { nombre: "Homero", edad: 39, rol: "Padre" },
    { nombre: "Marge", edad: 36, rol: "Madre" },
    { nombre: "Bart", edad: 10, rol: "Hijo" },
    { nombre: "Lisa", edad: 8, rol: "Hija" },
    { nombre: "Maggie", edad: 1, rol: "Hija" },
    { nombre: "Ned", edad: 35, rol: "Vecino" },
    { nombre: "Ralph", edad: 8, rol: "Compañero de clase" },
    { nombre: "Milhouse", edad: 10, rol: "Amigo" },
    { nombre: "Nelson", edad: 12, rol: "Bravucon" },
    { nombre: "Martin", edad: 10, rol: "Compañero de clase" },
]

console.log("Ejercicio 1")
const personajesMenores18 = personajesSimpson.filter(personaje => personaje.edad < 18)
console.log(personajesMenores18);

console.log("Ejercicio 2")
const sumarEdades = personajesMenores18.reduce((suma, personajesMenores18) => suma + personajesMenores18.edad, 0);
console.log(sumarEdades);

console.log("Ejercicio 3")
const nuevoArray = personajesMenores18.map(personaje => personaje.nombre)
    console.log(nuevoArray);



