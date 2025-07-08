// Product data for Halal Meat Store
const products = [
    // Lamb Meat - لحم غنم
    {
        id: 1,
        name: 'ريش غنم - Lamb Chops',
        price: 32.99,
        image: 'images/lamb-chops.svg',
        icon: '🐑',
        description: 'Premium halal lamb chops, tender and flavorful'
    },
    {
        id: 2,
        name: 'فخذ غنم - Lamb Leg',
        price: 28.99,
        image: 'images/lamb-leg.svg',
        icon: '🐑',
        description: 'Fresh halal lamb leg, perfect for roasting'
    },
    {
        id: 3,
        name: 'كتف غنم - Lamb Shoulder',
        price: 26.99,
        image: 'images/lamb-shoulder.svg',
        icon: '🐑',
        description: 'Tender lamb shoulder, ideal for slow cooking'
    },
    {
        id: 4,
        name: 'موزة غنم - Lamb Shank',
        price: 24.99,
        image: 'images/lamb-shank.svg',
        icon: '🐑',
        description: 'Succulent lamb shank, rich in flavor'
    },
    {
        id: 5,
        name: 'بيت الكلاوي - Loin',
        price: 35.99,
        image: 'images/lamb-loin.svg',
        icon: '🐑',
        description: 'Premium lamb loin, tender and lean'
    },
    {
        id: 6,
        name: 'رقبة غنم - Neck',
        price: 18.99,
        image: 'images/lamb-neck.svg',
        icon: '🐑',
        description: 'Lamb neck, perfect for stews and soups'
    },
    {
        id: 7,
        name: 'كرشة - Tripe',
        price: 15.99,
        image: 'images/tripe.svg',
        icon: '🍖',
        description: 'Fresh halal tripe, traditional delicacy'
    },
    {
        id: 8,
        name: 'كبد غنم - Liver',
        price: 16.99,
        image: 'images/lamb-liver.svg',
        icon: '🍖',
        description: 'Fresh lamb liver, rich in nutrients'
    },
    {
        id: 9,
        name: 'قلب غنم - Heart',
        price: 14.99,
        image: 'images/lamb-heart.svg',
        icon: '❤️',
        description: 'Fresh lamb heart, lean and nutritious'
    },
    {
        id: 10,
        name: 'كلى - Kidney',
        price: 13.99,
        image: 'images/kidney.svg',
        icon: '🍖',
        description: 'Fresh halal kidney, traditional ingredient'
    },
    {
        id: 11,
        name: 'رأس غنم - Sheep Head',
        price: 22.99,
        image: 'images/sheep-head.svg',
        icon: '🐑',
        description: 'Traditional sheep head, authentic flavor'
    },
    {
        id: 12,
        name: 'مفروم غنم - Ground Lamb',
        price: 21.99,
        image: 'images/ground-lamb.svg',
        icon: '🍖',
        description: 'Freshly ground halal lamb, versatile'
    },
    {
        id: 13,
        name: 'كفتة - Kofta',
        price: 19.99,
        image: 'images/kofta.svg',
        icon: '🍖',
        description: 'Traditional lamb kofta, seasoned and ready'
    },
    {
        id: 14,
        name: 'سجق غنم - Lamb Sausage',
        price: 17.99,
        image: 'images/lamb-sausage.svg',
        icon: '🌭',
        description: 'Spiced lamb sausage, authentic taste'
    },
    // Veal/Beef Meat - لحم عجل
    {
        id: 15,
        name: 'ريش بقر - Beef Ribs',
        price: 29.99,
        image: 'images/beef-ribs.svg',
        icon: '🐄',
        description: 'Premium beef ribs, perfect for BBQ'
    },
    {
        id: 16,
        name: 'فخذ عجل - Veal Leg',
        price: 33.99,
        image: 'images/veal-leg.svg',
        icon: '🐄',
        description: 'Tender veal leg, premium quality'
    },
    {
        id: 17,
        name: 'كتف عجل - Veal Shoulder',
        price: 31.99,
        image: 'images/veal-shoulder.svg',
        icon: '🐄',
        description: 'Succulent veal shoulder, ideal for roasting'
    },
    {
        id: 18,
        name: 'موزة عجل - Veal Shank',
        price: 27.99,
        image: 'images/veal-shank.svg',
        icon: '🐄',
        description: 'Rich veal shank, perfect for osso buco'
    },
    {
        id: 19,
        name: 'عرق فليتو - Tenderloin',
        price: 45.99,
        image: 'images/tenderloin.svg',
        icon: '🥩',
        description: 'Premium beef tenderloin, melt-in-mouth'
    },
    {
        id: 20,
        name: 'صدر بقر - Brisket',
        price: 25.99,
        image: 'images/brisket.svg',
        icon: '🐄',
        description: 'Beef brisket, perfect for slow cooking'
    },
    {
        id: 21,
        name: 'بيت الكلاوي - Loin',
        price: 38.99,
        image: 'images/beef-loin.svg',
        icon: '🐄',
        description: 'Premium beef loin, tender and juicy'
    },
    {
        id: 22,
        name: 'رقبة عجل - Neck',
        price: 19.99,
        image: 'images/veal-neck.svg',
        icon: '🐄',
        description: 'Veal neck, excellent for braising'
    },
    {
        id: 23,
        name: 'كبد عجل - Liver',
        price: 18.99,
        image: 'images/veal-liver.svg',
        icon: '🍖',
        description: 'Fresh veal liver, nutrient-rich'
    },
    {
        id: 24,
        name: 'قلب عجل - Heart',
        price: 16.99,
        image: 'images/veal-heart.svg',
        icon: '❤️',
        description: 'Fresh veal heart, lean protein'
    },
    {
        id: 25,
        name: 'كرشة - Tripe',
        price: 15.99,
        image: 'images/beef-tripe.svg',
        icon: '🍖',
        description: 'Fresh beef tripe, traditional preparation'
    },
    {
        id: 26,
        name: 'لسان عجل - Tongue',
        price: 23.99,
        image: 'images/veal-tongue.svg',
        icon: '👅',
        description: 'Tender veal tongue, delicate flavor'
    },
    {
        id: 27,
        name: 'رأس عجل - Veal Head',
        price: 26.99,
        image: 'images/veal-head.svg',
        icon: '🐄',
        description: 'Traditional veal head, authentic taste'
    },
    {
        id: 28,
        name: 'مفروم عجل - Ground Beef',
        price: 20.99,
        image: 'images/ground-beef.svg',
        icon: '🍖',
        description: 'Freshly ground halal beef, versatile'
    },
    {
        id: 29,
        name: 'سجق عجل - Beef Sausage',
        price: 18.99,
        image: 'images/beef-sausage.svg',
        icon: '🌭',
        description: 'Spiced beef sausage, traditional recipe'
    },
    {
        id: 30,
        name: 'كفتة - Kofta',
        price: 19.99,
        image: 'images/beef-kofta.svg',
        icon: '🍖',
        description: 'Traditional beef kofta, seasoned perfectly'
    }
];

