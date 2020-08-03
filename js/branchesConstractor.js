// This is the constructor that responsable for make clients branches as a objects.
function Branche(name, location, mainPicture, products,iframe) {
    this.name = name;
    this.location = location;
    this.mainPicture = mainPicture;
    this.products = products;
    this.distance;
    this.iframe=iframe;
}

// This list to push on it the new branches.
var newObjectBranchList = []

// This if statement will make sure when the user add branch then go to index page and get back again to add will not empty the list of newObjectBranchList, it will be cumulative add on the previous branches.
if (localStorage.getItem("ourNewClients") !== null) {
    var ourNewClients = JSON.parse(localStorage.getItem("ourNewClients"))
    for (var i = 0; i < ourNewClients.length; i++){
        newObjectBranchList.push(ourNewClients[i])
    }
}
// This list include all brands menu (products).
var brandProducts = [
    {
        "HotDrinks": [
            {
                "productImage": "imges/productImages/starBucks/hotDrinks/caffèAmericano.jpg",
                "productName": "caffèAmericano",
                "productPrice": 4
            },
            {
                "productImage": "imges/productImages/starBucks/hotDrinks/caffMisto.jpg",
                "productName": "caffMisto",
                "productPrice": 3.5
            }, {
                "productImage": "imges/productImages/starBucks/hotDrinks/cappuccino.jpg",
                "productName": "cappuccino",
                "productPrice": 1.5
            }, {
                "productImage": "imges/productImages/starBucks/hotDrinks/cinnamonDolcecrème.jpg",
                "productName": "cinnamonDolcecrème",
                "productPrice": 4.5
            }, {
                "productImage": "imges/productImages/starBucks/hotDrinks/hotChocolate.jpg",
                "productName": "hotChocolate",
                "productPrice": 3.5
            }, {
                "productImage": "imges/productImages/starBucks/hotDrinks/steamedAppleJuice.jpg",
                "productName": "steamedAppleJuice",
                "productPrice": 2.5
            }, {
                "productImage": "imges/productImages/starBucks/hotDrinks/steamedMilk.jpg",
                "productName": "steamedMilk",
                "productPrice": 2.5
            }, {
                "productImage": "imges/productImages/starBucks/hotDrinks/vanillaCrème.jpg",
                "productName": "vanillaCrème",
                "productPrice": 3.5
            }, {
                "productImage": "imges/productImages/starBucks/hotDrinks/whiteHotChocolate.jpg",
                "productName": "whiteHotChocolate",
                "productPrice": 4
            }
        ],
        "ColdDrinks": [
            {
                "productImage": "imges/productImages/starBucks/coldDrinks/dragonDrink.jpg",
                "productName": "dragonDrink",
                "productPrice": 2.75
            }, {
                "productImage": "imges/productImages/starBucks/coldDrinks/icedCaffèAmericano.jpg",
                "productName": "icedCaffèAmericano",
                "productPrice": 3.5
            }, {
                "productImage": "imges/productImages/starBucks/coldDrinks/icedGoldenGingerDrink.jpg",
                "productName": "icedGoldenGingerDrink",
                "productPrice": 4.5
            }, {
                "productImage": "imges/productImages/starBucks/coldDrinks/icedGreenGeningerDrink.jpg",
                "productName": "icedGreenGeningerDrink",
                "productPrice": 2.5
            }, {
                "productImage": "imges/productImages/starBucks/coldDrinks/icedGuavaPassionfruitDrink.jpg",
                "productName": "icedGuavaPassionfruitDrink",
                "productPrice": 3.5
            }, {
                "productImage": "imges/productImages/starBucks/coldDrinks/pinkDrink.jpg",
                "productName": "pinkDrink",
                "productPrice": 4.5
            }
        ],
        "Cookies": [
            {
                "productImage": "imges/productImages/starBucks/cookies/dippedMadeleines.jpg",
                "productName": "dippedMadeleines",
                "productPrice": 3.5
            }, {
                "productImage": "imges/productImages/starBucks/cookies/madeleines.jpg",
                "productName": "madeleines",
                "productPrice": 2.5
            }, {
                "productImage": "imges/productImages/starBucks/cookies/ripVanWafelsHoney&Oats.jpg",
                "productName": "ripVanWafelsHoney&Oats",
                "productPrice": 1.5
            }, {
                "productImage": "imges/productImages/starBucks/cookies/shortBreadCookies.jpg",
                "productName": "shortBreadCookies",
                "productPrice": 1.5
            }, {
                "productImage": "imges/productImages/starBucks/cookies/vanillaBiscottiWithAlmonds.jpg",
                "productName": "vanillaBiscottiWithAlmonds",
                "productPrice": 2.5
            }
        ]
    },
    {
        "HotDrinks": [
            {
                "productImage": "imges/productImages/gloriaJeans/hotDrinks/cocoloco.png",
                "productName": "cocoloco",
                "productPrice": 2.5
            },
            {
                "productImage": "imges/productImages/gloriaJeans/hotDrinks/mochacoconut.jpg",
                "productName": "mochacoconut",
                "productPrice": 3
            }
        ],
        "ColdDrinks": [
            {
                "productImage": "imges/productImages/gloriaJeans/coldDrinks/caramelMocha.jpg",
                "productName": "caramelMocha",
                "productPrice": 2
            },
            {
                "productImage": "imges/productImages/gloriaJeans/coldDrinks/chocolateAvalanche.jpg",
                "productName": "chocolateAvalanche",
                "productPrice": 3.5
            }, {
                "productImage": "imges/productImages/gloriaJeans/coldDrinks/madagascarVanilaCaramel.jpg",
                "productName": "madagascarVanilaCaramel",
                "productPrice": 4.5
            }, {
                "productImage": "imges/productImages/gloriaJeans/coldDrinks/mintChocolateBomb.jpg",
                "productName": "mintChocolateBomb",
                "productPrice": 3.5
            }, {
                "productImage": "imges/productImages/gloriaJeans/coldDrinks/water.jpg",
                "productName": "water",
                "productPrice": 0.5
            }, {
                "productImage": "imges/productImages/gloriaJeans/coldDrinks/whiteChocolateCaramelMocha.jpg",
                "productName": "whiteChocolateCaramelMocha",
                "productPrice": 2.5
            }
        ],
        "Cookies": [
            {
                "productImage": "imges/productImages/gloriaJeans/cookies/gloriaCroissant.jpg",
                "productName": "gloriaCroissant",
                "productPrice": 3.5
            }, {
                "productImage": "imges/productImages/gloriaJeans/cookies/macadamiaCookie.jpg",
                "productName": "macadamiaCookie",
                "productPrice": 1.5
            }, {
                "productImage": "imges/productImages/gloriaJeans/cookies/pistachioCookies.jpg",
                "productName": "pistachioCookies",
                "productPrice": 2.5
            }
        ]
    }, {
        "HotDrinks": [
            {
                "productImage": "imges/costaCoffee/hotDrink/caramelCortado.jpg ",
                "productName": "caramelCortado",
                "productPrice": 6
            },
            {
                "productImage": "imges/costaCoffee/hotDrink/flatWhite.jpg",
                "productName": "flatWhite",
                "productPrice": 4
            }, {
                "productImage": "imges/costaCoffee/hotDrink/honeycombCappuccino.jpg",
                "productName": "honeycombCappuccino",
                "productPrice": 3.5
            }, {
                "productImage": "imges/costaCoffee/hotDrink/honeyComblattemacchiato.jpg",
                "productName": "honeyComblattemacchiato",
                "productPrice": 5
            }, {
                "productImage": "imges/costaCoffee/hotDrink/latte.jpg",
                "productName": "latte",
                "productPrice": 5
            }, {
                "productImage": "imges/costaCoffee/hotDrink/mocha.jpg",
                "productName": "mocha",
                "productPrice": 6
            }
        ],
        "ColdDrinks": [
            {
                "productImage": "imges/costaCoffee/coldDrink/classicLemonade.jpg",
                "productName": "classicLemonade",
                "productPrice": 5
            },
            {
                "productImage": "imges/costaCoffee/coldDrink/honeyCombicedcappuccino.jpg",
                "productName": "honeyCombicedcappuccino",
                "productPrice": 3.5
            }, {
                "productImage": "imges/costaCoffee/coldDrink/honeycombIcedlatte.jpg",
                "productName": "honeycombIcedlatte",
                "productPrice": 4.5
            }, {
                "productImage": "imges/costaCoffee/coldDrink/mangoAndpassionfruitcooler.jpg",
                "productName": "mangoAndpassionfruitcooler",
                "productPrice": 4.5
            }, {
                "productImage": "imges/costaCoffee/coldDrink/strawberrColdbrewcoffee.jpg",
                "productName": "strawberrColdbrewcoffee",
                "productPrice": 4
            }
        ],
        "Cookies": [
            {
                "productImage": "imges/costaCoffee/cookies/chocolateCaramelhazelnutcookie.jpg",
                "productName": "chocolateCaramelhazelnutcookie",
                "productPrice": 1.5
            }, {
                "productImage": "imges/costaCoffee/cookies/fruitOat.jpg",
                "productName": "fruitOat",
                "productPrice": 3
            }, {
                "productImage": "imges/costaCoffee/cookies/jammyShort.jpg",
                "productName": "jammyShort",
                "productPrice": 5
            }, {
                "productImage": "imges/costaCoffee/cookies/sheepMallow.jpg",
                "productName": "sheepMallow",
                "productPrice": 6
            }, {
                "productImage": "imges/costaCoffee/cookies/walkingGinger.jpg",
                "productName": "walkingGinger",
                "productPrice": 4
            }
        ]
    }, {
        "HotDrinks": [
            {
                "productImage": "imges/dimitris/hotDrinks/cappuccino.jpg ",
                "productName": "cappuccino",
                "productPrice": 2.5
            },
            {
                "productImage": "imges/dimitris/hotDrinks/Coffee.jpg",
                "productName": "Coffee",
                "productPrice": 2.5
            }, {
                "productImage": "imges/dimitris/hotDrinks/latte.jpg",
                "productName": "latte",
                "productPrice": 3.5
            }, {
                "productImage": "imges/dimitris/hotDrinks/mocha.jpg",
                "productName": "mocha",
                "productPrice": 2
            }, {
                "productImage": "imges/dimitris/hotDrinks/nescafe.jpg",
                "productName": "nescafe",
                "productPrice": 1.5
            }
        ],
        "ColdDrinks": [
            {
                "productImage": "imges/dimitris/coldDrinks/caramelFrappe.png",
                "productName": "caramelFrappe",
                "productPrice": 3.5
            },
            {
                "productImage": "imges/dimitris/coldDrinks/coldBrew.png",
                "productName": "coldBrew",
                "productPrice": 2.5
            }, {
                "productImage": "imges/dimitris/coldDrinks/icedLatte.png",
                "productName": "icedLatte",
                "productPrice": 3
            }, {
                "productImage": "imges/dimitris/coldDrinks/Karkadeeh.png",
                "productName": "Karkadeeh",
                "productPrice": 2.5
            }, {
                "productImage": "imges/dimitris/coldDrinks/mochaFrappe.png",
                "productName": "mochaFrappe",
                "productPrice": 2.5
            }, {
                "productImage": "imges/dimitris/coldDrinks/mochaFrappe.png",
                "productName": "spanishLatte",
                "productPrice": 4
            }
        ],
        "Cookies": [
            {
                "productImage": "imges/dimitris/snacks/mixedCheese.jpg",
                "productName": "mixedCheese",
                "productPrice": 3.5
            }, {
                "productImage": "imges/dimitris/snacks/smokedSteak.jpg",
                "productName": "smokedSteak",
                "productPrice": 4
            }, {
                "productImage": "imges/dimitris/snacks/smokedTurkey.jpg",
                "productName": "smokedTurkey",
                "productPrice": 5
            }
        ]
    },
    {
        "HotDrinks": [
            {
                "productImage": "imges/costaCoffee/hotDrink/caramelCortado.jpg ",
                "productName": "caramelCortado",
                "productPrice": 6
            },
            {
                "productImage": "imges/costaCoffee/hotDrink/flatWhite.jpg",
                "productName": "flatWhite",
                "productPrice": 4
            },{
                "productImage": "imges/costaCoffee/hotDrink/honeycombCappuccino.jpg",
                "productName": "honeycombCappuccino",
                "productPrice": 3.5
            },{
                "productImage": "imges/costaCoffee/hotDrink/honeyComblattemacchiato.jpg",
                "productName": "honeyComblattemacchiato",
                "productPrice": 5
            },{
                "productImage": "imges/costaCoffee/hotDrink/latte.jpg",
                "productName": "latte",
                "productPrice":5
            },{
                "productImage": "imges/costaCoffee/hotDrink/mocha.jpg",
                "productName": "mocha",
                "productPrice": 6
            }
        ],
        "ColdDrinks": [
            {
                "productImage": "imges/costaCoffee/coldDrink/classicLemonade.jpg",
                "productName": "classicLemonade",
                "productPrice": 5
            },
            {
                "productImage": "imges/costaCoffee/coldDrink/honeyCombicedcappuccino.jpg",
                "productName": "honeyCombicedcappuccino",
                "productPrice": 3.5
            },{
                "productImage": "imges/costaCoffee/coldDrink/honeycombIcedlatte.jpg",
                "productName": "honeycombIcedlatte",
                "productPrice": 4.5
            },{
                "productImage": "imges/costaCoffee/coldDrink/mangoAndpassionfruitcooler.jpg",
                "productName": "mangoAndpassionfruitcooler",
                "productPrice": 4.5
            },{
                "productImage": "imges/costaCoffee/coldDrink/strawberrColdbrewcoffee.jpg",
                "productName": "strawberrColdbrewcoffee",
                "productPrice":4
            }
        ],
        "Cookies": [
            {
                "productImage": "imges/costaCoffee/cookies/chocolateCaramelhazelnutcookie.jpg",
                "productName": "/chocolateCaramelhazelnutcookie",
                "productPrice": 1.5
            },{
                "productImage": "imges/costaCoffee/cookies/fruitOat.jpg",
                "productName": "fruitOat",
                "productPrice": 3
            },{
                "productImage": "imges/costaCoffee/cookies/jammyShort.jpg",
                "productName": "jammyShort",
                "productPrice": 5
            },{
                "productImage": "imges/costaCoffee/cookies/sheepMallow.jpg",
                "productName": "sheepMallow",
                "productPrice": 6
            },{
                "productImage": "imges/costaCoffee/cookies/walkingGinger.jpg",
                "productName": "walkingGinger",
                "productPrice": 4
            }
        ]
    }

]

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




