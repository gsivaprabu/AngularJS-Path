var run = function() {
    console.log("Running Hard !!");
}


var sleep = function() {
    console.log("Sleeping Hard !!");
}


var doWork = function(action) {
    console.log('Start action');
    try(){
    action();
    }
    catch(){

    }
    console.log('End action');

}


doWork(sleep);
doWork(run);
