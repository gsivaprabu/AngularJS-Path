var run = function() {
    console.log("Running Hard !!");
}
var sleep = function() {
    console.log("Sleeping Hard !!");
}
var doWork = function(action) {
    console.log('Start action');
    try {
        action();
    } catch (ex) {
        console.log(ex);
    }
    console.log('End action');
}
doWork(sleep);
console.log("");
doWork(run);
console.log("");
doWork(drive);