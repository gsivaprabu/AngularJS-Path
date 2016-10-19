var createWorker = function() {
    //local variables workCount,task1,task2
    var workCount = 0;
    var task1 = function() {
        workCount += 1;
        console.log("task1 from script.js => " + workCount);
    };
    var task2 = function() {
        workCount += 1;
        console.log("task2 from script.js => " + workCount);
    };
    return {
        job1: task1,
        job2: task2
    };
};

var worker = createWorker();
// You cant access out of scope
// worker.task1();

worker.job1();
worker.job1();
worker.job1();
worker.job2();
worker.job2();
worker.job2();
console.log("");
console.log("");
