function printDate(){
    console.log("today is 21st")
}
function printMonth(){
    console.log("month is February.");
}
function getBatchInfo(){
    console.log("Thorium, week3 day1, the topic for today is Nodejs module system")
}


module.express.date = printDate;
module.express.month = printMonth;
module.exports.batchinfo = getBatchInfo; 