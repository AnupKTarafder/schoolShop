function addToCart(i) {
	pCheck = localStorage.getItem('products');
	let products = [];
	let item = {};
	if (pCheck) {
		products = JSON.parse(products);
	}
	if (products[i]) {
		item = products[i];
		item.count++;
		item.inCart = true;
		this.setDataToLocalStorage(i, item, products);
	} else {
		item = {
			count: 1,
			inCart: true
		};
		this.setDataToLocalStorage(i, item, products);
	}
}

function cartCount() {
	// document.getElementById('cartCount').innerHTML = count;
}

var divStr = '';
for (let i = 0; i < 12; i++) {
	divStr += `<div class="card p-8">
				<span>Item ${i+1}</span>
				<img src="./images/${this.imageArray[i]}">
				<span>Price: $${priceArray[i]}</span>
				<button class="cursor-pointer" onclick="addToCart(${i})">Add to cart</button>
			</div>`
}
document.getElementById('main-content').innerHTML += divStr;