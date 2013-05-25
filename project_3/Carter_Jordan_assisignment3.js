//Jordan Carter
//SDI-1305
//project 3
//5/21/13


//variables
var storyHero = "Jimi the giant"
var lastSpottedIn = " a toyota camry"
var DaysSinceBreakOut = 2

//JSON data


//created 1st object, 3 properties: boolean, array, & string; and 1 mutator method   
var Escapee = {
    "name": storyHero,
    "description": [     
	" height: 3.5",
	" wearing an orange jumpsuit",
	" Armed and Dangerous"
	],
    "armed":true,
    "disappearingActs": function(){
	var EscapeList =["change clothes", "get money", "getout of dodge!"]
	for(i=0;i<EscapeList.length;i=i+1) {
	   var whatIneed = ("i need to " + EscapeList[i])
	   return whatIneed
	}
	
    }
};
//2nd object, 3 properties, object, number, and string. 3 methods: accessor, procedure, function    
var Police={
    "mainTask": ("bring in " + storyHero),
    "OfficersActive": 125,
    
    "officerRoboCop":{ 
	"name": "Raimes",
	"weapons": "automatic pistol",
	"number": 7
    },
    
    "WhosOnDuty": function(){
	if ("onDuty" == true) {
	    Console.log(this.name + "is on")
	}else{console.log(this.name + " is off")}
    },
    "APBs": function (daysSinceEscape){
	
	if (daysSinceEscape > 3){
	    var beOntheLookout = Escapee.name + Escapee.description + " last spotted in " + lastSpottedIn;}
	    else {var PanicAtTheJail = storyHero + " has escaped!!"};
	    console.log(beOntheLookout||PanicAtTheJail);
 	},
    
    "UseOfForce": function(armed){
	if(true){
	    var CurrentOrders = "Shoot to kill"}
	else{ 
	   var CurrentOrders = "Take him in alive"};
	    return CurrentOrders;
    },
    "daysHuntingEscapee": function(daysrunning){
	var DaysTracking = daysrunning + DaysSinceBreakOut;
	return DaysTracking;
    }
    
};
    
//main code
console.log(Police.mainTask);
var UseOfForceOrder = Police.UseOfForce(Escapee.armed);
Police.APBs(7);
console.log(UseOfForceOrder);
Escapee.disappearingActs(true);
console.log(Police.daysHuntingEscapee(5) + " days we've been tracking this guy, its time to send in Robocop")
Police.WhosOnDuty(json);




//thanks for the help!