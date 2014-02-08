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

var cleanNumber = function(inputid){
    var rawValue = id(inputid).value
    var cleanValue = rawValue.replace(/[^\d\.\-\ ]/g, '');
    return cleanValue
}

var myChange = [];

function processInfo() {
    var y1 = cleanNumber('old1a');
    var y2 = cleanNumber('new1b');
    //var sum = (y2 - y1)/y1 * 100;
    //var divide = sum / y1 * 100;
    var round = Math.round(((y2 - y1)/y1 * 100) * 100) / 100
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
    var y1 = cleanNumber('percent2a');
    var y2 = cleanNumber('num2b');
    //var percentage = (y1/100) * y2;
    var myTotal = Math.round(((y1/100) * y2) * 100) / 100
    var myAnswer = id('message2');
    myAnswer.innerHTML = myTotal;
    //myChange.push(myTotal);
    //myAnswer.innerHTML += myChange.join("<br>");
};

//(function () {
 //   id("calculate2").onclick = processInfo2;
//})();

function processInfo3() {
    var y1 = cleanNumber('num3a');
    var y2 = cleanNumber('percent3b');
    //var percentage = y1/(y2/100);
    var myTotal = Math.round((y1/(y2/100)) * 100) / 100
    var myAnswer = id('message3');
    myAnswer.innerHTML = myTotal;
    //myChange.push(myTotal);
    //myAnswer.innerHTML += myChange.join("<br>");
};
