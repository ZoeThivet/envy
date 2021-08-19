if (localStorage.getItem("prod")=='production'){
    chrome.runtime.sendMessage('production'); 
}

if (localStorage.getItem("dev")=='developpement'){
    chrome.runtime.sendMessage('developpement'); 
}

if (localStorage.getItem("qualif")=='qualification'){
    chrome.runtime.sendMessage('qualification'); 
}