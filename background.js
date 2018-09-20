
function getTime() {
    var now = new Date();
    var nowString = now.getFullYear() + "-" +
        (now.getMonth() + 1) + "-" + now.getDate() +
        " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

    return nowString;
}



