var color = ["red"];
console.dir(color);

var symbol = ["*"];
console.dir(symbol);

var listSymbol = "";

for (var i = 0; i < symbol.length; i ++) {
        symbol[i]
}

document.addEventListener ("keypress", function (kbEvt) {
        if (kbEvt.code === ' ', 'enter') {
                console.log('Your tree is growin!')
        }
})

// document.onkeypress = function (kbEvt) {
//         if (kbEvt.key.toLowerCase() ==='return', ' ') {
//                 alert ('Your tree is growin!')
//         }
// }
