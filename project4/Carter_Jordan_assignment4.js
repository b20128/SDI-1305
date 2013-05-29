//Jordan Carter
//SDI-1305
//Project 4
//05/30/2013



//string functions
var StringLib;

//Is this Number a Phone Number (abc-def-ghij) ?
// problem 1 starts
var PhoneNumberfunc = function (TenDigits){
    var firstCheck = TenDigits.indexOf("-");
    var secondCheck = TenDigits.lastIndexOf("-");
    if (firstCheck === 3 && secondCheck === 7) {
        return true
    } else{
        return false
    }
    
}//problem 1 ends


//problem 2 begins

//problem 2 ends


//main code calls
console.log(PhoneNumberfunc("610-262-5505"))
