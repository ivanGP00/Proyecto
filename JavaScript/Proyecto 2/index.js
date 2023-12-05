// Objeto para almacenar los productos en el carrito
const carrito = {};

// Función para agregar un producto al carrito
function agregarAlCarrito(productoId, precio) {
    if (carrito[productoId]) {
        carrito[productoId].cantidad++;
    } else {
        carrito[productoId] = {
            cantidad: 1,
            precio: precio
        };
    }

    actualizarCarrito();
}

// Función para actualizar la información del carrito en la interfaz
function actualizarCarrito() {
    const totalElement = document.querySelector('.total h3');
    let total = 0;

    // Calcular el total y actualizar la interfaz
    for (const productoId in carrito) {
        total += carrito[productoId].cantidad * carrito[productoId].precio;
    }

    totalElement.textContent = `Total = $${total.toFixed(2)}`;
}

// Función para vaciar el carrito
function vaciarCarrito() {
    for (const productoId in carrito) {
        delete carrito[productoId];
    }

    actualizarCarrito();
}