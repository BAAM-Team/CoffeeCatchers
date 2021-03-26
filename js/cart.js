'use strict'
var finalCart = JSON.parse(localStorage.getItem('cart'));
var totalCart = JSON.parse(localStorage.getItem('settotal'));

var distanceForChosenLocation = JSON.parse(localStorage.getItem('choosenBranch'));
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

var orderForm = document.getElementById('orderForm')
orderForm.addEventListener('submit', SubmitionFunc );
var finalCartArray = [];
function SubmitionFunc() {
    event.preventDefault();

    // get the arrivall time     
var choosenBranchDist = Number(distanceForChosenLocation.distance)
console.log(choosenBranchDist)
var arrivalTime = (choosenBranchDist/35)*60+(((choosenBranchDist/35)*60)*1.3)


    var name = event.target.inputName.value;
    var PhoneNumber = Number (event.target.inputPhoneNo.value);
    var Note = event.target.inputNote.value;
     
    var invoice = { "name": name , "PhoneNumber":PhoneNumber, "Note":Note , "product": finalCart.product ,"total":finaltotal, "arrivalTime" : arrivalTime};
    finalCartArray.push(invoice)
 
    var storedFinalCartStringify = JSON.stringify(finalCartArray);
    console.log(finalCartArray)
    // making a new key to send the data to the next page
    localStorage.setItem('clientCart', storedFinalCartStringify);
    document.location.href = 'countdown.html';


}
var choosenBranchDist = Number(distanceForChosenLocation.distance)
var arrivalTime =Math.floor((choosenBranchDist/35)*60+(((choosenBranchDist/35)*60)*1.3))
var arrivalTimeDiv = document.getElementById('timeToReady')
arrivalTimeDiv.innerHTML = 'Estimated time:  '  + arrivalTime + ':'  + '00'
var arrivalTimeStringify = JSON.stringify(arrivalTime)
localStorage.setItem("setarrivalltime",arrivalTimeStringify)

// arrivalTimeDiv.textContent ='Estimated time: 0 '  + arrivalTime + ':'  + '00'
// console.log(arrivalTime)


// function startTimer(duration, display) {
//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }


// window.onload = function () {
//     var fiveMinutes = 60 * arrivalTime,
//         display = document.querySelector('#timeToReady');
//     startTimer(fiveMinutes, display);
// };
