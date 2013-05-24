//Jordan Carter
//SDI-1305
//project 3
//5/21/13


//variables
var storyHero = "Jimi the giant"
var lastSpottedIn = " a toyota camry"
var armed = true 

//created 1st object
var Escapee = {
    "name": storyHero,
    "description": [
	" height: 3.5",
	" wearing an orange jumpsuit",
	" Armed and Dangerous"
	],
    "disappearingActs": function(){
	var EscapeList =["change clothes", "get money", "getout of dodge!"]
	
    }
};
    //methods
var Police={
    "APBs": function (daysSinceEscape){
	
	if (daysSinceEscape > 3){
	    var beOntheLookout = this.name + this.description;}
	    else {var PanicAtTheJail = storyHero + " has escaped!!"};
	    console.log(beOntheLookout||PanicAtTheJail);
 	},
    
    "UseOfForce": function(){
	if(true){
	    var CurrentOrders = "Shoot to kill"
	}
	else{ 
	   var CurrentOrders = "Take him in alive"    
	};
	return CurrentOrders;
    }
};
    
//main code
var UseOfForceOrder = Escapee.UseOfForce(armed);
Escapee.APBs(7);
console.log(UseOfForceOrder);




//thanks for the help!