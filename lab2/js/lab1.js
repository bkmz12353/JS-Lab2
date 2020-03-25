function q1() {
    var date = new Date();
    alert (date.getDate());
}
function q2() {
    var date = new Date();
    var month = date.getMonth();
    var months = ['Январь', 'Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь', 'Ноябрь', 'Декабрь'];
    alert(months[month]);

}
function q3() {
    alert(new Date().getFullYear());
}
function q4() {
    var date = new Date();
    function getZero(param) {
        if (param < 10) {
            return ('0' + param);
        } else {
            return param;
        }
    }
    alert(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth()) + '.' + date.getFullYear());
}
