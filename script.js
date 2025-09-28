const addButtons = document.querySelectorAll('.add-btn');
const cartList = document.getElementById('cart-list');
const cartTotal = document.getElementById('cart-total');

let cart = [];

addButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.closest('.menu-item');
    const name = item.getAttribute('data-name');
    const price = parseInt(item.getAttribute('data-price'));

    // Cek apakah item sudah ada di keranjang
    const existingItem = cart.find(i => i.name === name);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      cart.push({ name, price, qty: 1 });
    }

    updateCartUI();
  });
});

function updateCartUI() {
  cartList.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const subtotal = item.price * item.qty;
    total += subtotal;

    const li = document.createElement('li');
    li.innerHTML = `${item.name} x ${item.qty} <span>Rp ${subtotal.toLocaleString()}</span>`;
    cartList.appendChild(li);
  });

  cartTotal.textContent = `Total: Rp ${total.toLocaleString()}`;
}
