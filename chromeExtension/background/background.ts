chrome.browserAction.onClicked.addListener(() => {
    // 点击浏览器按钮时，通知内容脚本main 切换popup页面
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, '浏览器按钮被点击', () => { });
    });
})