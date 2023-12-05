// // function nombreFuncion(){
// //     console.log("Hola, estamos aprendiendo funciones");
// // };

// // nombreFuncion();

// // const suma = function(){
// //     console.log(10+3);
// // }

// // suma();

// const suma1=function(){
//     console.log("4+5");
// };

// // alert("Hubo un error Intenta de nuevo");

// // prompt("¿Cuál es tu presupuesto?");

// parseInt("2");

// const numero1=2;
// const numero2="2";

// console.log(parseInt(numero2))
// console.log(numero1.toString())

// function saludar(nombre, apellido){
//     console.log(`Hola ${nombre} ${apellido}`);
// }

// saludar("Ivan", "Garcia");

// function saludar(nombre="Desconocido", apellido=""){
//     console.log(`Hola ${nombre} ${apellido}`);
// }

// saludar();
// iniciarApp();

// function iniciarApp(){
//     console.log("Iniciando App...");
//     segundaFuncion();
// }

// function segundaFuncion(){
//     console.log("Desde la segunda funcion");
//     usuarioValidado("Montse");
// }

// function usuarioValidado(usuario){
//     console.log("Validaddo usuario...")
//     console.log(`Usuario validado con exito, ¡Hola ${usuario}!`); 
// }

function suma(a,b){
    return a+b;
}

const resultado = suma(1,7);
console.log(resultado);

let total=0;

function agregarCarrito(precio){
    return total+=precio;
}

function calcularImpuesto(total){
    return 1.15*total;
}

total=agregarCarrito(400);
total=agregarCarrito(500);
total=agregarCarrito(200);
total=agregarCarrito(200);

console.log(total);

const totalPago = calcularImpuesto(total);

console.log(`El total es de ${totalPago}`);