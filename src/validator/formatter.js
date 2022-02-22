function stringTrim(str){
    console.log(str.trim())                     
}
function lcase(str){
    console.log(str.toLowerCase())            
}                                      
function ucase(str){                   
    console.log(str.toUpperCase())             
}                                        
module.exports.trim = stringTrim
module.exports.toLowerCase = lcase
module.exports.toUpperCase = ucase
