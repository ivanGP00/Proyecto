
let elemento;

elemento=document.body;
elemento=document.forms;

console.log(elemento);


const header=document.getElementsByClassName("header");

console.log(header);

const formulario=document.getElementsByClassName("formulario");
console.log(formulario);

const card=document.querySelector(".card");
console.log(card);

const cards=document.querySelectorAll(".card");
console.log(cards);

const formulario2=document.querySelector("#formulario");
console.log(formulario2);

const encabezado=document.querySelector(".contenido-hero h1");

console.log(encabezado.innerText);
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);

const textoEncabezado=document.querySelector(".contenido-hero h1").textContent;
console.log(textoEncabezado);

document.querySelector(".contenido-hero h1").textContent="Nuevo encabezado";

const enlace=document.createElement("A");
enlace.textContent="Nuevo enlace desde JS";
enlace.href="/nuevo-enlace";

const enlaceNavegacion=document.querySelector(".navegacion");
enlaceNavegacion.appendChild(enlace);

console.log(enlace);