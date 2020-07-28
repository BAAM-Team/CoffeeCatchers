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
                "productPrice": 1.5
            }, {
                "productImage": "imges/productImages/starBucks/cookies/madeleines.jpg",
                "productName": "madeleines",
                "productPrice": 1.5
            }, {
                "productImage": "imges/productImages/starBucks/cookies/ripVanWafelsHoney_Oats.jpg",
                "productName": "ripVanWafelsHoney_Oats",
                "productPrice": 1.5
            }, {
                "productImage": "imges/productImages/starBucks/cookies/shortBreadCookies.jpg",
                "productName": "shortBreadCookies",
                "productPrice": 1.5
            }, {
                "productImage": "imges/productImages/starBucks/cookies/vanillaBiscottiWithAlmonds.jpg",
                "productName": "vanillaBiscottiWithAlmonds",
                "productPrice": 1.5
            }
        ]
    },
    {
        "HotDrinks": [
            {
                "productImage": "imges/productImages/gloriaJeans/cookies/cocoloco.png",
                "productName": "cocoloco",
                "productPrice": 1.5
            },
            {
                "productImage": "imges/productImages/gloriaJeans/cookies/mochacoconut.jpg",
                "productName": "mochacoconut",
                "productPrice": 1.5
            }
        ],
        "ColdDrinks": [
            {
                "productImage": "imges/productImages/gloriaJeans/cookies/caramelMocha.jpg",
                "productName": "caramelMocha",
                "productPrice": 1.5
            },
            {
                "productImage": "imges/productImages/gloriaJeans/cookies/chocolateAvalanche.jpg",
                "productName": "chocolateAvalanche",
                "productPrice": 1.5
            }, {
                "productImage": "imges/productImages/gloriaJeans/cookies/caramelMocha.jpg",
                "productName": "caramelMocha",
                "productPrice": 1.5
            }, {
                "productImage": "imges/productImages/gloriaJeans/cookies/madagascarVanilaCaramel.jpg",
                "productName": "madagascarVanilaCaramel",
                "productPrice": 1.5
            }, {
                "productImage": "imges/productImages/gloriaJeans/cookies/mintChocolateBomb.jpg",
                "productName": "mintChocolateBomb",
                "productPrice": 1.5
            }, {
                "productImage": "imges/productImages/gloriaJeans/cookies/water.jpg",
                "productName": "water",
                "productPrice": 1.5
            }, {
                "productImage": "imges/productImages/gloriaJeans/cookies/whiteChocolateCaramelMocha.jpg",
                "productName": "whiteChocolateCaramelMocha",
                "productPrice": 1.5
            }
        ],
        "Cookies": [
            {
                "productImage": "imges/productImages/gloriaJeans/cookies/gloriaCroissant.jpg",
                "productName": "whiteChocolateCaramelMocha",
                "productPrice": 1.5
            }, {
                "productImage": "imges/productImages/gloriaJeans/cookies/macadamiaCookie.jpg",
                "productName": "macadamiaCookie",
                "productPrice": 1.5
            }, {
                "productImage": "imges/productImages/gloriaJeans/cookies/pistachioCookies.jpg",
                "productName": "pistachioCookies",
                "productPrice": 1.5
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
                "productImage": "imges/dimitris/hotDrink/cappuccino.jpg ",
                "productName": "cappuccino",
                "productPrice": 2.5
            },
            {
                "productImage": "imges/dimitris/hotDrink/Coffee.jpg",
                "productName": "Coffee",
                "productPrice": 2.5
            }, {
                "productImage": "imges/dimitris/hotDrink/latte.jpg",
                "productName": "latte",
                "productPrice": 3.5
            }, {
                "productImage": "imges/dimitris/hotDrink/mocha.jpg",
                "productName": "mocha",
                "productPrice": 2
            }, {
                "productImage": "imges/dimitris/hotDrink/nescafe.jpg",
                "productName": "nescafe",
                "productPrice": 1.5
            }
        ],
        "ColdDrinks": [
            {
                "productImage": "imges/dimitris/coldDrink/caramelFrappe.png",
                "productName": "caramelFrappe",
                "productPrice": 3.5
            },
            {
                "productImage": "imges/dimitris/coldDrink/coldBrew.png",
                "productName": "coldBrew",
                "productPrice": 2.5
            }, {
                "productImage": "imges/dimitris/coldDrink/icedLatte.png",
                "productName": "icedLatte",
                "productPrice": 3
            }, {
                "productImage": "imges/dimitris/coldDrink/Karkadeeh.png",
                "productName": "Karkadeeh",
                "productPrice": 2.5
            }, {
                "productImage": "imges/dimitris/coldDrink/mochaFrappe.png",
                "productName": "mochaFrappe",
                "productPrice": 2.5
            }, {
                "productImage": "imges/dimitris/coldDrink/spanishLatte.png",
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
                "productImage": "imges/dimitris/cookies/smokedSteak.jpg",
                "productName": "smokedSteak",
                "productPrice": 4
            }, {
                "productImage": "imges/dimitris/cookies/smokedTurkey.jpg",
                "productName": "smokedTurkey",
                "productPrice": 5
            }
        ]
            
    }
]

