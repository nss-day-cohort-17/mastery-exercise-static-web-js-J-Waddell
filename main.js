var color = ["red"];
console.dir(color);

var symbol = ["*"];
console.dir(symbol);

var listSymbol = "";

for (var i = 0; i < symbol.length; i ++) {
        symbol[i]
}

var event = document.createEvent('Event');

// Define that the event name is 'build'.
event.initEvent('build', true, true);

// Listen for the event.
elem.addEventListener('build', function (e) {
  // e.target matches elem
}, false);

// target can be any Element or other EventTarget.
elem.dispatchEvent(event);



// document.addEventListener ("keypress", function (kbEvt) {
//         if (kbEvt.code === ' ', 'enter') {
//                 console.log('Your tree is growin!')
//         }
// })

// document.onkeypress = function (kbEvt) {
//         if (kbEvt.key.toLowerCase() ==='return', ' ') {
//                 alert ('You gotta plant your height and character seeds first.')
//         }
// }
