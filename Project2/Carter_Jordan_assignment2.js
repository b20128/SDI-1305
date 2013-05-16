//Jordan Carter
//SDI_1305
//Project 2



//setting up my variables
var hero = "Jimi";
var CoastIsClear = "no one is looking";  
var sneaking =3;
var rightCombination = [45,17,28,68];

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
	var PrisonLevels = -6
	
	while(PrisonLevels < 0){	
		PrisonLevels++;
		console.log(PrisonLevels + " Floors to Go");
		 
		};
		
//Array Function w/ for-loop

var startingNumbers = [15,0,15,45]
		
for (i=0; i<5; i++) {};


//Main code - inputs
OpeningCellDoor (CoastIsClear);

movingInTheHall (sneaking , CoastIsClear);


console.log( PrisonLevels + " floors to go, almost home!")

