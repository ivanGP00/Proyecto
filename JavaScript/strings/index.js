const nombreProducto = 'Samsung s23';
const precioProducto = 15000;
const pagoFinal = 500;

// // console.log(nombreProducto);
// console.log(nombreProducto.length);

// console.log(nombreProducto.indexOf('s23'));
// console.log(nombreProducto.indexOf('iPhone'));

// console.log(nombreProducto.concat(' Ya esta disponible'));

// console.log(`El pago a realizar por el mes de noviembre es de ${pagoFinal}`); //ctrl + alt + } = ``

// console.log("El nuevo " + nombreProducto + " ya esta disponible");


//AQUI------------------------------------------------------------------------------
console.log(nombreProducto.trimStart())
console.log(nombreProducto.trimEnd())

console.log(nombreProducto.trimStart().trimEnd());

//Replace
console.log(nombreProducto.replace("s23", "s24"));

//Slice
console.log(nombreProducto.slice(0,8));
console.log(nombreProducto.slice(6));
console.log(nombreProducto.substring(2,3))

const nombre = 'Montse'
console.log(nombre.substring(0,1))

let producto;