// This list for all branches (not the new add branches) include the name,location, mainPicture, Products.
var allBranches = [
    [
        "Starbucks Abdallah Hussin.St",
        [31.9659957, 35.8450186],
        "imges/productImages/starBucks/mainPicture/starbucksAbdallahHussinSt.jpg",
        brandProducts[0]
    ], [
        "Starbucks Gardens",
        [31.9823845, 35.8642779],
        "imges/productImages/starBucks/mainPicture/starbucksGardens.jpg",
        brandProducts[0]
    ], [
        "Starbucks City Mall",
        [31.980709, , 35.8376655],
        "imges/productImages/starBucks/mainPicture/starbucksCityMall.jpg",
        brandProducts[0]
    ], [
        "Starbucks Dabouq",
        [31.99785, 35.8219585],
        "imges/productImages/starBucks/mainPicture/starbucksDabouq.jpg",
        brandProducts[0]
    ], [
        "StarBucks Galerya Mall",
        [31.9565613, 35.9456108],
        "imges/productImages/starBucks/mainPicture/starBucksGaleryaMall.jpg",
        brandProducts[0]
    ], [
        "Starbucks Jubeiha",
        [31.9852482, 35.9089682],
        "imges/productImages/starBucks/mainPicture/starbucksJubeiha.jpg",
        brandProducts[0]
    ], [
        "starbucks Swifiea",
        [31.9530472, 35.8554883],
        "imges/productImages/starBucks/mainPicture/starbucksSwifiea.jpg",
        brandProducts[0]
    ], [
        "starbucks Tag Mall",
        [31.9412776, 35.8876749],
        "imges/productImages/starBucks/mainPicture/starbucksTagMall.jpg",
        brandProducts[0]
    ], [
        "GloriaJeans BarkaMall",
        [31.9551826, 35.8661491],
        "imges/productImages/gloriaJeans/mainPicture/BarkaMall.jpg",
        brandProducts[1]
    ], [
        "GloriaJeans MadenahSt",
        [31.9930684, 35.8694381],
        "imges/productImages/gloriaJeans/mainPicture/MadenahSt.jpg",
        brandProducts[1]
    ], [
        "GloriaJeans QueenRaniaSt",
        [32.0154562, 35.8672548],
        "imges/productImages/gloriaJeans/mainPicture/QueenRaniaSt.jpg",
        brandProducts[1]
    ], [
        "costaCoffe6CircleZahranSt",
        [31.914049, 35.8381798],
        "imges/costaCoffee/locationes/6CircleZahranSt.jpg",
        brandProducts[2]
    ], [
        "costaCoffePrinceRashed",
        [31.9176626, 35.8323262],
        "imges/costaCoffee/locationes/PrinceRashed.jpg",
        brandProducts[2]
    ], [
        "costaCoffeJamAlAlJuqahSt38",
        [31.9633799, 35.9012039],
        "imges/costaCoffee/locationes/JamAlAlJuqahSt38.jpg",
        brandProducts[2]
    ], [
        "Dimitris City mall P1 services Floor",
        [31.9633799, 35.9012039],
        "imges/dimitris/location/DimitrisCitymallP1servicesFloor.jpg",
        brandProducts[3]
    ], [
        "DimitrisMecca st",
        [31.9633799, 35.9012039],
        "imges/dimitris/location/DimitrisMeccaSt.jpg",
        brandProducts[3]
    ], [
        "Dimitris Abdali Boulevard",
        [31.9633799, 35.9012039],
        "imges/dimitris/location/DimitrisAbdaliBoulevard.jpg",
        brandProducts[3]
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

/* Event listener on click the a tag(pin image or catch it) :
1. Add the present location and take from the user the range needed 
and pass it in function with all the branches location and get max as the user request location or none depending on the range
and the location that appear push in a list.
2. document.location.href to the suggLocation.html or make it try again.*/

var branchWithinRangeList;
var sortedDistanceListlimited;
var branchWithinRangeListSorted;

var catchIt = document.getElementById("catchIt")

catchIt.addEventListener("submit", function () {
    event.preventDefault();
    var rangeUserNeed = Number(event.target.rangeUserNeed.value)

    // Parse the ourClients and ourNewClients from the local storage.
    var ourClients = JSON.parse(localStorage.getItem("ourClients"))
    var ourNewClients = JSON.parse(localStorage.getItem("ourNewClients"))

    // This two for loop to get the ourClients and ourNewClients in one list to make easy to search the distance to all branches 
    var allClients = [];
    for (var i = 0; i < ourClients.length; i++) {
        allClients.push(ourClients[i])
    }// if there is no new dot get in
    for (var i = 0; i < ourNewClients.length; i++) {
        allClients.push(ourNewClients[i])
    }

    // This function to get the present location to user and calculate the distance for each objects.
    navigator.geolocation.getCurrentPosition(showPosition);
    function showPosition(position) {

        // To empty it every time the user make a new search.
        branchWithinRangeList = []
        sortedDistanceListlimited = []
        branchWithinRangeListSorted = []

        // Search in every longitude and latitude in each object
        for (var i = 0; i < allClients.length; i++) {

            lat1 = position.coords.latitude;
            lon1 = position.coords.longitude;
            lat2 = allClients[i].location[0];
            lon2 = allClients[i].location[1];

            var radlat1 = Math.PI * lat1 / 180;
            var radlat2 = Math.PI * lat2 / 180;
            var theta = lon1 - lon2;
            var radtheta = Math.PI * theta / 180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

            dist = Math.acos(dist);
            dist = dist * 180 / Math.PI;
            dist = dist * 60 * 1.1515;
            dist = dist * 1.609344;

            //This if statment to ensure that only take the locations within the range.
            if (rangeUserNeed > dist) {

                // Add the distance for the branches within the range( inside the event listener to reset every time.)
                allClients[i].distance = dist
                var branchWithinRange = allClients[i]
                branchWithinRangeList.push(branchWithinRange)
            }
        }
        console.log(branchWithinRangeList)
        // Here we use if statement to make sure not go to other sugglocation page with no result.
        if (branchWithinRangeList.length == 0) {
            alert("Try raise you Range to find US")
        } else {
            // This function will sort our distance from low to high to make sure give the user the nearst branch.
            branchWithinRangeListSorted = branchWithinRangeList.sort(function (a, b) { return a.distance - b.distance })
            console.log(branchWithinRangeListSorted)
        }
        // Add the branches that has been within the range and sorted from lower to higher in local storage.
        var branchWithinRangeListSortedStringify = JSON.stringify(branchWithinRangeListSorted)
        localStorage.setItem("branchWithinRangeListSorted", branchWithinRangeListSortedStringify)

        // Move to the suggLocation page when we have a results to show.
        document.location.href = 'suggLocations.html';
    }
})