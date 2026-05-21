// ===============================
// NAVBAR ACTIVE LINK HIGHLIGHT
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add("active");
        }
    });
});


// ===============================
// SIMPLE PRODUCT CLICK EFFECT
// ===============================
const products = document.querySelectorAll(".product-item");

products.forEach(product => {
    product.addEventListener("click", () => {
        product.classList.toggle("selected");
    });
});


// ===============================
// PRODUCT SEARCH FILTER (PRODUCT PAGE)
// ===============================
const searchBox = document.querySelector(".search-box");

if (searchBox) {
    searchBox.addEventListener("click", () => {
        const keyword = prompt("Search for a product:");

        if (!keyword) return;

        const items = document.querySelectorAll(".product-item");

        items.forEach(item => {
            const text = item.innerText.toLowerCase();

            if (text.includes(keyword.toLowerCase())) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
}


// ===============================
// SIMPLE SLIDER (BRANDS SECTION)
// ===============================
const sliderText = document.querySelector(".slider-box");
const arrows = document.querySelectorAll(".arrows span");

if (sliderText && arrows.length === 2) {
    let slides = [
        "HP - Premium Quality",
        "Dell - Business Grade",
        "Lenovo - Performance Machines"
    ];

    let index = 0;

    function updateSlide() {
        sliderText.innerText = slides[index];
    }

    arrows[0].addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        updateSlide();
    });

    arrows[1].addEventListener("click", () => {
        index = (index + 1) % slides.length;
        updateSlide();
    });
}


// ===============================
// CONTACT FORM VALIDATION
// ===============================
const contactForm = document.querySelector("#contact form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = contactForm.querySelectorAll("input, textarea");

        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                valid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "2px solid green";
            }
        });

        if (valid) {
            alert("Message sent successfully!");
            contactForm.reset();
        } else {
            alert("Please fill in all fields.");
        }
    });
}
// ===============================
// ADD TO CART
// ===============================
function addToCart(name, price) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
        name: name,
        price: price,
        qty: 1
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");
}


// ===============================
// LOAD CART (CART PAGE)
// ===============================
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartItems = document.getElementById("cart-items");
    const cartMessage = document.getElementById("cart-message");
    let total = 0;

    if (cart.length === 0) {
        cartMessage.innerText = "Your cart is currently empty.";
        return;
    } else {
        cartMessage.innerText = "";
    }

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price * item.qty;

        cartItems.innerHTML += `
            <div class="card p-3 mb-2">
                <h5>${item.name}</h5>
                <p>Price: P${item.price}</p>

                <button onclick="removeItem(${index})" class="btn btn-danger btn-sm">
                    Remove
                </button>
            </div>
        `;
    });

    document.getElementById("total").innerText = "Total: P" + total;
}


// ===============================
// REMOVE ITEM
// ===============================
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    loadCart();
}


// ===============================
// AUTO LOAD CART PAGE
// ===============================
window.onload = function () {
    if (document.getElementById("cart-items")) {
        loadCart();
    }
};
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart");
}