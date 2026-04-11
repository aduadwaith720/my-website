// --- Data Initialisation ---
const initialProducts = [
    { id: 1, name: 'Premium ANC Headphones', category: 'electronics', price: 6999, oldPrice: 9999, rating: '⭐⭐⭐⭐⭐', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80', description: 'Immerse yourself in pure sound with Active Noise Cancelling.' },
    { id: 2, name: 'Urban Sneakers', category: 'fashion', price: 2499, oldPrice: 3999, rating: '⭐⭐⭐⭐☆', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', description: 'Stylish and comfortable sneakers for daily urban wear.' },
    { id: 3, name: 'ProBook Laptop 15"', category: 'electronics', price: 55999, oldPrice: 65999, rating: '⭐⭐⭐⭐⭐', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80', description: 'High-performance laptop for professionals and creators.' },
    { id: 4, name: 'Smart Phone', category: 'mobile', price: 42999, oldPrice: 49999, rating: '⭐⭐⭐⭐⭐', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80', description: 'Next-gen smartphone with an incredible camera system.' },
    { id: 5, name: 'Bluetooth Soundbox', category: 'electronics', price: 3499, oldPrice: 4599, rating: '⭐⭐⭐⭐☆', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80', description: 'Portable speaker delivering massive sound and deep bass.' },
    { id: 6, name: 'Leather Messenger Bag', category: 'accessories', price: 1899, oldPrice: 2599, rating: '⭐⭐⭐⭐☆', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80', description: 'Premium crafted leather bag to carry your essentials in style.' },
    { id: 7, name: ' Smartwatch', category: 'electronics', price: 9999, oldPrice: 12999, rating: '⭐⭐⭐⭐⭐', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80', description: 'Advanced fitness tracking meets elegant design.' },
    { id: 8, name: 'Classic Sunglasses', category: 'accessories', price: 1499, oldPrice: 2199, rating: '⭐⭐⭐⭐☆', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80', description: 'Timeless styling and 100% UV protection.' },
    { id: 9, name: 'Vintage Camera', category: 'electronics', price: 29999, oldPrice: 34999, rating: '⭐⭐⭐⭐⭐', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80', description: 'Capture memories with this classic aesthetic.' },
    { id: 10, name: 'Denim Jacket', category: 'fashion', price: 2999, oldPrice: 4499, rating: '⭐⭐⭐⭐⭐', image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=500&q=80', description: 'A timeless, rugged denim jacket for any season.' },
    { id: 11, name: 'Pro Controller', category: 'electronics', price: 4499, oldPrice: 5999, rating: '⭐⭐⭐⭐⭐', image: 'https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=500&q=80', description: 'Gain the competitive edge with advanced ergonomics.' },
    { id: 12, name: 'Canvas Backpack', category: 'accessories', price: 2299, oldPrice: 3199, rating: '⭐⭐⭐⭐☆', image: 'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500&q=80', description: 'Spacious and stylish, perfect for the modern commute.' },
    { id: 13, name: 'Ergonomic Wireless Mouse', category: 'electronics', price: 3499, oldPrice: 4299, rating: '⭐⭐⭐⭐⭐', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80', description: 'Experience ultimate comfort with precision tracking and an ergonomic design sculpted for your hand.' },
    { id: 14, name: 'Mechanical Keyboard', category: 'electronics', price: 7999, oldPrice: 9999, rating: '⭐⭐⭐⭐⭐', image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80', description: 'Tactile, responsive, and incredibly satisfying. Features customizable RGB lighting and premium switches.' },
    { id: 15, name: 'Chronograph Watch', category: 'fashion', price: 14999, oldPrice: 18999, rating: '⭐⭐⭐⭐☆', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=500&q=80', description: 'A masterpiece of horology. Water-resistant, stainless steel body with intricate dial details.' },
    { id: 16, name: 'Luxury Handbag', category: 'fashion', price: 8999, oldPrice: 11999, rating: '⭐⭐⭐⭐⭐', image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=500&q=80', description: 'Crafted from authentic leather, this designer bag combines elegance with everyday practicality.' },
    { id: 17, name: 'Gaming Headset Pro', category: 'electronics', price: 5499, oldPrice: 6999, rating: '⭐⭐⭐⭐☆', image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80', description: 'Crystal clear 7.1 surround sound to pinpoint your enemies, featuring a noise-canceling microphone.' },
    { id: 18, name: 'Silver Ring', category: 'accessories', price: 1999, oldPrice: 2999, rating: '⭐⭐⭐⭐⭐', image: 'https://imgs.search.brave.com/5XwoY9upCkD-8XVeOnfGY7F2sHru3qZNasRF17Jigow/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/emFsa2FyaS5jb20v/Y2RuL3Nob3AvZmls/ZXMvWkxSLTEwNzIt/Ml8wZmFmZjc4MC0w/ZjRmLTQzMDMtYWJi/NC1hOTM0Mzk4NjZk/MGEuanBnP3Y9MTc2/NzQ1MDE1NSZ3aWR0/aD01MzM', description: 'A beautifully crafted sterling silver ring, simple yet incredibly elegant for daily wear.' },
    { id: 19, name: 'True Wireless Earbuds', category: 'electronics', price: 4999, oldPrice: 6999, rating: '⭐⭐⭐⭐⭐', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80', description: 'Experience zero-lag audio with these crystal-clear, sweat-proof wireless earbuds.' },
    { id: 20, name: 'Ergonomic Office Chair', category: 'accessories', price: 12999, oldPrice: 15999, rating: '⭐⭐⭐⭐☆', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80', description: 'Protect your back during long hours with premium lumbar support and breathable mesh.' },
    { id: 21, name: 'Pro Running Shoes', category: 'fashion', price: 3999, oldPrice: 5499, rating: '⭐⭐⭐⭐⭐', image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=500&q=80', description: 'Ultra-lightweight running shoes engineered for speed and maximum comfort.' },
    { id: 22, name: '4K Ultra HD Smart TV', category: 'electronics', price: 39999, oldPrice: 49999, rating: '⭐⭐⭐⭐⭐', image: 'https://imgs.search.brave.com/BXHK3o7xgqzQB-zDhmIPEki7nJxdpRQVQpkWmiqPBmc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NTFUdzVXOWZnOUwu/anBn', description: 'Breathtaking 4K resolution with vibrant colors that bring your favorite movies to life.' },
    { id: 23, name: 'Classic Leather Wallet', category: 'accessories', price: 1299, oldPrice: 1999, rating: '⭐⭐⭐⭐☆', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80', description: 'Slim, elegant, and crafted from 100% genuine full-grain leather.' },
    { id: 24, name: 'Premium Cotton T-Shirt', category: 'fashion', price: 899, oldPrice: 1499, rating: '⭐⭐⭐⭐⭐', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80', description: 'A perfectly tailored organic cotton t-shirt that goes with almost every outfit.' },
    { id: 25, name: 'Aviator Sunglasses', category: 'accessories', price: 1899, oldPrice: 2799, rating: '⭐⭐⭐⭐⭐', image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=500&q=80', description: 'Classic aviator design featuring polarized lenses and a lightweight metal frame.' },
    { id: 26, name: 'Cozy Knit Sweater', category: 'fashion', price: 2499, oldPrice: 3499, rating: '⭐⭐⭐⭐⭐', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=500&q=80', description: 'Stay warm and stylish with this incredibly soft, high-quality knit sweater.' },
    { id: 27, name: 'Leather Watch Band', category: 'accessories', price: 1199, oldPrice: 1599, rating: '⭐⭐⭐⭐⭐', image: 'https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?w=500&q=80', description: 'Elevate your smartwatch with this premium genuine leather watch band.' }
];

let cart = JSON.parse(localStorage.getItem('shopCart')) || [];
let currentCategory = 'all';
let currentSort = 'default';

// --- Rendering ---
function renderProducts(products) {
    const list = document.getElementById("productList");
    list.innerHTML = "";
    
    products.forEach(p => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <div class="card-img-wrapper" onclick="openProductModal(${p.id})">
                <img src="${p.image}" alt="${p.name}" id="img-${p.id}">
            </div>
            <h3>${p.name}</h3>
            <p class="rating">${p.rating}</p>
            <p class="price">₹${p.price.toLocaleString('en-IN')} <span class="old">₹${p.oldPrice.toLocaleString('en-IN')}</span></p>
            <button onclick="addToCart(event, ${p.id}, '${p.name.replace(/'/g, "\\'")}', ${p.price}, '${p.image}')">Add to Cart</button>
        `;
        list.appendChild(card);
    });
    document.getElementById("resultsCount").innerText = `Showing ${products.length} products`;
}

function updateCartUI() {
    const list = document.getElementById("cartList");
    const countEl = document.getElementById("count");
    const totalEl = document.getElementById("total");
    const checkoutTotal = document.getElementById("checkoutTotal");

    list.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        list.innerHTML = `<div class="empty-cart-msg">Your cart is feeling lonely. Add some products!</div>`;
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            let li = document.createElement("li");
            li.className = "cart-item";
            li.innerHTML = `
                <div class="cart-item-info">
                    <span class="cart-item-title">${item.name}</span>
                    <span class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</span>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${index}, '${item.name.replace(/'/g, "\\'")}')">✖</button>
            `;
            list.appendChild(li);
        });
    }

    countEl.innerText = cart.length;
    totalEl.innerText = total.toLocaleString('en-IN');
    if(checkoutTotal) checkoutTotal.innerText = total.toLocaleString('en-IN');
    
    // Save to LocalStorage
    localStorage.setItem('shopCart', JSON.stringify(cart));
}

// --- Cart Actions ---
function addToCart(event, id, name, price, imgUrl) {
    // Fly animation
    const button = event.target;
    const card = button.closest('.card') || button.parentElement;
    const imageElement = card.querySelector('img') || document.querySelector(`#img-${id}`) || document.querySelector('.modal-body img');
    const cartIcon = document.getElementById('cartBtn');

    if (imageElement && cartIcon) {
        const imgRect = imageElement.getBoundingClientRect();
        const cartRect = cartIcon.getBoundingClientRect();

        const flyingImg = document.createElement('img');
        flyingImg.src = imgUrl;
        flyingImg.className = 'fly-item';
        flyingImg.style.left = `${imgRect.left}px`;
        flyingImg.style.top = `${imgRect.top}px`;
        document.body.appendChild(flyingImg);

        // Trigger reflow
        void flyingImg.offsetWidth;

        flyingImg.style.left = `${cartRect.left + cartRect.width / 2 - 30}px`;
        flyingImg.style.top = `${cartRect.top + cartRect.height / 2 - 30}px`;
        flyingImg.style.opacity = '0';
        flyingImg.style.transform = 'scale(0.2)';

        setTimeout(() => {
            flyingImg.remove();
            cartIcon.style.transform = 'scale(1.1)';
            setTimeout(() => cartIcon.style.transform = 'scale(1)', 200);
            
            // Add logically after animation arrives
            cart.push({ id, name, price, image: imgUrl });
            updateCartUI();
            showToast(`${name} added to cart!`);
        }, 800);
    } else {
        cart.push({ id, name, price, image: imgUrl });
        updateCartUI();
        showToast(`${name} added to cart!`);
    }
}

function removeFromCart(index, name) {
    cart.splice(index, 1);
    updateCartUI();
    showToast(`${name} removed from cart.`, '#ef4444');
}

// --- Filtering & Sorting ---
function filterCategory(category, btnElement) {
    currentCategory = category;
    
    // Update active button state
    document.querySelectorAll('.categories button').forEach(b => b.classList.remove('active'));
    if(btnElement) btnElement.classList.add('active');
    
    applyFilters();
}

function searchProduct() {
    applyFilters();
}

function sortProducts() {
    currentSort = document.getElementById("sortSelect").value;
    applyFilters();
}

function applyFilters() {
    let input = document.getElementById("search").value.toLowerCase();
    
    // Filter
    let filtered = initialProducts.filter(p => {
        let matchesCat = currentCategory === 'all' || p.category === currentCategory;
        let matchesSearch = p.name.toLowerCase().includes(input);
        return matchesCat && matchesSearch;
    });

    // Sort
    if (currentSort === 'low-high') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (currentSort === 'high-low') {
        filtered.sort((a, b) => b.price - a.price);
    }

    renderProducts(filtered);
}

// --- UI Components ---
function toggleCart() {
    document.getElementById("cartDrawer").classList.toggle("open");
    document.getElementById("cartOverlay").classList.toggle("open");
}

function showToast(message, color = "var(--brand-color)") {
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.style.borderLeftColor = color;
    toast.innerText = message;
    
    container.appendChild(toast);
    
    setTimeout(() => toast.classList.add("show"), 10);
    
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- Modals ---
function openProductModal(id) {
    const product = initialProducts.find(p => p.id === id);
    if (!product) return;

    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h2 style="margin-bottom:10px; color:var(--text-primary);">${product.name}</h2>
        <p class="rating">${product.rating}</p>
        <p class="price" style="font-size:1.5rem;">₹${product.price.toLocaleString('en-IN')} <span class="old">₹${product.oldPrice.toLocaleString('en-IN')}</span></p>
        <p>${product.description}</p>
        <button style="width:100%; padding:15px; margin-top:20px; background:var(--brand-color); color:white; border:none; border-radius:8px; font-weight:bold; cursor:pointer;" onclick="addToCart(event, ${product.id}, '${product.name.replace(/'/g, "\\'")}', ${product.price}, '${product.image}'); closeModal('productModal');">Add to Cart Now</button>
    `;
    
    document.getElementById("productModal").classList.add("open");
}

function openCheckout() {
    if (cart.length === 0) {
        showToast("Add some items to checkout first!", "#ef4444");
        return;
    }
    toggleCart(); // Close cart drawer
    document.getElementById("checkoutModal").classList.add("open");
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove("open");
}

function processCheckout(e) {
    e.preventDefault();
    document.getElementById("checkoutModal").classList.remove("open");
    // Show success
    showToast("Payment Successful! Order placed.", "#10b981");
    // Clear cart
    cart = [];
    updateCartUI();
}

// Close modals when clicking outside
window.onclick = function(event) {
    const productModal = document.getElementById("productModal");
    const checkoutModal = document.getElementById("checkoutModal");
    if (event.target == productModal) closeModal("productModal");
    if (event.target == checkoutModal) closeModal("checkoutModal");
}

// --- Dark Mode ---
const themeToggle = document.getElementById('themeToggle');
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
let currentTheme = localStorage.getItem('theme') || (userPrefersDark ? 'dark' : 'light');

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.setAttribute('data-theme', 'dark');
        themeToggle.innerText = '☀️';
    } else {
        document.body.removeAttribute('data-theme');
        themeToggle.innerText = '🌙';
    }
    localStorage.setItem('theme', theme);
    currentTheme = theme;
}

themeToggle.addEventListener('click', () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Initialize on load
setTheme(currentTheme);
renderProducts(initialProducts);
updateCartUI();
