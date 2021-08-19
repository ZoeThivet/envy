//Le backgroundScrip recoit le message
chrome.runtime.onMessage.addListener(
	function(response, sender, sendResponse) {
    if (response=='production' || response=='developpement' || response=='qualification'){
      chrome.tabs.executeScript({
      	file: 'text' + capitalizeFirstLetter(response) + '.js'
      });
  }
});

function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}
