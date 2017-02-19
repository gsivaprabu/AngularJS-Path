var timerCallTimeOut = function() {
    console.warn("Call the timerCallTimeOut Function after 8000 milliseconds");
};

var timerCallInterval = function() {
    var date = new Date();
    var seconds = date.getSeconds();
    console.log("Call the timerCallInterval Function "+seconds);
};

setTimeout(timerCallTimeOut, 8000);

setInterval(timerCallInterval, 2000);
