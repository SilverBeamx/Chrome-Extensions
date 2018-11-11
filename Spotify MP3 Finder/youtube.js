
function openConverter(){

	var newUrl = "http://convert2mp3.net/share.php?url=";
	var videoUrl = document.getElementById("video-title").href;
	newUrl = newUrl + videoUrl;
	tab = window.open(newUrl, '_self');
  	tab.focus();
  	//console.log("Hi mom!");

}

document.addEventListener('load',function(){
	chrome.runtime.sendMessage({msg: "youtubeOpened"})
},true);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	//console.log("Message received")
    if(request.msg == "openConverter"){
		openConverter();
	}
  });