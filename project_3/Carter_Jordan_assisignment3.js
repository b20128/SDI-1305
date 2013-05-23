//Jordan Carter
//SDI-1305
//project 3
//5/21/13


//variables
var storyHero = "Jimi the giant"
var lastSpottedIn = " a toyota camry"
var daysSinceEscape
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

     
//main code 

    //My methods, APBs keeps giving me a "missing formal parameter:(on colum 23)" error
    //can a loop be a function, if so what am i missing this should work shouldn't it??
    "APBs": function (for (daysSinceEscape = 0;daysSinceEscape >== 3; daysSinceEscape = daysSinceEscape + 1)){
	if (daysSinceEscape < 3){
	    var beOntheLookout = this.name + this.description + this.armed;}
		else var alertTheMasses = storyHero + " has escaped!!";
    }
},
    


    "newsUpdate": function(currentEscapingIn) {
	var BreakingNews = ("be on the lookout for " + storyHero + "suspect last seen in" + lastSpottedIn);
	return BreakingNews;
    }

};
console.log(beOntheLookout||alertTheMasses);

console.log(BreakingNews);
//I'm trying to create a method called APBs that runs a console log
//that either tells the police what to look for or alerts the public 
//I'd like to run the console at the end, i cant get it working either way
//should i be running the functions/methods? i felt like i was blending the different
//data types together and after you last email, thats looking more and more
//probable.

//thanks for the help!