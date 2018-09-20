
function getTime() {
    var now = new Date();
    var nowString = now.getFullYear() + "-" +
        (now.getMonth() + 1) + "-" + now.getDate() +
        " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

    return nowString;
}

function downImgs(imgs) {
    for (let item of imgs) {
        chrome.downloads.download({
            url: item
        })
    }
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.cmd == "get-time") {
        sendResponse(getTime());
        return;
    }

    if (request.cmd == "down-imgs") {
        let imgs = request.imgs;
        downImgs(imgs);
        sendResponse('下载成功');
        return;
    }
})