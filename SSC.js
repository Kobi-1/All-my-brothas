const cartItems = [];

const products = document.querySelectorAll('#products li');
const cartItemsList = document.querySelector('#cart ul#cart-items');
const checkoutButton = document.querySelector('#cart button#checkout');

products.forEach(product => {
	product.addEventListener('click', () => {
		const name = product.querySelector('h3').innerText;
		const price = parseFloat(product.querySelector('p').innerText.replace('$', ''));
		cartItems.push({ name, price });
		updateCart();
	});
});

function updateCart() {
	cartItemsList.innerHTML = '';
	let total = 0;
	cartItems.forEach((item, index) => {
		const li = document.createElement('li');
		li.innerText = `${item.name} ($${item.price.toFixed(2)})`;
		cartItemsList.appendChild(li);
		total += item.price;
	});
	document.querySelector('#cart p').innerText = `Total: $${total.toFixed(2)}`;
	checkoutButton.disabled = cartItems.length === 0;
}

checkoutButton.addEventListener('click', () => {
	alert('Thank you for your purchase!');
	cartItems.length = 0;
	updateCart();
});
function contact(){
	window.location.href = "Contact.html";
  }