
const movimientos = [
    { nombre: "Comida", tipo: "gasto", valor: 200 }, // 1
    { nombre: "Freelance", tipo: "ingreso", valor: 500 }, // 2
    { nombre: "Salario", tipo: "ingreso", valor: 3000 } // 0
]

// permite cambiar su valor en cualquier momento
let fruta = 'manzana'

// no permite cambiar el valor
const PI = 3.1416

// imperativa
// console.log(movimientos[1])
// console.log(movimientos[0])
// console.log(movimientos[2])

// obtener la cantidad de elementos que tiene un arreglo

// iniciamos el recorrido con el número 0
// se deben hasta 3 veces
// incrementamos el valor de 0 hasta que llegue al 3
let nuevoArreglo = []
for (let index = 0; index < movimientos.length; index++) {
    if(movimientos[index].valor > 300) {
        nuevoArreglo.push(movimientos[index])
    }
}

console.log(nuevoArreglo)

// // trae todos los movimientos que cumplan con la condición
let unico = movimientos.filter(movimiento => movimiento.valor > 300)
console.log(unico)

// funcional
// del grupo de "movimientos" extraemos al "movimiento"
// que quieres obtener? -> console.log(movimiento)
// movimientos.map(movimiento => console.log(movimiento))

// movimientos.map(mov => console.log(mov.nombre))




// // trae el PRIMERO que coindica con la condición
// let unico2 = movimientos.find(movimiento => movimiento.valor > 300)
// console.log(unico2)

const personas = [
    { nombre: "Ana", edad: 25, ciudad: "Lima", profesion: "Ingeniera" },
    { nombre: "Luis", edad: 30, ciudad: "Arequipa", profesion: "Profesor" },
    { nombre: "María", edad: 22, ciudad: "Cusco", profesion: "Diseñadora" },
    { nombre: "Carlos", edad: 28, ciudad: "Trujillo", profesion: "Médico" }
]

// utilizando map, me traigas todos los nombres de las personas