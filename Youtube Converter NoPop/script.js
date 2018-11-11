var tab;


function initConvert(){

	chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    	var url = tabs[0].url;
    	convert(url);
	});

}

function convert(url){

	var newUrl = "http://convert2mp3.net/share.php?url=" + url;
	tab = window.open(newUrl, '_blank');
  	tab.focus();

}


