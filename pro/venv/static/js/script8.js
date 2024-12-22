document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cartContainer');
    const totalPriceElement = document.getElementById('totalPrice');
    const checkoutBtn = document.getElementById('checkoutBtn');

    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Function to update the cart display
    const updateCart = () => {
        cartContainer.innerHTML = ''; // Clear existing items
        let totalPrice = 0;
        const itemCounts = {}; // Track quantity of items

        // Group items by name and count quantities
        cartItems.forEach(item => {
            itemCounts[item.name] = (itemCounts[item.name] || 0) + 1;
        });

        // Render each unique item in the cart
        Object.keys(itemCounts).forEach(name => {
            const item = cartItems.find(item => item.name === name); // Get one of the items for display
            const quantity = itemCounts[name];
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');
            productCard.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="product-image">
                <p>Price: ${item.price}</p>
                <p>Quantity: ${quantity}</p>
                <button class="remove-btn">Remove</button>
            `;

            // Add the product card to the cart container
            cartContainer.appendChild(productCard);

            // Add event listener for the remove button
            const removeBtn = productCard.querySelector('.remove-btn');
            removeBtn.addEventListener('click', () => {
                removeItemFromCart(item, quantity);
            });

            totalPrice += item.price * quantity;
        });

        // Update total price
        totalPriceElement.textContent = `${totalPrice}`;

        // Enable checkout button if the cart is not empty
        checkoutBtn.disabled = cartItems.length === 0;
    };

    // Function to remove an item from the cart and local storage
    const removeItemFromCart = (item, quantity) => {
        const itemIndex = cartItems.findIndex(cartItem => cartItem.name === item.name && cartItem.price === item.price && cartItem.image === item.image);
        if (itemIndex !== -1) {
            // Remove one instance of the item from the cart
            cartItems.splice(itemIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cartItems)); // Update local storage
        updateCart(); // Re-render the cart
    };

    // Initial update
    updateCart();
});
