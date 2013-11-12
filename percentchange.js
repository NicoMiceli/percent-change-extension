//PERCENT CHANGE CODE


$("#calculate").click(function () {
    processInfo();
})
$("#calculate2").click(function () {
    processInfo2();
})
$("#calculate3").click(function () {
    processInfo3();
})

//alert('here');

var id = function (id) {
    return document.getElementById(id);
};

var myChange = [];

function processInfo() {
    var y1 = parseFloat(id('old1a').value);
    var y2 = parseFloat(id('new1b').value);
    var sum = y2 - y1;
    var divide = sum / y1 * 100;
    var round = Math.round(divide * 100) / 100
    var myTotal = round + "%";
    var myAnswer = id('message');
    myAnswer.innerHTML = myTotal;
    /*if (myTotal < 0) {
        id('message').style.color="green";
        id('message').style.fontWeight="bold";
    }else if (myTotal === 0){
        id('message').style.color="black"
        id('message').style.fontWeight="bold";        
    } else {
        id('message').style.color="red"
        id('message').style.fontWeight="bold";        
    }
    */
    //myChange.push(myTotal);
    //myAnswer.innerHTML += myChange.join("<br>");

};

function processInfo2() {
    var y1 = parseFloat(id('percent2a').value);
    var y2 = parseFloat(id('num2b').value);
    var percentage = (y1/100) * y2;
    var myTotal = Math.round(percentage * 100) / 100
    var myAnswer = id('message2');
    myAnswer.innerHTML = myTotal;
    //myChange.push(myTotal);
    //myAnswer.innerHTML += myChange.join("<br>");
};

//(function () {
 //   id("calculate2").onclick = processInfo2;
//})();

function processInfo3() {
    var y1 = parseFloat(id('num3a').value);
    var y2 = parseFloat(id('percent3b').value);
    var percentage = y1/(y2/100);
    var myTotal = Math.round(percentage * 100) / 100
    var myAnswer = id('message3');
    myAnswer.innerHTML = myTotal;
    //myChange.push(myTotal);
    //myAnswer.innerHTML += myChange.join("<br>");
};