function addToCart(i) {
	pCheck = localStorage.getItem('products');
	let products = [];
	let item = {};
	if (pCheck) {
		products = JSON.parse(products);
	}
	if (products['item' + i]) {
		item = products['item' + i];
		item.count++;
		item.inCart = true;
		products['item' + i] = item;
		pString = JSON.stringify(products);
		localStorage.setItem('products', pString);
	} else {
		item = {count: 0, inCart: false};
		products['item' + i] = item;
		pString = JSON.stringify(products);
		localStorage.setItem('products', pString);
	}
}

function cartCount() {
	// document.getElementById('cartCount').innerHTML = count;
}


for (let i = 0; i < 4; i++) {
	let divStr = '<div>';
	for (let j = 0; j < 3; j++) {
		let index = i * 3 + j;
		divStr += `<div class="card p-8">
						<span>Item ${index+1}</span>
						<img src="./images/${this.imageArray[index]}">
						<span>Price: $${priceArray[index]}</span>
						<button class="cursor-pointer" onclick="addToCart(${index})">Add to cart</button>
					</div>`
		console.log(index);
	}
	divStr += '</div>';
	document.getElementById('main-content').innerHTML += divStr;
}