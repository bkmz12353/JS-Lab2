function startTimer() {
    window.setInterval(timer, 1000);
}
function timer() {
    var time = document.getElementsByClassName('container__timer')[0];
    time.innerHTML = parseInt(time.innerHTML) + 1;
}