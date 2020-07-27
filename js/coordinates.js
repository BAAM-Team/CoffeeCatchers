// This is the constructor that responsable for make clients branches as a objects.
function Branche(name, location, mainPicture, products) {
    this.name = name;
    this.location = location;
    this.mainPicture = mainPicture;
    this.products = products;
    this.distance;
}

// This list include all brands menu (products).
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

// This list for all branches (not the new add branches) include the name,location, mainPicture, Products.
var allBranches = [
    [
        "StarBucks Queen Rania St, Amman",
        [31.9852183, 35.9079837],
        "image/2017-04-04.jpg",
        brandProducts[0]
    ],
    [
        "Starbucks Abdoun",
        [31.9419497, 35.8877175],
        "image/2017-04-04.jpg",
        brandProducts[0]
    ]
]

// This for loop to enter all branches (not the new add branches) in the constructor and push it in our main ObjectBranchList.
ObjectBranchList = [];
for (var i = 0; i < allBranches.length; i++) {
    ObjectBranch = new Branche(allBranches[i][0], allBranches[i][1], allBranches[i][2], allBranches[i][3])
    ObjectBranchList.push(ObjectBranch)
}

// Add the objects in ObjectBranchList in the local storage.
var ObjectBranchListStringify = JSON.stringify(ObjectBranchList);
localStorage.setItem("ourClients", ObjectBranchListStringify)