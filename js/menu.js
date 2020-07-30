// 'use strict'
var choosenBranch = JSON.parse(localStorage.getItem("choosenBranch"))
var product = choosenBranch.products
var productType = Object.keys(product)

var divProductType = document.getElementById("productType")
var th = document.createElement("th")
divProductType.append(th)
for (var i = 0; i < productType.length; i++) {
    var a = document.createElement("a")
    a.setAttribute("href", "#" + productType[i])
    a.textContent = productType[i]
    th.append(a)
}
console.log(product[productType[0]])


var divProductDetails = document.getElementById("productDetails")
var form = document.createElement("form")
form.setAttribute("id", "selected cart")

for (var i = 0; i < productType.length; i++) {
    div = document.createElement("div")
    div.setAttribute("id", productType[i])
    divProductDetails.append(div)
    var type = product[productType[i]]
    console.log(type)

    for (var x = 0; x < type.length; x++) {
        var table = document.createElement("table")
        table.setAttribute("id", type[x].productName + " Table")
        div.appendChild(table)

        var productImageRow = document.createElement("tr");
        var productImage = document.createElement("img");
        productImage.setAttribute("id", type[x].productName + " Image")
        productImage.setAttribute("src", type[x].productImage)
        productImage.setAttribute("width", "100px")
        table.append(productImageRow)
        productImageRow.append(productImage)


        var productName = document.createElement("tr")
        productName.setAttribute("id", type[x].productName + " Name")
        productName.textContent = type[x].productName
        table.append(productName)

        var productPriceQuantity = document.createElement("tr")
        var productPrice = document.createElement("td")
        var productQuantityCell = document.createElement("td")
        var productQuantity = document.createElement("input")

        var currency = document.createElement("span")
        currency.textContent = " JD"

        productPrice.textContent = type[x].productPrice
        productPrice.setAttribute("id", type[x].productName + " Price")
        productQuantity.setAttribute("id", type[x].productName + " Quantity")
        productQuantity.setAttribute("type", "number")
        productQuantity.setAttribute("value", "1")
        productQuantity.setAttribute("min", "1")


        table.append(productPriceQuantity)
        productPriceQuantity.append(productQuantity)
        productPriceQuantity.append(productPrice)
        productPriceQuantity.append(currency)


        var addToCart = document.createElement("button")
        addToCart.setAttribute("id", type[x].productName)
        addToCart.setAttribute("onclick", "reply_click(this.id)")
        addToCart.textContent = "ADD"
        table.append(addToCart)

    }
}
var selectedProducts = [];

function reply_click(clicked_id) {
    event.preventDefault();
    var total =0;
    
    selectedProducts = selectedProducts.filter(function (item) {
        return item.name !== clicked_id
    })

    var selectedProductName = clicked_id
    var selectedProductQuantity = document.getElementById(clicked_id + " Quantity").value
    var selectedProductPrice = document.getElementById(clicked_id + " Price").textContent * selectedProductQuantity
    var selectedProductImage = document.getElementById(clicked_id + " Image").src
    console.log(selectedProductName)
    console.log(selectedProductQuantity)
    console.log(selectedProductPrice)
    console.log(selectedProductImage)

    var selectedProduct = {
        "name": selectedProductName,
        "quantity": selectedProductQuantity,
        "price": selectedProductPrice ,
        "image": selectedProductImage
    }

    selectedProducts.push(selectedProduct)

    for (var i = 0; i < selectedProducts.length; i++) {
        total = total + selectedProducts[i].price
        
    }
    
    var cartStringify = JSON.stringify(selectedProducts)
    localStorage.setItem("cart", cartStringify)

    if (selectedProducts.length != 0) {
        

        var minCart = document.createElement("table")
        minCart.setAttribute("style", "background-color: red; width : 80%; position: fixed; bottom: 0px; right:0px;")
        productDetails.append(minCart)

        var tr = document.createElement("tr")
        minCart.append(tr)

        var td = document.createElement("td")
        td.textContent = "Total :" + total + " JD";
        tr.append(td)

        var td = document.createElement("td")
        tr.append(td)
        var link = document.createElement("a")
        link.href = "cart.html"
        td.append(link)
        var cartImage = document.createElement("img")
        cartImage.setAttribute("src",  "imges/icons/cartImage1.png")
        cartImage.setAttribute("width", "25px")
        link.append(cartImage)
    }
    var totalStringify = JSON.stringify(total)
    localStorage.setItem("settotal", totalStringify)
}