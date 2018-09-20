var now = chrome.extension.getBackgroundPage().getTime();
document.getElementById('currentTime').innerText = now;

document.getElementById('add-time').addEventListener('click', addTimeToTab);
function addTimeToTab() {
  chrome.tabs.executeScript(null, {
    file: 'ContentScript/addTimeToTab.js'
  });
}

document.getElementById('down-imgs').addEventListener('click', downLoadALLpicture);
function downLoadALLpicture() {
  chrome.tabs.executeScript(null, {
    file: 'ContentScript/downImage.js'
  });
}