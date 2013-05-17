//Jordan Carter
//SDI_1305
//Project 2



//setting up my variables
var hero = "Jimi";
var CoastIsClear = "no one is looking";  
var sneaking =3;
var CarType = ["firetruck", "train", "jet", "helicopter"];
var PrisonLevels = -6

//Process procedure

var OpeningCellDoor = function(LookingOut){
    
    if ("no one is looking") {
        console.log ("the prison door opens and " + hero + " leaves the cell")
    } else console.log ("door is still shut")
}

//boolean function

var movingInTheHall = function( noiseLevel, anyoneLooking){
	if(noiseLevel < 5 && anyoneLooking == "no one is looking" ){
		return console.log ("Moving past the hall!");
	
	} else return console.log ("busted!");
		
}

//number Function w/ While loop
	
	
	while(PrisonLevels < 0){	
		PrisonLevels++;
		console.log(PrisonLevels + " Floors to Go");
		 
};
		
//string function

var secretPhrase = function (firstPart, secondPart){
	if (firstPart + secondPart === "i'm outta here!")
	console.log("now to choose a car")
	else console.log("halt who goes there")		
};


//Array Function w/ for-loop

var getawayCar = ["red", "green", "blue", "black"]
var carLength = getawayCar.length		
	
	for (var i=0; i < carLength; i++) {
		var WayToEscape = getawayCar[2] + " " + CarType[2]; 
		
}
		 


//Main code - inputs
OpeningCellDoor (CoastIsClear);
console.log( PrisonLevels + " floors to go, almost home!")
movingInTheHall (sneaking , CoastIsClear);
secretPhrase("i'm outta ", "here!")
console.log(hero + " is taking the " + WayToEscape + " to escape" )

