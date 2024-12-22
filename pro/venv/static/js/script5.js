document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const productContainer = document.getElementById('productContainer');
    const sortPriceAsc = document.getElementById('sortPriceAsc');
    const sortPriceDesc = document.getElementById('sortPriceDesc');

    // Search Functionality
    searchBar.addEventListener('input', () => {
        const searchValue = searchBar.value.toLowerCase();
        const products = document.querySelectorAll('.product-card');

        products.forEach(product => {
            const name = product.dataset.name.toLowerCase();
            product.style.display = name.includes(searchValue) ? '' : 'none';
        });
    });

    // Sort Functionality
    const sortProducts = (ascending = true) => {
        const products = Array.from(document.querySelectorAll('.product-card'));
        products.sort((a, b) => {
            const priceA = parseInt(a.dataset.price, 10);
            const priceB = parseInt(b.dataset.price, 10);
            return ascending ? priceA - priceB : priceB - priceA;
        });

        productContainer.innerHTML = '';
        products.forEach(product => productContainer.appendChild(product));
    };

    sortPriceAsc.addEventListener('click', () => sortProducts(true));
    sortPriceDesc.addEventListener('click', () => sortProducts(false));
});

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    // Function to add product to the cart
    const addToCart = (product) => {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        cartItems.push(product);
        localStorage.setItem('cart', JSON.stringify(cartItems));
    };

    // Event listener for each "Add to Cart" button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productCard = e.target.closest('.product-card');
            const product = {
                id: productCard.dataset.id,
                name: productCard.dataset.name,
                price: parseInt(productCard.dataset.price),
                image: productCard.dataset.image
            };
            addToCart(product);
            alert(`${product.name} has been added to your cart.`);
        });
    });
});
