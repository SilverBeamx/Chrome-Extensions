var thumbs = document.querySelectorAll("#hover-overlays");
var hover = false;

for (var i = 0; i < thumbs.length; i++) {
	thumbs[i].addEventListener("DOMNodeInserted", function(e) 
				{if (!hover){console.log("Node inserted"); hover = true;}}
	,false);
	thumbs[i].addEventListener("DOMNodeRemoved", function(e) 
				{if (hover){console.log("Node removed"); hover = false;}}
	,false);
}