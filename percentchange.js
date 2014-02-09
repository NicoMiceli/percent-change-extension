/*!
 * percentchange.js | v0.4
 * Copyright (c) 2014 Nico Miceli (@nicomiceli)
 * Licensed under the MIT and GPL licenses.
 */

var myTotal, 
    y1, 
    y2,
    myAnswer;

function id (id) {
    return document.getElementById(id);
};

function cleanNumber (inputid){
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

function saveNums (id1, id2) {
    var theValue1 = id(id1).value
    var theValue2 = id(id2).value
    
    if (!theValue1) {
        message('Error');
        return;
    };
    chrome.storage.sync.set({'value1':theValue1},function(){
        message('Settings saved')
        console.log('saved')
    })

    if (!theValue2) {
        message('Error');
        return;
    };
    chrome.storage.sync.set({'value2':theValue2},function(){
        message('Settings saved')
    })
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

$(".inputbox").blur(function() {
    var $inputbox = $(this);
    var key = $inputbox.attr('id');
    var storedVal = id(key).value;
    localStorage.setItem(key,storedVal)
    //console.log(key + " " + storedVal); 
});


jQuery(document).ready(function($) {

    id('old1a').value = localStorage.getItem('old1a')
    id('new1b').value = localStorage.getItem('new1b')
    id('percent2a').value = localStorage.getItem('percent2a')
    id('num2b').value = localStorage.getItem('num2b')
    id('num3a').value = localStorage.getItem('num3a')
    id('percent3b').value = localStorage.getItem('percent3b')
    //$('input.inputbox').each(function(i) {
       //console.log(this.value)
    //});
});

$("#calculate").click(function () {
    processInfo();
    saveNums('old1a','new1b');
})
$("#calculate2").click(function () {
    processInfo2();
})
$("#calculate3").click(function () {
    processInfo3();
})
