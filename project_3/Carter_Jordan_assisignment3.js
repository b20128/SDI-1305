//Jordan Carter
//SDI-1305
//project 3
//5/21/13


//variables
var storyHero = "Jimi the giant"
var lastSpottedIn = " a toyota camry"
var armed = true 

//created 1st object
var MainCharacter = {
    "name": storyHero,
    "description": [
	" height: 3.5",
	" wearing an orange jumpsuit",
	" Armed and Dangerous"
	],
    
 

    
    "APBs": function (daysSinceEscape){
	
	if (daysSinceEscape > 3){
	    var beOntheLookout = this.name + this.description;}
	    else {var PanicAtTheJail = storyHero + " has escaped!!"};
	    console.log(beOntheLookout||PanicAtTheJail);
 	},
    
    "UseOfForce": function(armed){
	if(true){
	    var CurrentOrders = "Shoot to kill"
	}
	else{ 
	   var CurrentOrders = "Take him in alive"    
	};
	return CurrentOrders;
    }
};
    

var UseOfForceOrder = MainCharacter.UseOfForce(armed)
MainCharacter.APBs(7);
console.log(UseOfForceOrder)




//I'm trying to create a method called APBs that runs a console log
//that either tells the police what to look for or alerts the public 
//I'd like to run the console at the end, i cant get it working either way
//should i be running the functions/methods? i felt like i was blending the different
//data types together and after you last email, thats looking more and more
//probable.

//thanks for the help!