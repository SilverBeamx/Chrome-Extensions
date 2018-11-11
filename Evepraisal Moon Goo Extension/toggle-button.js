var SWITCH_SPAN;

var VISIBILITY_FLAG = 1;



function createToggleButton(){

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
	button.innerText = "Ore evaluation ";

	SWITCH_SPAN = document.createElement("span");
	button.appendChild(SWITCH_SPAN);
	SWITCH_SPAN.style.display = "inline-block";
	SWITCH_SPAN.style.fontWeight = "bold";

	button.addEventListener("click",switchOreboxesVisibility);

}


function switchOreboxesVisibility(){

	var oreboxes = document.getElementsByClassName("orebox");
	var panels = document.getElementsByClassName("panel panel-default");

	if(VISIBILITY_FLAG == 0){

		//Render the ore boxes
		for (var i = 0; i < oreboxes.length; i++) {
			oreboxes[i].style.display = "block";
			panels[i].style.height = "600px";
		}

		SWITCH_SPAN.innerText = "On ";
		SWITCH_SPAN.style.color = "green";
		VISIBILITY_FLAG = 1;

	}else{

		//Hide the ore boxes
		for (var i = 0; i < oreboxes.length; i++) {
			oreboxes[i].style.display = "none";
			panels[i].style.height = "400px";
		}

		SWITCH_SPAN.innerText = "Off";
		SWITCH_SPAN.style.color = "red";
		VISIBILITY_FLAG = 0;
	}

}