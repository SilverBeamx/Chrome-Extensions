var WORKING = false;
var TIMER;

// Called when the url of a tab changes.
function checkForValidUrl(tabId, changeInfo, tab) {
	// If the tabs url starts with "http://specificsite.com"...
	if (tab.url.indexOf('https://open.spotify.com') == 0) {
		// ... show the page action.
		chrome.pageAction.show(tabId);
	}
};

function callPageScript(){

	TIMER = setTimeout(function(){WORKING = false},20000);
	WORKING = true;

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  		chrome.tabs.sendMessage(tabs[0].id, {msg: "openYoutube"})
	});

}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		if (WORKING == true){

			if (request.msg == "youtubeOpened"){
				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  					chrome.tabs.sendMessage(tabs[0].id, {msg: "openConverter"})
				});
			}else if (request.msg == "converterOpened"){
				chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  					chrome.tabs.sendMessage(tabs[0].id, {msg: "proceedConvert"})
				});
				clearTimeout(TIMER);
				WORKING = false;
			}

		}
	}
);

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
chrome.pageAction.onClicked.addListener(callPageScript);