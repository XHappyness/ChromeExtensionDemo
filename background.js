
function getTime() {
    var now = new Date();
    var nowString = now.getFullYear() + "-" +
        (now.getMonth() + 1) + "-" + now.getDate() +
        " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

    return nowString;
}

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.cmd == "get-time") {
        sendResponse(getTime());
        return;
    }
})


