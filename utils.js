function cartCheck() {
	cart.forEach(function (prod) {
		let index = prod.id;
		if (prod.count > 0) {
			document.getElementById("itemAddBtn" + index).classList.add('inCart');
		} else {
			document.getElementById("itemAddBtn" + index).classList.remove('inCart');
		}
	});
}
function cartCount(){
	getDataFromLocalStorage();
	// console.log(cart);
	cartCheck();
	populateModal();
}
function addToCart(i) {
	// debugger;
	pCheck = localStorage.getItem('products');
	let products = {};
	let item = {};
	if (pCheck) {
		products = JSON.parse(pCheck);
	}
	if (products[i]) {
		item = products[i];
		item.count++;
		item.inCart = true;
		this.setDataToLocalStorage(i, item, products);
	} else {
		item = {
			id: i,
			count: 1,
			inCart: true
		};
		this.setDataToLocalStorage(i, item, products);
	}
	cartCheck();
	populateModal();
}
function reduceFromCart(i) {
	let item = {};
	products = JSON.parse(localStorage.getItem('products'));
	item = products[i];
	item.count--;
	item.inCart = true;
	setDataToLocalStorage(i, item, products);
	cartCheck();
	populateModal();
}