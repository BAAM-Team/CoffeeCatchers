// 'use strict'

// This if statement use when only the user search (catch it) and go to suggLocation page then get back to the index will remove the branchWithinRangeListSorted key
// This cause use will be effective when the user change his location every search.  
if (localStorage.getItem("branchWithinRangeListSorted") !== null) {
    localStorage.removeItem("branchWithinRangeListSorted")
}

// This is the constructor that responsable for make clients branches as a objects.

function Branche(name, location, mainPicture, products,iframe) {
    this.name = name;
    this.location = location;
    this.mainPicture = mainPicture;
    this.products = products;
    this.distance;
    this.iframe=iframe;
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

// This list for all branches (not the new add branches) include the name,location, mainPicture, Products.
var allBranches = [
    [
        "Starbucks Abdallah Hussin.St",
        [31.9659957, 35.8450186],
        "imges/productImages/starBucks/mainPicture/starbucksAbdallahHussinSt.jpg",
        brandProducts[0],
        '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211.58138794555643!2d35.85588680926374!3d31.9526971739238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb8606e4864916a7b!2sStarbucks!5e0!3m2!1sen!2sjo!4v1596010384066!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
    ], [
        "Starbucks Gardens",
        [31.9823845, 35.8642779],
        "imges/productImages/starBucks/mainPicture/starbucksGardens.jpg",
        brandProducts[0],
        '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.207536169911!2d35.86208921449564!3d31.98238903138335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU4JzU2LjYiTiAzNcKwNTEnNTEuNCJF!5e0!3m2!1sen!2sjo!4v1596010640804!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
    ], [
        "Starbucks City Mall",
        [31.980709, , 35.8376655],
        "imges/productImages/starBucks/mainPicture/starbucksCityMall.jpg",
        brandProducts[0],
        '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.2693322228943!2d35.83547681449561!3d31.980713531466964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU4JzUwLjYiTiAzNcKwNTAnMTUuNiJF!5e0!3m2!1sen!2sjo!4v1596010795263!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
    ], [
        "Starbucks Dabouq",
        [31.99785, 35.8219585],
        "imges/productImages/starBucks/mainPicture/starbucksDabouq.jpg",
        brandProducts[0],
        '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.6369985463143!2d35.819769814496205!3d31.997854530611303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU5JzUyLjMiTiAzNcKwNDknMTkuMSJF!5e0!3m2!1sen!2sjo!4v1596010837185!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
    ], [
        "StarBucks Galerya Mall",
        [31.9565613, 35.9456108],
        "imges/productImages/starBucks/mainPicture/starBucksGaleryaMall.jpg",
        brandProducts[0],
        '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.1596300219544!2d35.94342211449506!3d31.956565832671767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU3JzIzLjYiTiAzNcKwNTYnNDQuMiJF!5e0!3m2!1sen!2sjo!4v1596011020199!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
    ], [
        "Starbucks Jubeiha",
        [31.9852482, 35.9089682],
        "imges/productImages/starBucks/mainPicture/starbucksJubeiha.jpg",
        brandProducts[0],
        '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.1019100385574!2d35.90677951449584!3d31.98525273124039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU5JzA2LjkiTiAzNcKwNTQnMzIuMyJF!5e0!3m2!1sen!2sjo!4v1596011062030!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
    ], [
        "starbucks Swifiea",
        [31.9530472, 35.8554883],
        "imges/productImages/starBucks/mainPicture/starbucksSwifiea.jpg",
        brandProducts[0],
        '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.2891407140264!2d35.85329961449493!3d31.953051732846998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU3JzExLjAiTiAzNcKwNTEnMTkuOCJF!5e0!3m2!1sen!2sjo!4v1596011114366!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
    ], [
        "starbucks Tag Mall",
        [31.9412776, 35.8876749],
        "imges/productImages/starBucks/mainPicture/starbucksTagMall.jpg",
        brandProducts[0],
        '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.722811668557!2d35.885486214494506!3d31.941282133433916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU2JzI4LjYiTiAzNcKwNTMnMTUuNiJF!5e0!3m2!1sen!2sjo!4v1596011147054!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
    ], [
        "GloriaJeans BarkaMall",
        [31.9551826, 35.8661491],
        "imges/productImages/gloriaJeans/mainImage/BarkaMall.jpg",
        brandProducts[1],
        '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3385.210442954263!2d35.86396041449499!3d31.955187132740523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU3JzE4LjciTiAzNcKwNTEnNTguMSJF!5e0!3m2!1sen!2sjo!4v1596011193091!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
    ], [
        "GloriaJeans MadenahSt",
        [31.9930684, 35.8694381],
        "imges/productImages/gloriaJeans/mainImage/MadenahSt.jpg",
        brandProducts[1],
        '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.813422839136!2d35.86724941449603!3d31.993072930850087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU5JzM1LjEiTiAzNcKwNTInMTAuMCJF!5e0!3m2!1sen!2sjo!4v1596011228056!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
    ], [
        "GloriaJeans QueenRaniaSt",
        [32.0154562, 35.8672548],
        "imges/productImages/gloriaJeans/mainImage/QueenRaniaSt.jpg",
        brandProducts[1],
        '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.9871883047686!2d35.86506611449662!3d32.015460729732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDAwJzU1LjYiTiAzNcKwNTInMDIuMSJF!5e0!3m2!1sen!2sjo!4v1596011266220!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
    ], [
        "costaCoffe6CircleZahranSt",
        [31.914049, 35.8381798],
        "imges/costaCoffee/locationes/6CircleZahranSt.jpg",
        brandProducts[2],
        '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.789425554783!2d35.84259941449526!3d31.966608932170853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca17404c9da81%3A0x2e4decc9b5846ef!2sCosta%20Coffee%20Prince%20Rashed!5e0!3m2!1sen!2sjo!4v1596011577098!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
    ], [
        "costaCoffePrinceRashed",
        [31.9176626, 35.8323262],
        "imges/costaCoffee/locationes/PrinceRashed.jpg",
        brandProducts[2],
        '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.789425554783!2d35.84259941449526!3d31.966608932170853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca17404c9da81%3A0x2e4decc9b5846ef!2sCosta%20Coffee%20Prince%20Rashed!5e0!3m2!1sen!2sjo!4v1596011501880!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
    ], [
        "costaCoffeJamAlAlJuqahSt38",
        [31.9633799, 35.9012039],
        "imges/costaCoffee/locationes/JamAlAlJuqahSt38.jpg",
        brandProducts[2],
        '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27078.896771847263!2d35.888386339550784!3d31.964637699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca16043611471%3A0xc8d44f7e720b1f61!2sCosta%20Coffee!5e0!3m2!1sen!2sjo!4v1596011418781!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
    ], [
        "Dimitris City mall P1 services Floor",
        [31.9633799, 35.9012039],
        "imges/dimitris/location/DimitrisCitymallP1servicesFloor.jpg",
        brandProducts[3],
        '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.281783288569!2d35.83560091449569!3d31.980375931483835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca14885fb0b9f%3A0xe8f3e39351d2a755!2zRElNSVRSSeKAmVMgQ09GRkVFIENJVFlNQUxMINiv2YrZhdmK2KrYsdmK2LIg2LPZitiq2Yog2YXZiNmE!5e0!3m2!1sen!2sjo!4v1596011312200!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
    ], [
        "DimitrisMecca st",
        [31.9633799, 35.9012039],
        "imges/dimitris/location/DimitrisMeccaSt.jpg",
        brandProducts[3],
        '"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.510130334625!2d35.84398011449549!3d31.974183931792954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca19ec20245a3%3A0xac69f412a2c1a8e3!2zRElNSVRSSeKAmVMgQ09GRkVFIE1BS0tBIFNUUkVFVCDYr9mK2YXZitiq2LHZitiyINi02KfYsdi5INmF2YPYqQ!5e0!3m2!1sen!2sjo!4v1596010851046!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
    ], [
        "Dimitris Abdali Boulevard",
        [31.9633799, 35.9012039],
        "imges/dimitris/location/DimitrisAbdaliBoulevard.jpg",
        brandProducts[3],
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3384.908297033348!2d35.899015214495165!3d31.963384432331598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU3JzQ4LjIiTiAzNcKwNTQnMDQuMyJF!5e0!3m2!1sen!2sjo!4v1596012369184!5m2!1sen!2sjo" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"'
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
     // deleted the input range by user
    // var rangeUserNeed = Number(event.target.rangeUserNeed.value)
     
    // Parse the ourClients  from the local storage.
      var ourClients = JSON.parse(localStorage.getItem("ourClients"))
      // Parse the  ourNewClients from the local storage if it dosenot have data
   if (localStorage.getItem("ourNewClients")!==null) {
   
       var ourNewClients = JSON.parse(localStorage.getItem("ourNewClients"))
   }else{
       var ourNewClients=[];
   }

   
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
            // radius of earth 6351
            if (6351 > dist) {

                // Add the distance for the branches within the range( inside the event listener to reset every time.)
                allClients[i].distance = dist
                var branchWithinRange = allClients[i]
                branchWithinRangeList.push(branchWithinRange)
            }
        }
        // Here we use if statement to make sure not go to other sugglocation page with no result.
        if (branchWithinRangeList.length == 0) {
            alert("Try raise you Range to find US")
        } else {
            // This function will sort our distance from low to high to make sure give the user the nearst branch.
            branchWithinRangeListSorted = branchWithinRangeList.sort(function (a, b) { return a.distance - b.distance })
        }
        // Add the branches that has been within the range and sorted from lower to higher in local storage.
        var branchWithinRangeListSortedStringify = JSON.stringify(branchWithinRangeListSorted)
        localStorage.setItem("branchWithinRangeListSorted", branchWithinRangeListSortedStringify)

        // Move to the suggLocation page when we have a results to show.
        document.location.href = 'suggLocations.html';
    }
})