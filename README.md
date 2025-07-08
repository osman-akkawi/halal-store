# Halal Meat Store - Professional E-commerce Website

A modern, responsive web-based halal meat store with WhatsApp integration for order processing. Built with pure HTML, CSS, and JavaScript - no backend required!

## 🌟 Features

- **Responsive Design**: Mobile-friendly and works on all devices
- **Bilingual Product Catalog**: Display halal meat products with Arabic/English names, images, prices, and descriptions
- **Shopping Cart**: Add/remove items with quantity selection in kilograms
- **Real-time Calculations**: Automatic subtotal and total price calculations
- **Customer Information**: Form for name, phone, address, and optional Google Maps location
- **WhatsApp Integration**: Send complete order receipt to store owner via WhatsApp
- **Professional UI**: Modern design with smooth animations and transitions
- **No Login Required**: Simple checkout process without user accounts
- **Order Lock**: Prevents editing after order submission
- **Arabic Support**: Full Arabic text support for Middle Eastern customers



## 📁 Project Structure

```
halal-meat-store/
├── index.html              # Main HTML file
├── css/
│   └── style.css           # All styles and responsive design
├── js/
│   ├── products.js         # Product data and display functions
│   ├── cart.js            # Shopping cart functionality
│   ├── checkout.js        # Checkout and WhatsApp integration
│   └── main.js            # General utilities and initialization
├── images/
│   ├── beef.svg           # Product images (SVG placeholders)
│   ├── chicken.svg
│   ├── lamb.svg
│   ├── ground-beef.svg
│   ├── chicken-wings.svg
│   ├── beef-ribs.svg
│   ├── mutton-chops.svg
│   ├── chicken-breast.svg
│   └── beef-steak.svg
└── README.md              # This file
```

## 🚀 Quick Start

1. **Replace Images**: Replace the SVG placeholder images in the `images/` folder with your actual product photos
2. **Update WhatsApp Number**: Edit the WhatsApp number in `js/checkout.js`
3. **Customize Products**: Modify product data in `js/products.js`
4. **Deploy**: Upload to GitHub Pages or any web hosting service

## ⚙️ Customization

### 1. Update WhatsApp Number

Edit `js/checkout.js` and change the WhatsApp number:

```javascript
// Replace with your actual WhatsApp number (include country code, no + sign)
const STORE_WHATSAPP_NUMBER = '1234567890';
```

### 2. Add/Edit Products

Modify the products array in `js/products.js`:

```javascript
const products = [
    {
        id: 1,
        name: "Your Product Name",
        price: 19.99,
        image: "images/your-image.jpg",
        icon: "🥩",
        description: "Product description"
    },
    // Add more products...
];
```

### 3. Replace Product Images

- Replace SVG files in the `images/` folder with your actual product photos
- Recommended image size: 400x300 pixels
- Supported formats: JPG, PNG, SVG
- Update image paths in `products.js` if needed

### 4. Customize Colors and Styling

Edit `css/style.css` to change:
- Brand colors
- Fonts
- Layout spacing
- Animation effects

### 5. Update Store Information

Modify the header and hero section in `index.html`:
- Store name
- Tagline
- Contact information

## 📱 WhatsApp Integration

The website automatically generates a formatted order receipt and sends it to your WhatsApp number. The receipt includes:

- Customer information (name, phone, address)
- Order details (products, quantities, prices)
- Total amount
- Order timestamp
- Optional Google Maps location

## 🌐 Deployment to GitHub Pages

1. **Create a GitHub Repository**:
   - Go to GitHub and create a new repository
   - Name it something like `halal-meat-store`

2. **Upload Files**:
   - Upload all project files to the repository
   - Make sure `index.html` is in the root directory

3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"

4. **Access Your Website**:
   - Your site will be available at: `https://yourusername.github.io/repository-name`
   - It may take a few minutes to become active

## 📱 Mobile Features

- Touch-friendly interface
- Swipe gestures for cart navigation
- Optimized for small screens
- Fast loading on mobile networks

## 🔧 Technical Features

- **Pure Frontend**: No server or database required
- **Responsive Grid**: CSS Grid and Flexbox for layout
- **Modern JavaScript**: ES6+ features with fallbacks
- **Performance Optimized**: Lazy loading and efficient animations
- **Cross-browser Compatible**: Works on all modern browsers
- **SEO Friendly**: Semantic HTML structure

## 🎨 Design Features

- **Modern UI**: Clean, professional design
- **Smooth Animations**: CSS transitions and transforms
- **Loading States**: Visual feedback for user actions
- **Error Handling**: User-friendly error messages
- **Accessibility**: Keyboard navigation and screen reader support

## 📞 Support

For customization help or technical support:
1. Check the code comments for guidance
2. Modify the CSS variables for quick color changes
3. Use browser developer tools for debugging

## 📄 License

This project is open source and available under the MIT License.

---

**Ready to launch your halal meat store online!** 🥩✨

Replace the placeholder images, update your WhatsApp number, and deploy to start taking orders immediately.