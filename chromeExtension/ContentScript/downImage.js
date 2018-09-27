var imgs = [];
getAllImage();
sendImgsToBg();

function getAllImage() {
    let imgDoms = [...document.querySelectorAll('img')];
    for (let item of imgDoms) {
        let src = item.src ? item.src : item.dataset.src;
        imgs.push(src);
    }
}

function sendImgsToBg() {
    chrome.runtime.sendMessage(
        {
            cmd: 'down-imgs',
            imgs: imgs
        },
        function (response) {
            console.log(response)
        }
    )
}