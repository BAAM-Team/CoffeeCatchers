// 'use strict'

// This if statement use when only the user get inside a the menu of branch and add to cart then change his mind to select another branch.
if (localStorage.getItem("cart") !== null) {
    localStorage.removeItem("cart")
}
// // This if statement if user select a branch then git back to the suggLocation page will empty the key choosenBranch.
if (localStorage.getItem("choosenBranch") !== null) {
    localStorage.removeItem("choosenBranch")
}

var numberOfImages = 1;
// Adding Id's names for the branches 
var ids = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l']
// get our data from the local storge
var branchWithinRangeList = JSON.parse(localStorage.getItem('branchWithinRangeListSorted'));
var table = document.getElementById('threeSuggestedLocation')
var tr = document.createElement('tr');
tr.setAttribute('id', 'imageRow');
// var rowOfdictense = document.createElement('tr');
// rowOfdictense.setAttribute('id', 'rowOfdictense')
// var rowOfName = document.createElement('tr');
// rowOfName.setAttribute('id', 'rowOfName')
table.appendChild(tr);
renderLocation();
renderShowMoreButton();
// write our data in the table 
var limit=0;
function renderLocation() {
    for (numberOfImages; numberOfImages < branchWithinRangeList.length; numberOfImages++) {
        var td = document.createElement('td');
        tr.appendChild(td);
        var image = document.createElement('img')
        td.appendChild(image)
        image.setAttribute('id', ids[numberOfImages - 1]);
        var mainImage = branchWithinRangeList[numberOfImages - 1].mainPicture;
        image.setAttribute('src', mainImage);
        var distanceOfBranch = document.createElement('span');
        distanceOfBranch.textContent = Math.floor(branchWithinRangeList[numberOfImages - 1].distance) + ' KM';
        td.appendChild(distanceOfBranch);
        // table.appendChild(rowOfdictense);
        var nameOfBranch = document.createElement('strong');
        nameOfBranch.textContent = branchWithinRangeList[numberOfImages - 1].name;
        td.appendChild(nameOfBranch);
        // table.appendChild(rowOfName);
        if (numberOfImages % 3 == 0) {
            numberOfImages++
            break;
        }
    }
}
function renderShowMoreButton() {
    var divBottun = document.getElementById('divBottun');
    var button = document.createElement('button');
    button.textContent = "Show More";
    button.setAttribute('onclick', 'renderSecondRow()');
    button.setAttribute('id', 'bottunOfShowmore');
    divBottun.appendChild(button);
}
function renderSecondRow() {
    var tr1 = document.createElement('tr');
    tr1.setAttribute('id', 'imageRow');
    // var rowOfdictense1 = document.createElement('tr');
    // rowOfdictense1.setAttribute('id', 'rowOfdictense')
    // var rowOfName1 = document.createElement('tr');
    // rowOfName1.setAttribute('id', 'rowOfName')
    table.appendChild(tr1)
    for (numberOfImages; numberOfImages < branchWithinRangeList.length; numberOfImages++) {
        var td1 = document.createElement('td');
        tr1.appendChild(td1);
        var image1 = document.createElement('img')
        td1.appendChild(image1)
        image1.setAttribute('id', ids[numberOfImages - 1]);
        var mainImage = branchWithinRangeList[numberOfImages - 1].mainPicture;
        image1.setAttribute('src', mainImage);
        var distanceOfBranch1 = document.createElement('span');
        distanceOfBranch1.textContent = Math.floor(branchWithinRangeList[numberOfImages - 1].distance) + ' KM';
        td1.appendChild(distanceOfBranch1);
        // table.appendChild(rowOfdictense1);
        var nameOfBranch1 = document.createElement('strong');
        nameOfBranch1.textContent = branchWithinRangeList[numberOfImages - 1].name;
        td1.appendChild(nameOfBranch1);
        // table.appendChild(rowOfName1);
        if (numberOfImages % 3 == 0) {
            numberOfImages++
            break;
        }
        limit++;
    } if (limit >2) {
        divBottun.remove();
        }

}

// adding an event listern for each image to mark the choosen image
table.addEventListener('click', menuRender);
function menuRender() {
    // get the tag that we have chlicked on and save it
    var clickedBranch = event.target;
    // get the id for the selected tag
    var clickedBranchId = clickedBranch.id;
    // checking the choosen branch and sort it
    for (let index = 0; index < branchWithinRangeList.length; index++) {
        var choosenIndex = ids.indexOf(ids[index]);
        if (clickedBranchId === ids[index]) {
            var choosenBranch = branchWithinRangeList[choosenIndex];
            var choosenBranchStringify = JSON.stringify(choosenBranch);
            // making a new key to send the data to the next page
            localStorage.setItem('choosenBranch', choosenBranchStringify);
            document.location.href = 'menu.html';
        }
    }
}