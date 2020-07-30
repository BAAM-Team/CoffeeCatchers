'use strict'
var finalCart = JSON.parse(localStorage.getItem('cart'));
var totalCart = JSON.parse(localStorage.getItem('settotal'));

var distanceForChosenLocation = JSON.parse(localStorage.getItem('choosenBranch'));
console.log(distanceForChosenLocation)
var selectedItemCart = document.getElementById('selectedProductCart')
var arrivalTime;

/*  <ul>
<img src="imges/icons/left.png" alt="cookies">
<li>product name</li>
<li><strong>Qty</strong><strong>5JD</strong></li>
</ul> */

for (let index = 0; index < finalCart.length; index++) {
    var selectedItemUl = document.createElement('ul');
    selectedItemCart.appendChild(selectedItemUl)

    var selectedItemImg = document.createElement('img')
    selectedItemUl.appendChild(selectedItemImg)
    //product Img source in the final cart
    var productImgOrder = finalCart[index].image
    selectedItemImg.setAttribute('src', productImgOrder );
    selectedItemImg.setAttribute('width', '50px' );


    //product name in the final cart
    var selectedItemLiProductName = document.createElement('li');
    selectedItemUl.appendChild(selectedItemLiProductName)
var productNameOrder = finalCart[index].name
selectedItemLiProductName.textContent = productNameOrder

    //product qty & price in the final cart

var selectedItemLiQtyPrice = document.createElement('li')
selectedItemUl.appendChild(selectedItemLiQtyPrice)

var selectedItemstrongQty = document.createElement('strong')
selectedItemLiQtyPrice.appendChild(selectedItemstrongQty)

var productQty = finalCart[index].quantity
selectedItemstrongQty.textContent = 'Qty: ' + productQty 

var selectedItemstrongPrice = document.createElement('strong')
selectedItemLiQtyPrice.appendChild(selectedItemstrongPrice)
var productPrice = finalCart[index].price
selectedItemstrongPrice.textContent =  'Price: ' + productPrice
selectedItemUl.appendChild(selectedItemLiQtyPrice)

}
var finaltotal = document.getElementById('totalID')
finaltotal.textContent = 'Total: ' + Number(totalCart) + ' JD'
console.log(totalCart)


