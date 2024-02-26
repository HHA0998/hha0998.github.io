let details = navigator.userAgent; 
let regexp = /android|iphone|kindle|ipad/i; 
let isMobileDevice = regexp.test(details); 

if (isMobileDevice) { 
	console.log("You are using a Mobile Device"); 
} else { 
	console.log("You are using Desktop"); 
}

var Xnumbr = 0
var Xnumbrr = 0
var Xload = 0

var Pnumbr = 0
var Pnumbrr = 0
var Pload = 0

const Ps4Game = [
	"tarreria",
	"Roffl",
	"wizzard money",
	"shadow gang",
	"we love casting spells",
	"MInecraft",
	"example",
	"demo",
	"whatever",
	"tarreria",
	"Roffl",
	"wizzard money",
	"shadow gang",
]

const XboxGame = [
	"SPORT",
	"NBA Live 08",
	"NBA Live 09",
	"NBA 2k 2014",
	"NBA 2k 2015",
	"NBA 2k 2016",
	"NHL 2K8",
	"WWF SmackDown",
	"UFC Undisputed 2009",
	"UFC 2010",
	"NFL Blitz II",
	"Stoked",
	"Shaun White",
	"Tiger Woods PGA 08",
	"Tiger Woods PGA 09",
	"Ricky Ponting",
	"SKATE 3",
	"Olympics - Beijing 2008",
	"FIFA 08",
	"FIFA 14",
	"FIFA 15",
	"FIFA 16",
	"Street 3",
]

var Xlsit = XboxGame.length ;
var Plist = Ps4Game.length ;

while (Pload < Plist) {
document.getElementById("pGame[" + Pnumbr + "]").innerHTML = Ps4Game[Pnumbrr];
    Pnumbr ++
	Pnumbrr ++
	Pload ++
	console.log(Pload);
}

while (Xload < Xlsit) {
document.getElementById("xGame[" + Xnumbr + "]").innerHTML = XboxGame[Xnumbrr];
	Xnumbr ++
	Xnumbrr ++
	Xload ++
	console.log(Xload);
}

let XgamesTotal = XboxGame.length;
let ps4
document.getElementById("XboxTotal").innerHTML = XgamesTotal + " Total xbox Games!";
console.log(navigator.userAgent);





