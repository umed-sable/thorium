function stringTrim(str){
    return str.trim()                     
}
function lcase(str){
    return str.toLowerCase()            // let sringCase = 'funCTIonUp' //
}                                       // return(stringCase.toLowerCase())
function ucase(str){                   
    return str.toUpperCase()             // let sringCase = 'functionUp' //
}                                        // return(stringCase.toUpperCase())
module.exports.trim = stringTrim
module.exports.lowercase = lcase
module.exports.upperCase = ucase
