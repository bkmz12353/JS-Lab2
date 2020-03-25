function q1() {
    alert(new Date().getDay());
}
function q2() {
    var date = new Date();
    function showDay(day) {
        var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
        return days[day];
    }
    alert(showDay(date.getDay()));
}
function q3() {
    var date = new Date(2015, 0, 7);
    var day = date.getDay();
    var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    alert(days[day]);
}