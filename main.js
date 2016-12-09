var treeHeight = document.getElementById("treeHeight")

var treeChar = document.getElementById("treeChar")

var growButton = document.getElementById("growButton")

var tree = function(obj) {

    var height = obj.height
    var char = obj.char
    console.log(height)
    if (height === '' || char === '') {
            alert("You gotta plant your height and character seeds first!");
        } else {
        var finishedTree=''
        for(var i = 0; i < height; i++) {

            var row = '';

            console.log(char)
            row += ' '.repeat(height -i -1)
            row += char.repeat(2*i + 1) + "\n";

            finishedTree += row;
        }
    }
    console.log(finishedTree);
}

growButton.addEventListener("click", function() {

    var usrInput = {
        height : treeHeight.value,
        char : treeChar.value
        }
        console.log(usrInput)

        tree(usrInput)
});


treeHeight.addEventListener("keypress", whenBtnPressed)


function whenBtnPressed(e) {
    if (e.key === 'Enter') {
        console.log("The enter button was pressed")

        var usrInput = {
            height : treeHeight.value,
            char : treeChar.value
        }
        console.log(usrInput)

        tree(usrInput)
    }
    console.log(e);
}

treeChar.addEventListener("keypress", whenBtnPressed)

function whenBtnPressed(e){
    if (e.key === 'Enter') {
     var usrInput = {
        height : treeHeight.value,
        char : treeChar.value
     }
   tree(usrInput)
    }
}















