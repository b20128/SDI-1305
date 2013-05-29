//Jordan Carter
//SDI-1305
//Project 4
//05/30/2013



//string functions
StringLib = {
//Is this Number a Phone Number (abc-def-ghij) ?
// problem 1 starts
"PhoneNumCheck":function(TenDigits){
        var firstCheck = TenDigits.indexOf("-");
        var secondCheck = TenDigits.lastIndexOf("-");
        if (TenDigits.length === 12){
            if ( firstCheck == 3 && secondCheck == 7) {
            return true   
            }else{
            return false} 
        }else{return false}
        
        
        
    },//problem 1 ends. Running smooth, DONT TOUCH!!


//Is this String an email adress?
//problem 2 begins
"emailCheck": function(emailadress){
    
    }
};

//problem 2 ends

//problem 3 begins



//main code calls
console.log(StringLib.PhoneNumCheck("610-262-5500"));
