// 'use strict'


// Define this array out the function to store the selected product at each add to cart and do not empty it and use it when go to cart page and get back.
var selectedProducts = [];

// This if statement use when only we go to cart page and get back will save your cart in the menu page to edit it by add more product or increase,decrease item.
if (localStorage.getItem("cart") !== null) {
    var selectedProducts = JSON.parse(localStorage.getItem("cart"))
    var total = JSON.parse(localStorage.getItem("settotal"))

    var minCartDiv = document.getElementById("minCart")
    var minCart = document.createElement("table")
    minCart.setAttribute("style", "background-color: white; width : 80%; position: fixed; bottom: 0px; right:0px;")
    minCartDiv.append(minCart)

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
    cartImage.setAttribute("src", "imges/icons/cartImage1.png")
    cartImage.setAttribute("width", "25px")
    var spantext=document.createElement('span')
    spantext.textContent='My Cart'
    link.append(spantext);
    link.append(cartImage);
}

// Call the Object of the selected branch that user want it, then take only the key product object and save it in variable name it product.
var choosenBranch = JSON.parse(localStorage.getItem("choosenBranch"))
var product = choosenBranch.products
// Take all the key in product object and put them in a list to make it easy to render a header with all type of products.
var productType = Object.keys(product)

// First div in menu page is for render type of product this branch have, each of type have local links using target the Id to go forward to his products.
var divProductType = document.getElementById("productType")
var th = document.createElement("th")
divProductType.append(th)
for (var i = 0; i < productType.length; i++) {
    var a = document.createElement("a")
    a.setAttribute("href", "#" + productType[i])
    a.textContent = productType[i]
    th.append(a)
}

// Second div it's for render every product under his own type.
var divProductDetails = document.getElementById("productDetails")

// First loop for render the type of products the branch have and give each of them a id match the href links in the head.
// Store the product type in a array name it a type have inside it all the prdoucts in it self type, to make it shorter to read and easy to access it.
for (var i = 0; i < productType.length; i++) {
    div = document.createElement("div")
    div.setAttribute("id", productType[i])
    divProductDetails.append(div)
    var type = product[productType[i]]

    // Second loop to render all products under his own type, every product will have table has a id represent the product in side it and include img,name,price,quantity and button to add to cart.
    for (var x = 0; x < type.length; x++) {
        var table = document.createElement("table")
        table.setAttribute("id", type[x].productName + " Table")
        div.appendChild(table)

        // Give the product a image tag and id represent the product image and a src of the products image. 
        var productImageRow = document.createElement("tr");
        var productImage = document.createElement("img");
        productImage.setAttribute("id", type[x].productName + " Image")
        productImage.setAttribute("src", type[x].productImage)
        productImage.setAttribute("width", "100px")
        table.append(productImageRow)
        productImageRow.append(productImage)

        // Render the name of the product amnd give for him a id represent his name.
        var productName = document.createElement("tr")
        productName.setAttribute("id", type[x].productName + " Name")
        productName.textContent = type[x].productName
        table.append(productName)

        // Here we render inside one row a price and quantity and give them a id for each represent his quantity and price.
        // Give the minimum quantity and start value for the input 1 to not be in negative value and be reasonable.
        // Give the currency a span tag to target the price in easy way.
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

        // Beside every product there is a add to cart button work once you click on it take the value in table to the cart using function reply_click.
        var addToCart = document.createElement("button")
        addToCart.setAttribute("id", type[x].productName)
        addToCart.setAttribute("onclick", "reply_click(this.id)")
        addToCart.textContent = "ADD"
        table.append(addToCart)

    }
}


// This function will store the selected product in local storage each time user select one and will make sure not duplicate any product and make access to go to cart when select one product.
function reply_click(clicked_id) {
    event.preventDefault();
    // each add cart will will define it again.
    var total = 0;

    // This function to check if the recently selected product is inside the selectedProduts array(cart), if true will delete the previous inputs and add the new one.
    selectedProducts = selectedProducts.filter(function (item) {
        return item.name !== clicked_id
    })

    // Here we store the data needed for each selected product in variables
    var selectedProductName = clicked_id
    var selectedProductQuantity = document.getElementById(clicked_id + " Quantity").value
    var selectedProductPrice = document.getElementById(clicked_id + " Price").textContent * selectedProductQuantity
    var selectedProductImage = document.getElementById(clicked_id + " Image").src

    // Use the previous variable to make a object for the selected product to make it easy when we call it inside the cart page.
    var selectedProduct = {
        "name": selectedProductName,
        "quantity": selectedProductQuantity,
        "price": selectedProductPrice,
        "image": selectedProductImage
    }

    // Push every new object has been done into the selectedProducts array (There will not be any repeated product here )
    selectedProducts.push(selectedProduct)

    // Each time the user select a product will recalculate the total inside the selectedProducts array and store inside the total variable.
    for (var i = 0; i < selectedProducts.length; i++) {
        total = total + selectedProducts[i].price

    }

    // We will use the local storage to store the selected product to use it in the cart page.
    var cartStringify = JSON.stringify(selectedProducts)
    localStorage.setItem("cart", cartStringify)
    // Here to we will store the total
    var totalStringify = JSON.stringify(total)
    localStorage.setItem("settotal", totalStringify)

    // This if statement each time user select a item will show at the bottom of the screen a total price and icone of cart will take the user to the cart page if there are at least one product selected.
    // Here we use the third div to render under inside it.
    if (selectedProducts.length != 0) {

        var minCartDiv = document.getElementById("minCart")
        var minCart = document.createElement("table")
        minCart.setAttribute("style", "background-color: white; width : 80%; position: fixed; bottom: 0px; right:0px;")
        minCartDiv.append(minCart)

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
        cartImage.setAttribute("src", "imges/icons/cartImage1.png")
        cartImage.setAttribute("width", "25px")
        link.append(cartImage)
    }

}