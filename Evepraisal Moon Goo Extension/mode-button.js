var MODE_SPAN;

var MODE_FLAG = 0;  // 0 =>Buy, 1=>Sell

var MODE_BUTTON_INITIALIZED = 0;

var ORES = [];



function createModeButton(){

	var head = document.getElementsByTagName("blockquote")[0].childNodes[0];
	var span = document.createElement("span");
	var button = document.createElement("button");
	head.appendChild(span);
	span.appendChild(button);
	span.style.display = "inline";
	span.style.float = "right";

	button.style.color = "white";
	button.style.backgroundColor = "#7a8288";
	button.style.display = "inline";	

	MODE_SPAN = document.createElement("span");
	button.appendChild(MODE_SPAN);
	MODE_SPAN.style.display = "inline-block";
	MODE_SPAN.style.fontWeight = "bold";

	var button_txt = document.createTextNode(" Mode");
	button.appendChild(button_txt);

	button.addEventListener("click",switchEvaluationMode);

}

function switchEvaluationMode(){

	var nameBoxes = document.getElementsByClassName("namebox");
	var valueBoxes1 = document.getElementsByClassName("valuebox1");
	var valueBoxes2 = document.getElementsByClassName("valuebox2");

	if(ORES.length == 0){

		for(let i=0;i<nameBoxes.length;i++){
			ORES[i] = nameBoxes[i].innerText;
		}

	}


	if(MODE_FLAG == 0){

		for(let i=0;i<ORES.length;i++){
			if(ORE_VALUE.has(ORES[i])){
				valueBoxes1[i].innerText = ORE_VALUE.get(ORES[i]).get("Raw").get("Sell");
				valueBoxes2[i].innerText = ORE_VALUE.get(ORES[i]).get("Refined").get("Sell");
			}else{
				console.log(ORES[i] + " Not Found");
			}
		}

		MODE_SPAN.innerText = "Sell";
		MODE_SPAN.style.color = "green";
		MODE_FLAG = 1;

	}else{

		for(let i=0;i<ORES.length;i++){
			if(ORE_VALUE.has(ORES[i])){
				valueBoxes1[i].innerText = ORE_VALUE.get(ORES[i]).get("Raw").get("Buy");
				valueBoxes2[i].innerText = ORE_VALUE.get(ORES[i]).get("Refined").get("Buy");
			}else{
				console.log(ORES[i] + " Not Found");
			}
		}

		MODE_SPAN.innerText = "Buy";
		MODE_SPAN.style.color = "red";
		MODE_FLAG = 0;
	}

	if(MODE_BUTTON_INITIALIZED == 0){
		MODE_BUTTON_INITIALIZED = 1;
	}else{

	}

}