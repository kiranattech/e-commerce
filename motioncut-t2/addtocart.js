// addtocart.js

// Cart object to store items
const cart = {
  items: [],
  total: 0,
};

// Function to update the cart total amount
function updateCartTotal() {
  const totalElement = document.getElementById('cart-total');
  totalElement.textContent = `$${cart.total.toFixed(2)}`;
}

// Function to handle the "Add to Cart" button click
function addToCart(product) {
  // Check if the product is already in the cart
  const existingProduct = cart.items.find(item => item.id === product.id);

  if (existingProduct) {
    // If the product is already in the cart, update its quantity
    existingProduct.quantity++;
  } else {
    // If the product is not in the cart, add it with a quantity of 1
    cart.items.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
  }

  // Update the total amount
  cart.total += product.price;

  // Update the cart display
  updateCartTotal();
}

// Add click event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.btn.add-to-cart');
addToCartButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Get product details from the button's data attributes
    const productId = this.getAttribute('data-product-id');
    const productName = this.getAttribute('data-product-name');
    const productPrice = parseFloat(this.getAttribute('data-product-price'));

    // Create a product object
    const product = {
      id: productId,
      name: productName,
      price: productPrice,
    };

    // Add the product to the cart
    addToCart(product);
  });
});
