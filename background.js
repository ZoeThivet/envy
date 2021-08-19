//Le backgroundScrip recoit le message
chrome.runtime.onMessage.addListener(
<<<<<<< HEAD
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
=======
  function(response, sender, sendResponse) {
    //Vérifie si le message est 'production'  
    if (response=='production'){
      //Si oui on execute le script 'textProduction.js'
      chrome.tabs.executeScript({
      file: 'textProduction.js'
    });
    }
    //Vérifie si le message est 'production'
    if (response=='developpement'){
      //Si oui on execute le script 'textDeveloppement.js'
      chrome.tabs.executeScript({
        file: 'textDeveloppement.js'
      });
    }
    //Vérifie si le message est 'production'
    if (response=='qualification'){
      //Si oui on execute le script 'textQualification.js'
      chrome.tabs.executeScript({
        file: 'textQualification.js'
      });
    }
  }   
  );
>>>>>>> 368c144129515bb0a0fe303dbb63fe1c8908592c
