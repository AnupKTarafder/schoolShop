var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
	modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
	if (event.target === modal) {
		toggleModal();
	}
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

// localStorage.getItem('products').addEventListener('change', function() {
// 	console.log(localStorage.products)
// });

function populateModal() {
	let cardStr = `<div style='display: flex; flex-direction: column; margin: 20px 0'>`;
	let sum = 0;
	if (cart.find(a=>a.count>0)) {
		cart.forEach(item => {
			let i = item['id'];
			cardStr += item['count'] > 0 ? `<div style='display: flex; flex-direction: row; margin: 20px 0'>
						<img src="./images/${imageArray[i]}" style='width: 80px; border-radius: 5px'>
						<div style='display: flex; flex-direction: column; padding-left: 10px'>
							<span>Item ${i+1}($${priceArray[i]})</span> 
							<div style='display: flex; flex-direction: row; align-items: baseline'>
								<button onclick="reduceFromCart(${i})">-</button>
								<span style='width: 40px; text-align:center'>${item['count']}</span>
								<button onclick="addToCart(${i})">+</button>
							</div>
						</div>
					</div>` : '';
			sum += item['count']*priceArray[i];
		});
		cardStr += `<hr style="border: .5px solid black; width: 100%"> <span>Total = $${sum} </span></div>`;
	}
	document.getElementById('cartModal').innerHTML = cardStr;
	// debugger;
}