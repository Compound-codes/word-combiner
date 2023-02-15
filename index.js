// setup
let bias = false;

function biasToggle() {
    let biasText = $("#bias");
    if (biasText.html() == "No Bias") {
        biasText.html("Yes Bias")
        bias = true;
        return true;
    } else {
        bias = false;
        biasText.html("No Bias");
        return false;
    }
}

// let firstWord = prompt("First word");
// let secondWord = prompt("Second Word");
// fixes maybe sentences to single words






function combine() {
    let firstWord = $("#firstInput").val();
    let secondWord = $("#secondInput").val();
    var len1 = firstWord.length;
    var len2 = secondWord.length;
    var totalLength = len1 + len2;
    
    let len1fraction = len1/totalLength;
    let len2fraction = len2/totalLength;

    if (bias) {
        var firstWordIndex = len1 - (Math.round(Math.round(len1fraction*100)/100 * firstWord.length) - 1);
        var secondWordIndex = len2 - (Math.round(Math.round(len2fraction*100)/100 * secondWord.length) - 1);
    } else {
        var firstWordIndex = (Math.round(Math.round(len1fraction*100)/100 * firstWord.length) - 1);
        var secondWordIndex = (Math.round(Math.round(len2fraction*100)/100 * secondWord.length) - 1);
    }


    var newWord = firstWord.slice(0, firstWordIndex) + secondWord.slice(secondWordIndex);
    firstWordIndex = len1 - firstWordIndex;
    secondWordIndex = len2 - secondWordIndex;

    console.log(newWord);

    $("#combined-word").html(newWord);
}