// Category switching function
function switchCategory(category) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(category + 'Tab').classList.add('active');
    
    // Update content sections
    document.querySelectorAll('.category-content').forEach(content => content.classList.remove('active'));
    document.getElementById(category + 'Category').classList.add('active');
}

// Function to display products by category
function displayProducts() {
    const lambGrid = document.getElementById('lambProductsGrid');
    const beefGrid = document.getElementById('beefProductsGrid');
    
    if (!lambGrid || !beefGrid) return;
    
    lambGrid.innerHTML = '';
    beefGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        
        // Categorize products based on ID (1-14 are lamb, 15-30 are beef/veal)
        if (product.id <= 14) {
            lambGrid.appendChild(productCard);
        } else {
            beefGrid.appendChild(productCard);
        }
    });
}

// Function to create a product card
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.setAttribute('data-product-id', product.id);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <div class="image-placeholder" style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; font-size: 4rem;">
                ${product.icon}
            </div>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-price">$${product.price.toFixed(2)}/kg</p>
            <div class="quantity-controls">
                <span class="quantity-label">Quantity (kg):</span>
                <div class="quantity-input">
                    <button type="button" class="quantity-btn" onclick="decreaseQuantity(${product.id})">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" class="quantity-value" id="quantity-${product.id}" value="0" min="0" step="0.5" onchange="updateQuantity(${product.id}, this.value)">
                    <button type="button" class="quantity-btn" onclick="increaseQuantity(${product.id})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <button class="add-to-cart" onclick="addToCart(${product.id})" id="add-btn-${product.id}" disabled>
                <i class="fas fa-cart-plus"></i>
                Add to Cart
            </button>
        </div>
    `;
    
    return card;
}

// Function to increase quantity
function increaseQuantity(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const currentValue = parseFloat(quantityInput.value) || 0;
    const newValue = currentValue + 0.5;
    quantityInput.value = newValue.toFixed(1);
    updateQuantity(productId, newValue);
}

// Function to decrease quantity
function decreaseQuantity(productId) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const currentValue = parseFloat(quantityInput.value) || 0;
    const newValue = Math.max(0, currentValue - 0.5);
    quantityInput.value = newValue.toFixed(1);
    updateQuantity(productId, newValue);
}

// Function to update quantity and button state
function updateQuantity(productId, quantity) {
    const addButton = document.getElementById(`add-btn-${productId}`);
    const quantityValue = parseFloat(quantity) || 0;
    
    if (quantityValue > 0) {
        addButton.disabled = false;
        addButton.innerHTML = `
            <i class="fas fa-cart-plus"></i>
            Add ${quantityValue}kg to Cart
        `;
    } else {
        addButton.disabled = true;
        addButton.innerHTML = `
            <i class="fas fa-cart-plus"></i>
            Add to Cart
        `;
    }
}

// Function to get product by ID
function getProductById(productId) {
    return products.find(product => product.id === productId);
}

// Function to format price
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

// Initialize products when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
});