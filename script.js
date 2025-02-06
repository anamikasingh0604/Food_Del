// Cart data
let cart = [];

// Function to update the cart display
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById('cartItems');
  const cartTotalDisplay = document.getElementById('cartTotal');
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<h5 style="color: grey;">Add some items to the cart to checkout.</h5>';

    cartTotalDisplay.textContent = 'Total: $0';
    return;
  }

  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    cartItemsContainer.innerHTML += `
      <div class="cart-item">
        <span>${item.name} - $${item.price} x ${item.quantity}</span>
        <button onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });

  cartTotalDisplay.textContent = `Total: $${total.toFixed(2)}`;
}

// Function to add an item to the cart
function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCartDisplay();
}

// Function to remove an item from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartDisplay();
}

// Modal functionality
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.getElementById('cartModal');
const closeModalBtn = document.querySelector('.close-btn');
const backToMenuBtn = document.getElementById('backToMenuBtn');

cartIcon.addEventListener('click', () => {
  cartModal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // Disable body scroll
  updateCartDisplay();
});

closeModalBtn.addEventListener('click', () => {
  cartModal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Enable body scroll
});

backToMenuBtn.addEventListener('click', () => {
  cartModal.style.display = 'none';
  document.body.style.overflow = 'auto'; // Enable body scroll
});

window.addEventListener('click', (event) => {
  if (event.target === cartModal) {
    cartModal.style.display = 'none';
  }
});
document.addEventListener('DOMContentLoaded', () => {
  const requestDishBtn = document.getElementById('requestDishBtn');
  const requestDishModal = document.getElementById('requestDishModal');
  const cancelBtn = document.getElementById('cancelBtn');
  const submitBtn = document.getElementById('submitBtn');

  requestDishBtn.addEventListener('click', () => {
      requestDishModal.style.display = 'flex';
  });

  cancelBtn.addEventListener('click', () => {
      requestDishModal.style.display = 'none';
  });

  submitBtn.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent form submission
      requestDishModal.style.display = 'none';
  });
});
const carousel = document.querySelector('.carousel-items');
const items = document.querySelectorAll('.item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});


// Example: Adding items to the cart
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);
    addToCart(name, price);
  });
});
