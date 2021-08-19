<<<<<<< HEAD
=======
// Si le bouton textProduction est cliqué , on execute le script du fichier 'textProduction.js' sur la page chrome actuel.
>>>>>>> 368c144129515bb0a0fe303dbb63fe1c8908592c
function textProduction() {
    chrome.tabs.executeScript({
      file: 'textProduction.js'
    }); 
}
<<<<<<< HEAD
document.getElementById('textProduction').addEventListener('click', textProduction);

=======
  
document.getElementById('textProduction').addEventListener('click', textProduction);

// Si le bouton textDeveloppement est cliqué , on execute le script du fichier 'textDeveloppement.js' sur la page chrome actuel.
>>>>>>> 368c144129515bb0a0fe303dbb63fe1c8908592c
function textDeveloppement() {
    chrome.tabs.executeScript({
      file: 'textDeveloppement.js'
    }); 
<<<<<<< HEAD
} 
document.getElementById('textDeveloppement').addEventListener('click', textDeveloppement);

=======
}
  
document.getElementById('textDeveloppement').addEventListener('click', textDeveloppement);

// Si le bouton textQualification est cliqué , on execute le script du fichier 'textQualification.js' sur la page chrome actuel.
>>>>>>> 368c144129515bb0a0fe303dbb63fe1c8908592c
function textQualification() {
    chrome.tabs.executeScript({
      file: 'textQualification.js'
    }); 
<<<<<<< HEAD
} 
document.getElementById('textQualification').addEventListener('click', textQualification);

=======
}
  
document.getElementById('textQualification').addEventListener('click', textQualification);

// Si le bouton textStandard est cliqué , on execute le script du fichier 'textStandard.js' sur la page chrome actuel.
>>>>>>> 368c144129515bb0a0fe303dbb63fe1c8908592c
function textStandard() {
  chrome.tabs.executeScript({
    file: 'textStandard.js'
  }); 
}
<<<<<<< HEAD
=======

>>>>>>> 368c144129515bb0a0fe303dbb63fe1c8908592c
document.getElementById('textStandard').addEventListener('click', textStandard);
