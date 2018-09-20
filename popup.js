var now = chrome.extension.getBackgroundPage().getTime();
document.getElementById('currentTime').innerText = now;