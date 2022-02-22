
function printDate(){
    console.log(new Date().getDate())
}
function printMonth(){
    console.log((new Date().getMonth())+1);
}
function getBatchInfo(){
    console.log("Thorium, week3 day1, the topic for today is Nodejs module system")
}


module.exports.printDate = printDate;
module.exports.printMonth = printMonth;
module.exports.batchInfo = getBatchInfo; 