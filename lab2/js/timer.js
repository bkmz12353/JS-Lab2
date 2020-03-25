function create_target_date(){
    var target_date = new Date();
    //target_date.setDate(target_date.getDate()+1);
    target_date.setHours(23,59,59);
    return target_date;
}




function calculation_timer(){
    var target_date = create_target_date();
    var current_date = new Date();
    val_timer = target_date.getTime() - current_date.getTime();

    var hours = Math.floor(val_timer/1000/60/60);
    var minutes = Math.floor((val_timer-hours*60*60*1000)/1000/60);
    var seconds = Math.floor(((val_timer-hours*60*60*1000)-minutes*60*1000)/1000);


    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

function start_timer(){
    id_timer = setInterval(calculation_timer,1000);
}
function stop_timer(){
    clearInterval(id_timer);
}