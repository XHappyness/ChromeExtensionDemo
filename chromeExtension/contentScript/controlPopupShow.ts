document.addEventListener('keydown', function (e) {
    if (e.keyCode === 115) {
        controlPopupIframe();
    }
})

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request == "浏览器按钮被点击") {
        controlPopupIframe();
        return;
    }
})

function controlPopupIframe() {
    let popupDomID = 'gs-popup-iframe';
    let popupUrl = 'http://localhost:8080/'
    var popupIframe = document.getElementById(popupDomID);
    if (popupIframe) {
        //隐藏消失
        if (popupIframe.style.display === 'block') {
            popupIframe.style.display = 'none';
        } else {
            popupIframe.style.display = 'block';
        }
    } else {
        let box = document.createElement('div');
        box.innerHTML = `<iframe grabber-window="${popupDomID}" id="${popupDomID}" src="${popupUrl}" frameborder="no" border="0" marginwidth="0" marginheight="0" scrolling="no" allowTransparency="true" allowtransparency="yes" style="box-sizing: content-box; width: 560px; height: 660px; display: block;"></iframe>`;
        document.body.appendChild(box.firstChild)//popup总控台;
    }
}