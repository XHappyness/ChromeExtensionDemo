setTime();
setText();
setInterval(() => {
    setTime();
}, 1000);
function setTime() {
    chrome.runtime.sendMessage(
        { cmd: 'get-time' },
        function (response) {
            var timeNode = document.getElementById("testCurrentTime");
            if (timeNode) {
                timeNode.innerText = '现在时间： ' + response;
            } else {
                timeNode = document.createElement('p');
                timeNode.id = 'testCurrentTime';
                timeNode.innerText = '现在时间： ' + response;
                document.body.insertBefore(timeNode, document.body.firstChild)
            }
        }
    )
}

function setText() {
    var timeNode2 = document.getElementById("testCurrentTime2");
    if (timeNode2) {
        timeNode2.innerHTML = '小女子的博客地址 <a href="http://www.cnblogs.com/XHappyness/">ヾ(✿ﾟ▽ﾟ)ノ</a>';
    } else {
        timeNode2 = document.createElement('p');
        timeNode2.id = 'testCurrentTime2';
        timeNode2.innerHTML = '小女子的博客地址 <a href="http://www.cnblogs.com/XHappyness/">ヾ(✿ﾟ▽ﾟ)ノ</a>';
        document.body.insertBefore(timeNode2, document.body.firstChild)
    }
}