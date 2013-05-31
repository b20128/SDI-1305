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
    "EmailCheck":function(emailAdress){
        var Dotcom = emailAdress.substring(emailAdress.length , emailAdress.length - 4)
        var atSign = emailAdress.indexOf("@") 
        if (Dotcom === ".com"||".edu"||".gov"){
            if (atSign > -1) {
            return true
            } else{return false}
    
        }
    },//problem 2 ends

//Is This a Website? i.e.(http://blahblahblah)
//problem 3 begins
    "SiteCheck":function(webSitename){
        if( (webSitename.indexOf("https://")==0) ||
           (webSitename.indexOf("http://")==0)) {
            return true
           }
        else{return false};
    },//problem 3 ends
    
//Capitalize Each word in this sentence
//Problem 4 begins
    "capEachWord":function(capThis){
        var words = capThis.split(" ");
        var arr = Array();
        for (i in words)
        {
            lowCase = words[i].toLowerCase();
            lowCase = lowCase.charAt(0).toUpperCase() + lowCase.substring(1);
            arr.push(lowCase);
        }
        var corrected = arr.join(" ") 
        return corrected;
    },//Problem 4 ends

//change your separator for , to /
//Problem 5 begins
    "changeSeperator": function(string, sapacer, replacer){
        var words = string.split(" ") 
        var array = Array();
        array.push(words);
        var fixed = array.join(",");
        return fixed;
        }//problem5 ends
            

};//end of string library

//Array Library
var ArrayLib= {
    
//problem 6 begins
    "addNumbersInArray": function(input){
        var result = 0;
        for (var i = 0; i < input.length; i++){
            var numbers = input.filter(!isNaN[ input])
            result += numbers[i];
             
        }                  
        return result
    }//problem 6 ends 
};
 


//main code calls
console.log(StringLib.PhoneNumCheck("610-262-5500"));
console.log(StringLib.EmailCheck("zenmaster501@gmail.com"));
console.log(StringLib.SiteCheck("https://www.fullsail.com"));
console.log(StringLib.capEachWord("hey everyone howS EVErYONe dOING!!"));
console.log(StringLib.changeSeperator("this is captain james t kirk"," ", '/'));
console.log(ArrayLib.addNumbersInArray([1,3,"pickel",23,"red"]));
