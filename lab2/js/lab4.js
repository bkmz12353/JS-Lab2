function alerter() {
    var one = Date.parse('1988-03-01T12:00:00');
    var now = new Date().getTime();
    alert(Math.floor((now-one)*0.001*60*60));
}