function loadFooter(){
	
	let body = document.getElementsByClassName("row")[2];

	let footerDiv = document.createElement("div");
	let def = document.createElement("div");
	let head = document.createElement("div");
	let pbody = document.createElement("div");
	let h = document.createElement("h2");
	let span = document.createElement("span");

	body.appendChild(footerDiv);
	footerDiv.appendChild(def);
	def.appendChild(head);
	def.appendChild(pbody);
	head.appendChild(h);
	h.appendChild(span);


	footerDiv.className += "col-xs-4"
	footerDiv.style.width = "100%";
	footerDiv.style.height = "230px";

	def.className += "panel panel-default";
	head.className += "panel-heading";
	pbody.className += "panel-body";
	pbody.style.paddingTop = "0px";
	def.style.height = "230px";
	head.style.height = "40px";

	h.className += "text-center";
	h.style.marginTop = "-10px";
	h.style.marginBottom = "0px";
	span.className += "label";
	span.style.fontSize = "18px";
	span.innerText = "Horde's Moon Goo Pricing Extension";



	let txt = document.createTextNode("This extension is brought to you by your fellow hordie Silveredge Crendraven.\nAll prices refer to the +15% variant of the moon goo and a 100% refine rate. Do your math where necessary.\nIf you have any question/encounter any bug, please ingame mail me.\n\nIf you find this plugin helpful and you feel generous, you can donate some isk. All donations are highly appreciated.\n\nLast but not least, happy mining. Fly safe pilots ;)");
	pbody.style.whiteSpace = "pre";
	pbody.appendChild(txt);
}