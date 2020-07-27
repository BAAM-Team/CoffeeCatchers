// This is the constructor that responsable for make clients branches as a objects.
function Branche(name, location, mainPicture, products) {
    this.name = name;
    this.location = location;
    this.mainPicture = mainPicture;
    this.products = products;
    this.distance;
}

// this list include all brands menu (products)
var brandProducts = [
    {
        "HotDrinks": [
            {
                "productImage": "image/Hot-Chocolate-Recipe-Fifteen-Spatulas-1.jpg",
                "productName": "hot chocolate",
                "productPrice": 4
            },
            {
                "productImage": "image/latte-small.jpg",
                "productName": "latte",
                "productPrice": 3.5
            }
        ],
        "ColdDrinks": [
            {
                "productImage": "image/f608e54246f840d36dd543c9737677f998-23-ice-coffee.rhorizontal.w700.jpg",
                "productName": "iced coffee",
                "productPrice": 2.75
            },
            {
                "productImage": "image/brands-pure-life-bottle.jpg",
                "productName": "water",
                "productPrice": 0.5
            }
        ],
        "Cookies": [
            {
                "productImage": "image/best-chocolate-chip-cookies-recipe-ever-no-chilling-1-e1549147195343.jpg",
                "productName": "chocolate chip cookies",
                "productPrice": 1.5
            }
        ]
    }
]

// this list to push on it the new branches.
var newObjectBranchList = []

/* This event listener to add a new branch in our local storage and ask the user if he want to add another branch or go to
the home page (search page).*/
var addBranchForm = document.getElementById("addBranchForm")
addBranchForm.addEventListener('submit', function () {

    event.preventDefault();

    // Target the data inside the inputs tags and add each of them in speareted variable.
    var brandName = Number(event.target.brandName.value.split(','))
    console.log(brandName)

    var name = event.target.name.value
    console.log(name)

    var latitude = Number(event.target.latitude.value)
    console.log(latitude)
    var longitude = Number(event.target.longitude.value)
    console.log(longitude)
    var location = [latitude, longitude]

    var mainPicture = event.target.mainPicture.value
    console.log(mainPicture)



    // Add the new branch in the main constructor, and push it in the main list for newObjectBranchList.
    newObjectBranch = new Branche(name, location, mainPicture, brandProducts[brandName])

    newObjectBranchList.push(newObjectBranch)

    // Add the new objects in the localstorage.
    var newObjectBranchListStringify = JSON.stringify(newObjectBranchList);
    localStorage.setItem("ourNewClients", newObjectBranchListStringify);

    // check if need to add another branch .
    if (!(confirm("Do you want add another branch"))) {
        document.location.href = 'index.html';
    }
})




