// Checkout functionality
let isCheckoutOpen = false;
let orderSubmitted = false;

// Store owner's WhatsApp number (replace with actual number)
const STORE_WHATSAPP_NUMBER = '96171808940'; // Lebanese WhatsApp number

// Function to show checkout modal
function showCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const checkoutModal = document.getElementById('checkoutModal');
    const overlay = document.getElementById('overlay');
    
    // Update order summary
    updateOrderSummary();
    
    // Show modal
    checkoutModal.classList.add('active');
    overlay.classList.add('active');
    isCheckoutOpen = true;
    
    // Focus on first input
    setTimeout(() => {
        document.getElementById('customerName').focus();
    }, 300);
}

// Function to close checkout modal
function closeCheckout() {
    const checkoutModal = document.getElementById('checkoutModal');
    const overlay = document.getElementById('overlay');
    
    checkoutModal.classList.remove('active');
    if (!isCartOpen) {
        overlay.classList.remove('active');
    }
    isCheckoutOpen = false;
}

// Function to close all modals
function closeAll() {
    if (isCheckoutOpen) {
        closeCheckout();
    }
    if (isCartOpen) {
        toggleCart();
    }
}

// Function to update order summary
function updateOrderSummary() {
    const orderSummary = document.getElementById('orderSummary');
    const finalTotal = document.getElementById('finalTotal');
    
    let summaryHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        summaryHTML += `
            <div class="summary-item">
                <div>
                    <strong>${item.name}</strong><br>
                    <small>${item.quantity}kg × $${item.price.toFixed(2)}</small>
                </div>
                <div><strong>$${itemTotal.toFixed(2)}</strong></div>
            </div>
        `;
    });
    
    orderSummary.innerHTML = summaryHTML;
    finalTotal.textContent = total.toFixed(2);
}

// Function to validate form
function validateForm() {
    const customerName = document.getElementById('customerName').value.trim();
    const customerPhone = document.getElementById('customerPhone').value.trim();
    const deliveryAddress = document.getElementById('deliveryAddress').value.trim();
    
    if (!customerName) {
        alert('Please enter your full name');
        document.getElementById('customerName').focus();
        return false;
    }
    
    if (!customerPhone) {
        alert('Please enter your phone number');
        document.getElementById('customerPhone').focus();
        return false;
    }
    
    // Basic phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (!phoneRegex.test(customerPhone.replace(/[\s\-\(\)]/g, ''))) {
        alert('Please enter a valid phone number');
        document.getElementById('customerPhone').focus();
        return false;
    }
    
    if (!deliveryAddress) {
        alert('Please enter your delivery address');
        document.getElementById('deliveryAddress').focus();
        return false;
    }
    
    return true;
}

// Function to generate order receipt text
function generateOrderReceipt() {
    const customerName = document.getElementById('customerName').value.trim();
    const customerPhone = document.getElementById('customerPhone').value.trim();
    const deliveryAddress = document.getElementById('deliveryAddress').value.trim();
    const mapsLocation = document.getElementById('mapsLocation').value.trim();
    
    const currentDate = new Date();
    const orderDate = currentDate.toLocaleDateString();
    const orderTime = currentDate.toLocaleTimeString();
    
    let receipt = `🥩 *HALAL MEAT STORE - ORDER RECEIPT* 🥩\n\n`;
    receipt += `📅 *Date:* ${orderDate}\n`;
    receipt += `⏰ *Time:* ${orderTime}\n\n`;
    
    receipt += `👤 *CUSTOMER INFORMATION*\n`;
    receipt += `*Name:* ${customerName}\n`;
    receipt += `*Phone:* ${customerPhone}\n`;
    receipt += `*Address:* ${deliveryAddress}\n`;
    
    if (mapsLocation) {
        const formattedLocation = formatLocationForReceipt(mapsLocation);
        receipt += `${formattedLocation}\n`;
    }
    
    receipt += `\n🛒 *ORDER DETAILS*\n`;
    receipt += `${'='.repeat(30)}\n`;
    
    let total = 0;
    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        receipt += `${index + 1}. *${item.name}*\n`;
        receipt += `   Quantity: ${item.quantity}kg\n`;
        receipt += `   Price: $${item.price.toFixed(2)}/kg\n`;
        receipt += `   Subtotal: $${itemTotal.toFixed(2)}\n\n`;
    });
    
    receipt += `${'='.repeat(30)}\n`;
    receipt += `💰 *TOTAL AMOUNT: $${total.toFixed(2)}*\n`;
    receipt += `${'='.repeat(30)}\n\n`;
    
    receipt += `📝 *ORDER SUMMARY*\n`;
    receipt += `• Total Items: ${cart.length}\n`;
    receipt += `• Total Weight: ${cart.reduce((sum, item) => sum + item.quantity, 0).toFixed(1)}kg\n`;
    receipt += `• Total Amount: $${total.toFixed(2)}\n\n`;
    
    receipt += `✅ *Please confirm this order and let us know the estimated delivery time.*\n\n`;
    receipt += `Thank you for choosing Halal Meat Store! 🙏`;
    
    return receipt;
}

