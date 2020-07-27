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
        "imges/mainImage/shutterstock_1075910024.0.jpg",
        brandProducts[0]
    ],
    [
        "Starbucks Abdoun",
        [31.9419497, 35.8877175],
        "imges/mainImage/shutterstock_1075910024.0.jpg",
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

