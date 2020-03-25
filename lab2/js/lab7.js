
function startTimer2() {
    window.timerId = window.setInterval(timer2, 1000);
    document.getElementsByClassName('button9')[0].style.display = 'none';
    document.getElementsByClassName('button8')[0].style.display = 'grid';
}

function stopTimer2() {
    window.clearInterval(window.timerId);
    document.getElementsByClassName('button9')[0].style.display = 'grid';
    document.getElementsByClassName('button8')[0].style.display = 'none';
}

function timer2() {
    var time = document.getElementsByClassName('container__timer')[0];
    time.innerHTML = parseInt(time.innerHTML) + 1;
}




function reverse() {

    window.timerId = window.setInterval(timer, 1000);
    document.getElementsByClassName('button7')[0].style.display = 'none';
}

function timer() {
    var reverse = document.getElementsByClassName('container')[0];
    reverse.innerHTML = parseInt(reverse.innerHTML) - 1;
    document.getElementsByClassName('button7')[0].disabled = true;
    if (reverse.innerHTML > 0) {
        return reverse.innerHTML;
    } else {
        window.clearInterval(window.timerId);
        document.getElementsByClassName('container')[0].style.display = 'none';
        return (document.getElementsByClassName('container_end')[0].style.display = 'block');
    }
}
