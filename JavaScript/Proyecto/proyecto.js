document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartList = document.querySelector('.cart-list');
    const cartTotal = document.getElementById('cart-total');

    let cart = [];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        const button = event.target;
        const product = button.parentNode;
        const productId = product.getAttribute('data-id');
        const productName = product.getAttribute('data-name');
        const productPrice = parseFloat(product.getAttribute('data-price'));

        const isInCart = cart.find(item => item.id === productId);

        if (isInCart) {
            isInCart.quantity++;
        } else {
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1
            });
        }

        updateCart();
    }

    function updateCart() {
        cartList.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const listItem = document.createElement('li');
            listItem.className = 'cart-item';
            listItem.innerHTML = `
                <span>${item.name} x ${item.quantity}</span>
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
                <button class="remove-from-cart" data-id="${item.id}">Eliminar</button>
            `;

            total += item.price * item.quantity;

            cartList.appendChild(listItem);
        });

        cartTotal.textContent = total.toFixed(2);

        const removeFromCartButtons = document.querySelectorAll('.remove-from-cart');
        removeFromCartButtons.forEach(button => {
            button.addEventListener('click', removeFromCart);
        });
    }

    function removeFromCart(event) {
        const button = event.target;
        const productId = button.getAttribute('data-id');
        const itemIndex = cart.findIndex(item => item.id === productId);

        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
            updateCart();
        }
    }
});
