function startTimer3() {
    window.setInterval(timer, 1000);
}
function timer() {
    var elem = document.getElementsByClassName('container')[0];
    var nowDate = new Date();
    elem.innerHTML = addZero(nowDate.getHours()) + ':' + addZero(nowDate.getMinutes()) + ':' + addZero(nowDate.getSeconds());
}
function addZero(param) {
    if (param < 10) {
        return ('0' + param);
    } else {
        return param;
    }
}