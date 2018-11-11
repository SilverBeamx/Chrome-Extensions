

////////////      MAIN      ////////////


function initialize(){

	var sites = document.getElementsByClassName("panel-body");
	var panels = document.getElementsByClassName("panel panel-default");

	var ores = [];


	for (var i = 0; i < sites.length; i++) {
		
		//Per-panel section
		var site = sites[i];
		var panel = panels[i];
	
		panel.style.height = "600px";

		var orebox = site.appendChild(document.createElement("div"));
		orebox.className += "orebox";
		orebox.appendChild(document.createElement("hr"));

		var h4 = orebox.appendChild(document.createElement("h4"));
		h4.innerText = "Ore Analysis";

		var span1 = document.createElement("span");
		var span2 = document.createElement("span");
		h4.appendChild(span2);
		h4.appendChild(span1);
		span1.style.float = "right";
		span2.style.float = "right";
		span1.style.display = "inline-block";
		span2.style.display = "inline-block";
		span1.style.marginRight = "17px";
		//span2.style.marginRight = "17px";
		span1.style.whiteSpace = "pre";
		span2.style.whiteSpace = "pre";
		span1.style.fontSize = "14px";
		span2.style.fontSize = "14px";
		span1.style.fontWeight = "normal";
		span2.style.fontWeight = "normal";
		span1.style.textAlign = "right";
		span2.style.textAlign = "right";
		span1.innerText = "Raw isk/m3";
		span2.innerText = "Refined isk/m3";


		var childNodes = site.childNodes;

		for (var j = 0; j < childNodes.length; j++) {

			//Per-ore section
			var node = childNodes[j]; 

			//Check we're considering the right type of node
			if(node.tagName != ("P" || "p")){
				continue;
			}

			var p = document.createElement("p"); 
			orebox.appendChild(p); 
			//Extract the ore name via the split function
			var tmp = node.innerText.split("% ")[1];
			ores.push(p);
			var orename = document.createTextNode(tmp);
			p.appendChild(orename);
			p.className += "namebox";

			var span1 = document.createElement("span");
			var span2 = document.createElement("span");
			p.appendChild(span2);
			p.appendChild(span1);
			span1.className += "valuebox1";
			span2.className += "valuebox2";
			span1.style.float = "right";
			span2.style.float = "right";
			span1.style.display = "inline-block";
			span2.style.display = "inline-block";
			span1.style.marginRight = "65px";
			//span2.style.marginRight = "17px";
			span1.style.whiteSpace = "pre";
			span2.style.whiteSpace = "pre";
			span1.style.fontSize = "14px";
			span2.style.fontSize = "14px";
			span1.style.fontWeight = "normal";
			span2.style.fontWeight = "normal";
			span1.style.textAlign = "right";
			span2.style.textAlign = "right";
			//span1.innerText = "1.3M";
			//span2.innerText = "680.4k";


		}
	}


}



loadValues();
initialize();
loadFooter();