var height = [" 7 "];

var symbol = [" * "];

var listSymbol = "";

for (var i = 0; i < symbol.length; i++) {
    var newSym = symbol[i] + height[i];
    console.log(newSym);
    listSymbol += "<li>"+newSym+"</li>";
}



document.addEventListener ("keypress", function (kbEvt) {
        console.log(height.length);
        if (kbEvt.code === 13||32) {
                console.log('Your tree is growin!')
        }
})

var buttonElement = document.getElementById("growButton");

buttonElement.addEventListener ("click", function (kbEvt) {
        if (true) {
                console.log('height+symbol');
        }
function myFunction(){
alert ("hello world");
}
})

function tree(treeObj) {
for (var i = 0; i < symbol.length; i++) {
    var newSym = symbol[i] + height[i];
    console.log('height+symbol');
}
}
// var treeObj = {
// key: 7
// key: #
// }
// document.onkeypress = function (kbEvt) {
//         if (kbEvt.key.toLowerCase() ==='return', ' ') {
//                 alert ('You gotta plant your height and character seeds first.')
//         }
// }
