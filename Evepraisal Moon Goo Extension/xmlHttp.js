var REQUESTS_COMPLETED = 0;




function loadValues(){

	retrieveOreValue();
	retrieveRefinedValue();

}

function checkLoadingCompletion(){

	if(REQUESTS_COMPLETED == 2){
		setOreValue();

		createToggleButton();
		switchOreboxesVisibility();

		createModeButton();
		switchEvaluationMode();

	}
}


function retrieveOreValue(){

	var xhttp = new XMLHttpRequest();

  	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		RAW_VALUE = parseXhtml(this);
    		REQUESTS_COMPLETED += 1;
    		checkLoadingCompletion();
    	}
  	};

  	//xhttp.open("GET", "https://evepraisal.com/a/ehb8r.json?p=" + Math.floor(Math.random()*1000), true);
 	xhttp.open("POST", "https://evepraisal.com/appraisal.json?market=jita&persist=no&raw_textarea=" + encodeURI("Brimful Bitumens\nBrimful Coesite\nBrimful Sylvite\nBrimful Zeolites\nCopious Cobaltite\nCopious Euxenite\nCopious Scheelite\nCopious Titanite\nLavish Chromite\nLavish Otavite\nLavish Sperrylite\nLavish Vanadinite\nGlowing Carnotite\nGlowing Cinnabar\nGlowing Pollucite\nGlowing Zircon\nBountiful Loparite\nBountiful Monazite\nBountiful Xenotime\nBountiful Ytterbite\nStable Veldspar\nGlossy Scordite\nSparkling Plagioclase\nOpulent Pyroxeres\nJet Ochre\nPellucid Crokite\nResplendant Kernite\nDazzling Spodumain\nBrilliant Gneiss\nScintillating Hemorphite\nImmaculate Jaspet\nCubic Bistot\nFlawless Arkonor\nLustrous Hedbergite\nPlatinoid Omber"),true);

 	xhttp.send(null);

}



function retrieveRefinedValue(){

	var xhttp = new XMLHttpRequest();

  	xhttp.onreadystatechange = function() {
    	if (this.readyState == 4 && this.status == 200) {
    		REFINED_VALUE = parseXhtml(this);
    		REQUESTS_COMPLETED += 1;
    		checkLoadingCompletion();
    	}
  	};

  	//xhttp.open("GET", "https://evepraisal.com/a/ehta3.json?p=" + Math.floor(Math.random()*1000), true);
  	xhttp.open("POST", "https://evepraisal.com/appraisal.json?market=jita&persist=no&raw_textarea=" + encodeURI("Hydrocarbons\nSilicates\nEvaporite Deposits\nAtmospheric Gases\nCobalt\nScandium\nTungsten\nTitanium\nChromium\nCadmium\nPlatinum\nVanadium\nTechnetium\nMercury\nCaesium\nHafnium\nPromethium\nNeodymium\nDysprosium\nThulium\nTritanium\nPyerite\nMexallon\nIsogen\nNocxium\nZydrine\nMegacyte"),true);
 	xhttp.send();

}


function parseXhtml(raw){

	var obj = JSON.parse(raw.responseText);
	obj = obj["appraisal"];
	var list = new Map();

	for(var i = 0; i < obj["items"].length; i++){
		list.set(obj["items"][i]["name"],
			new Map([
				["Buy", obj["items"][i]["prices"]["buy"]["max"]],
				["Sell", obj["items"][i]["prices"]["sell"]["min"]],
				["Volume", obj["items"][i]["typeVolume"]]
			])
		)
	}

	return list;
}