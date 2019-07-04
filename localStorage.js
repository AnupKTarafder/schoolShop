function setDataToLocalStorage(i, item, products) {
	products[i] = item;
	console.log(products);
	let pString = JSON.stringify(products);
	debugger;
	console.log(pString);
	localStorage.setItem('products', pString);
}