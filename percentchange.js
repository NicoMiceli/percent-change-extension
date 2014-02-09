/*!
 * percentchange.js | v0.4
 * Copyright (c) 2014 Nico Miceli (@nicomiceli)
 * Licensed under the MIT and GPL licenses.
 */

var myTotal, 
    y1, 
    y2,
    myAnswer;

var id = function (id) {
    return document.getElementById(id);
};

var cleanNumber = function(inputid){
    var rawValue = id(inputid).value
    var cleanValue = rawValue.replace(/[^\d\.\-\ ]/g, '');
    return cleanValue
}

function showAnswer (messageID) {
    myAnswer = id(messageID);
    var str = myTotal.toString()
    var result = str.bold()
    myAnswer.innerHTML = result;
}

function processInfo() {
    y1 = cleanNumber('old1a');
    y2 = cleanNumber('new1b');
    var round = Math.round(((y2 - y1)/y1 * 100) * 100) / 100
    myTotal = round + "%";
    myAnswer = id('message');
    var result = myTotal.bold();
    myAnswer.innerHTML = result;
    if (round > 0) {
        myAnswer.style.color="green"
    } else if (round < 0) {
        myAnswer.style.color="red"
    } else {
        myAnswer.style.color="black"
    }
};

function processInfo2() {
    y1 = cleanNumber('percent2a');
    y2 = cleanNumber('num2b');
    myTotal = Math.round(((y1/100) * y2) * 100) / 100
    showAnswer('message2');
};

function processInfo3() {
    y1 = cleanNumber('num3a');
    y2 = cleanNumber('percent3b');
    myTotal = Math.round((y1/(y2/100)) * 100) / 100
    showAnswer('message3')

};


$("#calculate").click(function () {
    processInfo();
})
$("#calculate2").click(function () {
    processInfo2();
})
$("#calculate3").click(function () {
    processInfo3();
})
