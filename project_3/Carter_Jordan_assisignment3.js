//Jordan Carter
//SDI-1305
//project 3
//5/21/13


//variables
var storyHero = "Jimi the giant"
var lastSpottedIn = " a toyota camry"
var daysSinceEscape = 7
var beOntheLookout
var alertTheMasses

//created 1st object
var MainCharacter = {
    "name": storyHero,
    "description": {
	"height ": 3.5,
	"wearing ": "Orange Jumpsuit",
	"armed ": true
    },
<<<<<<< HEAD
=======
    var Spotted: function(currentEscapingIn){
    	var BreakingNews =("suspect seen in " + lastSPottedIn)
    	return BreakingNews
    	
    }

    // i cant get either of these methods to work what am i missing?
    // i'm trying to incorporate a loop some where in all this,
    // but i'm drawing a complete blank. How could i make use of it?
    // also i wanted to have like a special order for the police that pops up if 
    // the hero is armed, in the console, how should i do that and what would that be in the flow chart?
}
//main code 
>>>>>>> c60b2d938e77c48d3cca48137ba8ff16595610b9

    //My methods
    "APBs": function(daysSinceEscape){
	if (daysSinceEscape < 7) {
	var beOntheLookout = this.name + this.description + this.armed;
	 
    }
	else var alertTheMasses = storyHero + " has escaped!!";
	
    },
//I'm trying to create a method called APBs that runs a console log
//that either tells the police what to look for or alerts the public 
//I'd like to run the console at the end, i cant get it working either way
//should i be running the functions/methods? i felt like i was blending the different
//data types together and after you last email, thats looking more and more
//probable.
//thanks for the help!

    "newsUpdate": function(currentEscapingIn) {
	var BreakingNews = ("suspect seen in " + lastSpottedIn);
	return BreakingNews;
    }

};
console.log(beOntheLookout);
console.log(alertTheMasses);
