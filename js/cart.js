// Cart management functionality
let cart = [];
let isCartOpen = false;

// Function to add item to cart
function addToCart(productId) {
    const product = getProductById(productId);
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const quantity = parseFloat(quantityInput.value) || 0;
    
    if (quantity <= 0) {
        alert('Please select a quantity greater than 0');
        return;
    }
    
    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => item.id === productId);
    
    if (existingItemIndex > -1) {
        // Update existing item quantity
        cart[existingItemIndex].quantity += quantity;
    } else {
        // Add new item to cart
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            quantity: quantity,
            image: product.image,
            icon: product.icon
        });
    }
    
    // Reset quantity input
    quantityInput.value = '0';
    updateQuantity(productId, 0);
    
    // Update cart display
    updateCartDisplay();
    updateCartCount();
    
    // Show success animation
    showAddToCartSuccess(productId);
    
    // Auto-open cart if it's the first item
    if (cart.length === 1) {
        setTimeout(() => {
            toggleCart();
        }, 500);
    }
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
    updateCartCount();
    
    // Close cart if empty
    if (cart.length === 0) {
        setTimeout(() => {
            toggleCart();
        }, 300);
    }
}

// Function to update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const checkoutBtn = document.getElementById('checkoutBtn');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <small>Add some delicious halal meat to get started!</small>
            </div>
        `;
        cartTotal.textContent = '0.00';
        checkoutBtn.disabled = true;
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-details">
                    ${item.quantity}kg × $${item.price.toFixed(2)}
                </div>
                <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
            </div>
            <div class="cart-item-controls">
                <div class="quantity-controls">
                    <button class="quantity-btn decrease" onclick="updateCartQuantity(${item.id}, ${item.quantity - 0.5})" ${item.quantity <= 0.5 ? 'disabled' : ''}>
                        <i class="fas fa-minus"></i>
                    </button>
                    <span class="quantity-display">${item.quantity}kg</span>
                    <button class="quantity-btn increase" onclick="updateCartQuantity(${item.id}, ${item.quantity + 0.5})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})" title="Remove item">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = total.toFixed(2);
    checkoutBtn.disabled = false;
}

// Function to update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cartCount');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems.toFixed(1);
    
    // Add animation to cart icon
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.style.transform = 'scale(1.1)';
    setTimeout(() => {
        cartIcon.style.transform = 'scale(1)';
    }, 200);
}

// Function to toggle cart sidebar
function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('overlay');
    
    isCartOpen = !isCartOpen;
    
    if (isCartOpen) {
        cartSidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        cartSidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Function to show add to cart success animation
function showAddToCartSuccess(productId) {
    const addButton = document.getElementById(`add-btn-${productId}`);
    const originalText = addButton.innerHTML;
    
    addButton.innerHTML = `
        <i class="fas fa-check"></i>
        Added to Cart!
    `;
    addButton.style.background = '#25d366';
    
    setTimeout(() => {
        addButton.innerHTML = originalText;
        addButton.style.background = '';
    }, 1500);
}

// Function to get cart total
function getCartTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// Function to get cart items count
function getCartItemsCount() {
    return cart.reduce((count, item) => count + item.quantity, 0);
}

// Function to clear cart
function clearCart() {
    cart = [];
    updateCartDisplay();
    updateCartCount();
}

// Function to update cart item quantity
function updateCartQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex > -1) {
        cart[itemIndex].quantity = newQuantity;
        updateCartDisplay();
        updateCartCount();
    }
}

// Function to get cart summary for checkout
function getCartSummary() {
    return cart.map(item => ({
        name: item.name,
        quantity: item.quantity,
        price: item.price,
        total: item.price * item.quantity
    }));
}

// Close cart when clicking outside
document.addEventListener('click', function(event) {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (isCartOpen && 
        !cartSidebar.contains(event.target) && 
        !cartIcon.contains(event.target)) {
        // Don't close if clicking on product buttons
        if (!event.target.closest('.product-card')) {
            toggleCart();
        }
    }
});

// Handle escape key to close cart
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && isCartOpen) {
        toggleCart();
    }
});

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartDisplay();
    updateCartCount();
});