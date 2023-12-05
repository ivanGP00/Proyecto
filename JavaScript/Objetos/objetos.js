// const nombre = "Ivan";
// const apellido = "Garcia";

// const cliente={
//     nombre: "Ivan",
//     apellido: "Garcia",
//     telefono: 12345,
//     direccion:{
//         calle: "Malasia",
//         fraccionamiento: "Vallarta",
//         numeroDomicilio: 506,
//     }
// };

// cliente.nacionalidad = "Mexicano";


// console.log(cliente);
// // console.log(cliente.nombre);

// const { nombre, apellido } = cliente;
// const { telefono, direccion:{ calle, fraccionamiento } } = cliente;

// if(calle === "Malasia"){
//     console.log("Si es");
// }else{
//     console.log("No es"); 
// }

// if(nombre=='Ivan'){
//     console.log("Si es");
// }else{
//     console.log("No es");
// }

// console.log(`mi nombre es: ${nombre}`);
// console.log(`Mi apellido es: ${apellido}`);
// // console.log(`Vivo en el fraccionamiento: ${cliente.direccion.fraccionamiento}`);

// console.log(calle);
// // console.log(direccion);

// cliente.telefono=54321;

// //Object.freeze(cliente);
// // cliente.telefono=9949494949;

// Object.seal(cliente);
// cliente.telefono=54353;

// delete cliente.nombre;

const cliente={
    nombre:"Ivan",
    apellido:"Garcia",
    telefono: 3325335013,
    nacionalidad:"mexicano",
    mostrarCliente: function(){
        return `Mi nombre es ${this.nombre} ${this.apellido} y soy ${this.nacionalidad}`;
    }
};

console.log(cliente.mostrarCliente());
const ubicacion={
    calle:"Malasia",
    colonia:"Vallarta"
};

// const union=Object.assign(cliente,ubicacion);

const union={...cliente,...ubicacion};
console.log(union);