// Function to submit order via WhatsApp
function submitOrder() {
    if (orderSubmitted) {
        alert('Order has already been submitted!');
        return;
    }
    
    if (!validateForm()) {
        return;
    }
    
    // Generate receipt
    const receipt = generateOrderReceipt();
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${STORE_WHATSAPP_NUMBER}?text=${encodeURIComponent(receipt)}`;
    
    // Disable form
    disableForm();
    
    // Mark order as submitted
    orderSubmitted = true;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Show success message
    setTimeout(() => {
        showSuccessMessage();
        closeCheckout();
        clearCart();
        toggleCart(); // Close cart
    }, 1000);
}

// Function to disable form after submission
function disableForm() {
    const form = document.getElementById('checkoutForm');
    const inputs = form.querySelectorAll('input, textarea, button');
    
    inputs.forEach(input => {
        input.disabled = true;
    });
    
    const submitBtn = document.getElementById('submitOrderBtn');
    submitBtn.innerHTML = `
        <i class="fas fa-check"></i>
        Order Submitted!
    `;
    submitBtn.style.background = '#25d366';
}

// Function to show success message
function showSuccessMessage() {
    const successMessage = document.getElementById('successMessage');
    const overlay = document.getElementById('overlay');
    
    successMessage.classList.add('active');
    overlay.classList.add('active');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        successMessage.classList.remove('active');
        overlay.classList.remove('active');
        
        // Reset form for new orders
        resetForm();
    }, 5000);
}

// Function to reset form
function resetForm() {
    const form = document.getElementById('checkoutForm');
    form.reset();
    
    // Re-enable form
    const inputs = form.querySelectorAll('input, textarea, button');
    inputs.forEach(input => {
        input.disabled = false;
    });
    
    const submitBtn = document.getElementById('submitOrderBtn');
    submitBtn.innerHTML = `
        <i class="fab fa-whatsapp"></i>
        Submit Order via WhatsApp
    `;
    submitBtn.style.background = '';
    
    orderSubmitted = false;
}

// Function to format phone number
function formatPhoneNumber(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length >= 10) {
        if (value.startsWith('1') && value.length === 11) {
            value = value.replace(/(\d{1})(\d{3})(\d{3})(\d{4})/, '+$1 ($2) $3-$4');
        } else if (value.length === 10) {
            value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        }
    }
    
    input.value = value;
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Form submission
    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();
        submitOrder();
    });
    
    // Phone number formatting
    const phoneInput = document.getElementById('customerPhone');
    phoneInput.addEventListener('input', function() {
        formatPhoneNumber(this);
    });
    
    // Close modal on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            if (isCheckoutOpen) {
                closeCheckout();
            }
        }
    });
    
    // Prevent form submission on enter in input fields (except textarea)
    const inputs = document.querySelectorAll('#checkoutForm input');
    inputs.forEach(input => {
        input.addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                // Move to next input
                const formElements = Array.from(checkoutForm.elements);
                const currentIndex = formElements.indexOf(this);
                const nextElement = formElements[currentIndex + 1];
                if (nextElement && nextElement.type !== 'submit') {
                    nextElement.focus();
                }
            }
        });
    });
});

// Auto-save form data to localStorage
function saveFormData() {
    const formData = {
        customerName: document.getElementById('customerName').value,
        customerPhone: document.getElementById('customerPhone').value,
        deliveryAddress: document.getElementById('deliveryAddress').value,
        mapsLocation: document.getElementById('mapsLocation').value
    };
    
    localStorage.setItem('halalMeatStoreFormData', JSON.stringify(formData));
}

// Load form data from localStorage
function loadFormData() {
    const savedData = localStorage.getItem('halalMeatStoreFormData');
    if (savedData) {
        const formData = JSON.parse(savedData);
        
        document.getElementById('customerName').value = formData.customerName || '';
        document.getElementById('customerPhone').value = formData.customerPhone || '';
        document.getElementById('deliveryAddress').value = formData.deliveryAddress || '';
        document.getElementById('mapsLocation').value = formData.mapsLocation || '';
    }
}

// Geolocation functionality
function getCurrentLocation() {
    const locationBtn = document.querySelector('.get-location-btn');
    const locationStatus = document.getElementById('locationStatus');
    const mapsLocationInput = document.getElementById('mapsLocation');
    
    if (!navigator.geolocation) {
        locationStatus.textContent = 'Geolocation is not supported by this browser.';
        locationStatus.className = 'location-status error';
        return;
    }
    
    // Update button state
    locationBtn.disabled = true;
    locationBtn.innerHTML = `
        <i class="fas fa-spinner fa-spin"></i>
        Getting Location...
    `;
    
    locationStatus.textContent = 'Getting your location...';
    locationStatus.className = 'location-status loading';
    
    const options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
    };
    
    navigator.geolocation.getCurrentPosition(
        function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const accuracy = position.coords.accuracy;
            
            // Generate Google Maps link
            const mapsUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
            mapsLocationInput.value = mapsUrl;
            
            // Update status
            locationStatus.innerHTML = `
                <i class="fas fa-check-circle"></i>
                Location obtained (accuracy: ${Math.round(accuracy)}m)
            `;
            locationStatus.className = 'location-status success';
            
            // Reset button
            locationBtn.disabled = false;
            locationBtn.innerHTML = `
                <i class="fas fa-map-marker-alt"></i>
                Get Location
            `;
            
            // Save form data
            saveFormData();
            
            // Show notification
            if (window.HalalMeatStore && window.HalalMeatStore.showNotification) {
                window.HalalMeatStore.showNotification('Location added successfully!', 'success');
            }
        },
        function(error) {
            let errorMessage = '';
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    errorMessage = 'Location access denied by user.';
                    break;
                case error.POSITION_UNAVAILABLE:
                    errorMessage = 'Location information is unavailable.';
                    break;
                case error.TIMEOUT:
                    errorMessage = 'Location request timed out.';
                    break;
                default:
                    errorMessage = 'An unknown error occurred.';
                    break;
            }
            
            locationStatus.innerHTML = `
                <i class="fas fa-exclamation-triangle"></i>
                ${errorMessage}
            `;
            locationStatus.className = 'location-status error';
            
            // Reset button
            locationBtn.disabled = false;
            locationBtn.innerHTML = `
                <i class="fas fa-map-marker-alt"></i>
                Get Location
            `;
        },
        options
    );
}

// Function to format location for receipt
function formatLocationForReceipt(mapsLocation) {
    if (!mapsLocation) return '';
    
    // Check if it's a Google Maps URL with coordinates
    const coordMatch = mapsLocation.match(/q=([+-]?\d*\.?\d+),([+-]?\d*\.?\d+)/);
    if (coordMatch) {
        const lat = parseFloat(coordMatch[1]).toFixed(6);
        const lng = parseFloat(coordMatch[2]).toFixed(6);
        return `📍 *GPS Coordinates:* ${lat}, ${lng}\n*Maps Link:* ${mapsLocation}`;
    }
    
    // If it's just a regular URL
    return `📍 *Location Link:* ${mapsLocation}`;
}

// Add event listeners for auto-save
document.addEventListener('DOMContentLoaded', function() {
    loadFormData();
    
    const formInputs = document.querySelectorAll('#checkoutForm input, #checkoutForm textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', saveFormData);
    });
});