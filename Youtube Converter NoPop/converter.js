
function proceedConvert(){

	document.getElementById("convertForm").submit();

}

document.addEventListener('load',function(){
	chrome.runtime.sendMessage({msg: "converterOpened"})
},true);

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	//console.log("Message received")
    if(request.msg == "proceedConvert"){
		proceedConvert();
	}
  });