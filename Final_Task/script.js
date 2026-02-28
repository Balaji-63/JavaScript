// DOM Elements
const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cartCount = document.getElementById("cartCount");

let allProducts = [];
let cart = [];   


fetch("https://fakestoreapi.com/products")
  .then(response => response.json())   
  .then(data => {
    allProducts = data;
    renderProducts(allProducts);     
  });


function renderProducts(products) {

  productContainer.innerHTML = "";   

  products.map(product => {

    
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" />
      <h4>${product.title}</h4>
      <p><strong>Price:</strong> $${product.price}</p>
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Rating:</strong> ⭐ ${product.rating.rate}</p>
      <button>Add to Cart</button>
    `;

    const button = card.querySelector("button");
    button.addEventListener("click", () => addToCart(product));

    productContainer.appendChild(card);
  });
}


function addToCart(product) {

  const exists = cart.some(item => item.id === product.id);

  if (exists) {

    const item = cart.find(item => item.id === product.id);
    item.quantity += 1;
  } else {

    cart.push({ ...product, quantity: 1 });
  }

  updateCartCount();
  alert("Product Added Successfully");
}



function updateCartCount() {

  cartCount.textContent = `Cart (${cart.length})`;
}


searchInput.addEventListener("input", function () {

  const value = this.value.toLowerCase();  

  const filtered = allProducts.filter(product =>
    product.title.toLowerCase().includes(value)
  );

  renderProducts(filtered);   
});



categoryFilter.addEventListener("change", function () {

  const selected = this.value;

  if (selected === "all") {
    renderProducts(allProducts);   
    const filtered = allProducts.filter(product =>
      product.category === selected   
    );

    renderProducts(filtered);
  }
});