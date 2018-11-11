var ORE_VALUE = new Map();
var RAW_VALUE; //As below
var REFINED_VALUE; //This will be included in the ORE_VALUE once the htmlrequests have been completed


function Ore(ore,moonGoo,gooQty,mineralQty,batchVolume){

	this.ore = ore;
	this.moonGoo = moonGoo;
	this.gooQty = gooQty;
	this.mineralQty = mineralQty;
	this.batchVolume = batchVolume;

}




function setOreValue(){

	var Orelist = new Map([
		["Bitumens", new Ore("Brimful Bitumens",["Hydrocarbons"],[65],[6000,6000,400,0,0,0,0],1000)], 
		["Coesite", new Ore("Brimful Coesite",["Silicates"],[65],[10000,2000,400,0,0,0,0],1000)],
		["Sylvite", new Ore("Brimful Sylvite",["Evaporite Deposits"],[65],[8000,4000,400,0,0,0,0],1000)],
		["Zeolites", new Ore("Brimful Zeolites",["Atmospheric Gases"],[65],[4000,8000,400,0,0,0,0],1000)],
		["Cobaltite", new Ore("Copious Cobaltite",["Cobalt"],[40],[7500,10000,500,0,0,0,0],1000)],
		["Euxenite", new Ore("Copious Euxenite",["Scandium"],[40],[10000,7500,500,0,0,0,0],1000)],
		["Scheelite", new Ore("Copious Scheelite",["Tungsten"],[40],[12500,5000,500,0,0,0,0],1000)],
		["Titanite", new Ore("Copious Titanite",["Titanium"],[40],[15000,2500,500,0,0,0,0],1000)],
		["Chromite", new Ore("Lavish Chromite",["Chromium","Hydrocarbons"],[40,10],[0,5000,1250,750,50,0,0],1000)],
		["Otavite", new Ore("Lavish Otavite",["Cadmium","Atmospheric Gases"],[40,10],[5000,0,1500,500,50,0,0],1000)],
		["Sperrylite", new Ore("Lavish Sperrylite",["Platinum","Evaporite Deposits"],[40,10],[5000,0,1000,1000,0,50,0],1000)],
		["Vanadinite", new Ore("Lavish Vanadinite",["Vanadium","Silicates"],[40,10],[0,5000,750,1250,0,50,0],1000)],
		["Carnotite", new Ore("Glowing Carnotite",["Technetium","Cobalt","Atmospheric Gases"],[50,10,15],[0,0,1000,1250,0,50,0],1000)],
		["Cinnabar", new Ore("Glowing Cinnabar",["Mercury","Tungsten","Evaporite Deposits"],[50,10,15],[0,0,1500,750,0,0,50],1000)],
		["Pollucite", new Ore("Glowing Pollucite",["Caesium","Scandium","Hydrocarbons"],[50,10,15],[0,0,1250,1000,0,50,0],1000)],
		["Zircon", new Ore("Glowing Zircon",["Hafnium","Titanium","Silicates"],[50,10,15],[0,0,1750,500,0,0,50],1000)],
		["Loparite", new Ore("Bountiful Loparite",["Promethium","Platinum","Scandium","Hydrocarbons"],[22,10,20,20],[0,0,0,0,100,200,50],1000)],
		["Monazite", new Ore("Bountiful Monazite",["Neodymium","Chromium","Tungsten","Evaporite Deposits"],[22,10,20,20],[0,0,0,0,50,150,150],1000)],
		["Xenotime", new Ore("Bountiful Xenotime",["Dysprosium","Vanadium","Cobalt","Atmospheric Gases"],[22,10,20,20],[0,0,0,0,200,100,50],1000)],
		["Ytterbite", new Ore("Bountiful Ytterbite",["Thulium","Cadmium","Titanium","Silicates"],[22,10,20,20],[0,0,0,0,50,100,200],1000)],
		["Stable Veldspar", new Ore("Stable Veldspar",[],[],[415,0,0,0,0,0,0],10)],
		["Glossy Scordite", new Ore("Glossy Scordite",[],[],[346,173,0,0,0,0,0],15)],
		["Sparkling Plagioclase", new Ore("Sparkling Plagioclase",[],[],[107,213,107,0,0,0,0],35)],
		["Opulent Pyroxeres", new Ore("Opulent Pyroxeres",[],[],[351,25,50,0,5,0,0],30)],
		["Jet Ochre", new Ore("Jet Ochre",[],[],[10000,0,0,1600,120,0,0],800)],
		["Pellucid Crokite", new Ore("Pellucid Crokite",[],[],[21000,0,0,0,760,135,0],1600)],
		["Resplendant Kernite", new Ore("Resplendant Kernite",[],[],[134,0,267,134,0,0,0],120)],
		["Dazzling Spodumain", new Ore("Dazzling Spodumain",[],[],[56000,12050,450,2100,0,0,0],1600)],
		["Brilliant Gneiss", new Ore("Brilliant Gneiss",[],[],[0,2200,2400,300,0,0,0],500)],
		["Scintillating Hemorphite", new Ore("Scintillating Hemorphite",[],[],[2200,0,0,100,120,15,0],300)],
		["Immaculate Jaspet", new Ore("Immaculate Jaspet",[],[],[0,0,350,0,75,8,0],200)],
		["Cubic Bistot", new Ore("Cubic Bistot",[],[],[0,12000,0,0,0,450,100],1600)],
		["Flawless Arkonor", new Ore("Flawless Arkonor",[],[],[22000,0,2500,0,0,0,320],1600)],
		["Lustrous Hedbergite", new Ore("Lustrous Hedbergite",[],[],[0,1000,0,200,100,19,0],300)],
		["Platinoid Omber", new Ore("Platinoid Omber",[],[],[85,34,0,85,0,0,0],60)]
	])

	var raw = document.getElementsByClassName("valuebox1");
	var refined = document.getElementsByClassName("valuebox2");



	for(var i = 0; i < raw.length; i++){
		var ore = raw[i].parentNode.innerText;

		var oreData = Orelist.get(ore);
		if(oreData == undefined){
			console.log(ore + " hasn`t been found in the ore list!");
			continue;
		}

		fullOreName = oreData["ore"];
		var rawOre = RAW_VALUE.get(fullOreName);
		if(rawOre == undefined){
			console.log(fullOreName + " hasn`t been found in the price list!");
			continue;
		}

		ORE_VALUE.set(ore,
			new Map([
				["Raw",
					new Map([
						["Buy",(rawOre.get("Buy")/rawOre.get("Volume")).toFixed(2)],
						["Sell",(rawOre.get("Sell")/rawOre.get("Volume")).toFixed(2)]
					])
				],
				["Refined",
					new Map([
						["Buy",calculateRefinedValue(oreData,0,1.15).toFixed(2)],
						["Sell",calculateRefinedValue(oreData,1,1.15).toFixed(2)]
					])
				]
			])
		)

	}

	//Remember to dump maps once finished
	console.log(ORE_VALUE);
	
}

function calculateRefinedValue(oreData,buyFlag,modifier){

	var mineralList = ["Tritanium","Pyerite","Mexallon","Isogen","Nocxium","Zydrine","Megacyte"];

	let isk = 0;
	let volume = oreData["batchVolume"];

	let flag; 

	if(buyFlag == 0){ 
		flag = "Buy";
	}else{ 
		flag = "Sell";
	}


	//Calculate moon goo isk/m3 value
	for (let i = 0; i < oreData["moonGoo"].length; i++) {

		let value = REFINED_VALUE.get(oreData["moonGoo"][i]).get(flag);
		let qty = oreData["gooQty"][i];

		isk += (value * qty * modifier);

	}


	//Calculate refined mineral value
	for (var i = 0; i < oreData["mineralQty"].length; i++) {

		let value = REFINED_VALUE.get(mineralList[i]).get(flag);
		let qty = oreData["mineralQty"][i];

		isk += (value * qty * modifier);

	}

	return (isk/volume);

}


function getOreValue(orename){

	///////////////////////
	///    Manca qui   /// 
	/////////////////////
	
	return "lol";

}