function setDataToLocalStorage(i, item, products) {
	products[i] = item;
	console.log(products);
	// debugger;
	if (cart.find(a => a.id === item.id)) {
		cart[cart.indexOf(cart.find(a => a.id === item.id))].count = item.count;
	} else {
		cart.push(item);
	}
	let pString = JSON.stringify(products);
	// debugger;
	console.log(pString, cart);
	localStorage.setItem('products', pString);
}

function getDataFromLocalStorage() {
	let products = JSON.parse(localStorage.getItem('products'));
	for (let prod in products) {
		cart.push(products[prod]);
	}
}