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

var id = function (id) {
    return document.getElementById(id);
};

var cleanNumber = function(inputid){
    var rawValue = id(inputid).value
    var cleanValue = rawValue.replace(/[^\d\.\-\ ]/g, '');
    return cleanValue
}

function processInfo() {
    var y1 = cleanNumber('old1a');
    var y2 = cleanNumber('new1b');
    var round = Math.round(((y2 - y1)/y1 * 100) * 100) / 100
    var myTotal = round + "%";
    var myAnswer = id('message');
    myAnswer.innerHTML = myTotal;
};

function processInfo2() {
    var y1 = cleanNumber('percent2a');
    var y2 = cleanNumber('num2b');
    var myTotal = Math.round(((y1/100) * y2) * 100) / 100
    var myAnswer = id('message2');
    myAnswer.innerHTML = myTotal;
};

function processInfo3() {
    var y1 = cleanNumber('num3a');
    var y2 = cleanNumber('percent3b');
    var myTotal = Math.round((y1/(y2/100)) * 100) / 100
    var myAnswer = id('message3');
    myAnswer.innerHTML = myTotal;
};
