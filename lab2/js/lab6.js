function time() {
    var date = new Date();
    var finishDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59);
    alert((finishDay.getTime()-date.getTime())*0.001);
}

    function timeToBirthday() {
        var nowDate = new Date();
        let inf=prompt("Введите дату рождения","")
        var arr =inf.split('-');
        if (arr[1] >= nowDate.getMonth()+1) { //ДР в текущем году еще будет (сравнение месяцев)
            var result = Date.parse(String(nowDate.getFullYear()) + '-' + String(arr[1]) + '-' + String(arr[2]) + 'T00:00:00');
        } else { //ДР будет только в след.году
            result = Date.parse(String(nowDate.getFullYear()+1) + '-' + String(arr[1]) + '-' + String(arr[2]) + 'T00:00:00');
        }
        alert(Math.floor((result - nowDate.getTime())*0.001/86400)); //60*60*24
    }
