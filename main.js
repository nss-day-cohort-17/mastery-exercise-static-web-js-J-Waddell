// var height = [" 7 "];

// var symbol = [" * "];

// var listSymbol = "";

// for (var i = 0; i < symbol.length; i++) {
//     var newSym = symbol[i] + height[i];
//     console.log(newSym);
//     listSymbol += "<li>"+newSym+"</li>";
// }



// document.addEventListener ("keypress", function (kbEvt) {
//         console.log(height.length);
//         if (kbEvt.code === 13||32) {
//                 console.log('Your tree is growin!')
//         }
// })

// var buttonElement = document.getElementById("growButton");

// buttonElement.addEventListener ("click", function (kbEvt) {
//         if (true) {
//                 console.log('height+symbol');
//         }
// function myFunction(){
// alert ("hello world");
// }
// })

// function tree(treeObj) {
// for (var i = 0; i < symbol.length; i++) {
//     var newSym = symbol[i] + height[i];
//     console.log('height+symbol');
// }
// }
// var treeObj = {
// key: 7
// key: #
// }
// document.onkeypress = function (kbEvt) {
//         if (kbEvt.key.toLowerCase() ==='return', ' ') {
//                 alert ('You gotta plant your height and character seeds first.')
//         }
// }


// console.log("oy!");

// //add event listener to button
// document.getElementById("growButton").addEventListener("click", growButton)

// //function
// var tree;

// function growTree (e) {
//         console.log("Your tree is growin!");
//          tree = JSON.parse(e.target.responseText)
//         console.log("tree", tree);
// }

// function getCharacter() {
// //create a request
// var userRequest = new XMLHttpRequest()
// userRequest.addEventListener("load", growTree)
// userRequest.open("GET", "character.json")
// userRequest.send()
// }

// //display the data with a button
// document.getElementById("treeChar").addEventListener("keypress", treeChar)

// function treeChar() {
//         console.log("You typed a character");
//         console.log("tree", tree)};

//         if(!tree) {
//                 alert('Enter height and character seeds before planting')
//         } else {

//         var stuffToDisplay = `<h3>${user.results[0].name.first} ${user.results[0].name.last}</h3>
//         <img src="${user.results[0].picture.large}">`

//         document.getElementById("tree").innerHTML = stuffToDisplay
//  }
// }
var treeHeight = document.getElementById("treeHeight")

var treeChar = document.getElementById("treeChar")

var growButton = document.getElementById("growButton")

var tree = function(obj) {

    var height = obj.height
    var char = obj.char
    var finishedTree
    for(var i = 0; i < height; i++) {
        var row = '';
        row =+ ' '.repeat(height -i -1)
        row =+ char.repeat(2*i +1) + "/n";
        finishedTree += row;
    }
    console.log(finishedTree);
    if ( height === ''|| char ==='' )
}

growButton.addEventListener("click", function() {
    var usrInput = {
        height : treeHeight.value,
        char : treeChar.value
        }
        tree(usrInput)
});



















