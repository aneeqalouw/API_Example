//creating a function

function addition(a,b){
    return a + b
}

//exporting the function to be used across files
module.exports = {
    addition
}

//** shorcut(when only exporting 1 module, no need to do module.exports):
// exports.addition = (a,b)=>{
//     return a + b
// }