function script() {
    var date = new Date();
    var start = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
    alert((date.getTime() - start.getTime())*0.001);
}