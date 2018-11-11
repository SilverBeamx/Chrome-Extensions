
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.msg == "openYoutube"){
     	openYoutube();
    }
  });

function openYoutube(){

	var song = document.getElementsByClassName("track-info__name ellipsis-one-line")[0].firstChild.firstChild.firstChild.innerText.split(" ").join("+");
	var artist = document.getElementsByClassName("track-info__artists ellipsis-one-line")[0].firstChild.firstChild.firstChild.innerText.split(" ").join("+");
	var newUrl = "https://www.youtube.com/results?search_query=" + artist + "+-+" + song;
	tab = window.open(newUrl, '_blank');
  	tab.focus();

}


