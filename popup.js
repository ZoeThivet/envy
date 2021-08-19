function textProduction() {
    chrome.tabs.executeScript({
      file: 'textProduction.js'
    }); 
}
document.getElementById('textProduction').addEventListener('click', textProduction);

function textDeveloppement() {
    chrome.tabs.executeScript({
      file: 'textDeveloppement.js'
    }); 
} 
document.getElementById('textDeveloppement').addEventListener('click', textDeveloppement);

function textQualification() {
    chrome.tabs.executeScript({
      file: 'textQualification.js'
    }); 
} 
document.getElementById('textQualification').addEventListener('click', textQualification);

function textStandard() {
  chrome.tabs.executeScript({
    file: 'textStandard.js'
  }); 
}
document.getElementById('textStandard').addEventListener('click', textStandard);
