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
	for(i=0;i<EscapeList.length;i=i+1) {
	   console.log("i need to " + EscapeList[i]) 
	}
	
    }
};
//2nd object, 2 properties, number and string 2     
var Police={
    "mainTask": ("bring in " + storyHero),
    "OfficersOnDuty": 125,
    "APBs": function (daysSinceEscape){
	
	if (daysSinceEscape > 3){
	    var beOntheLookout = Escapee.name + Escapee.description;}
	    else {var PanicAtTheJail = storyHero + " has escaped!!"};
	    console.log(beOntheLookout||PanicAtTheJail);
 	},
    
    "UseOfForce": function(){
	if(true){
	    var CurrentOrders = "Shoot to kill"}
	else{ 
	   var CurrentOrders = "Take him in alive"};
	    return CurrentOrders;
    }
};
    
//main code
console.log(Police.mainTask);
var UseOfForceOrder = Police.UseOfForce(armed);
Police.APBs(7);
console.log(UseOfForceOrder);
Escapee.disappearingActs(true)




//thanks for the help!