/*
function firstDayWeek(week,year){
    let time = new Date(year)
    if(week === 1){
        time.setHours(24)
        return formattedDate(time) 
    }
    let dayPlus = week*7*24
    time.setHours(dayPlus-123)
        
        for(let i = 0;i<7;i++){
            let today = getWeekDay(time)
            if(today === 'Monday'){
                let res = formattedDate(time)
                return res
            }
            time.setHours(-24)    
        }
        return time
    }
    function formattedDate(date) {
        let month = String(date.getMonth() + 1);
        let day = String(date.getDate()-1);
        let year = String(date.getFullYear());
        
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        if (year.length === 1) year = '000' + year;
        if (year.length === 2) year = '00' + year;
        if (year.length === 3) year = '0' + year; 
        return `${day}-${month}-${year}`;
    }

    function getWeekDay(date) {
        return days[date.getDay()-1];
    }
*/

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    

function firstDayWeek(week, year) {
    var date = new Date(year);
    if (week == 1) {
        var result  = new Date(year); 
    } else {
        var result  = new Date(year, 0, ((week-1) * 7));
        for (let decalage = 1; result.getDay() > 1; decalage++) {
            result = new Date(year, 0, ((week-1) * 7)-decalage)
        }
    }
    if ((week-1)*7 > 365) {
        var result = new Date(year, 11, 32);
    }
    console.log(days[result.getDay()]);
    var dayInString = `${result.getDate()}`;
    var weekInString = `${result.getMonth() + 1}`;
    if (weekInString.length == 1) {
        weekInString = `0${weekInString}`;
    }
    if (dayInString.length == 1) {
        dayInString = `0${dayInString}`;
    }
    return `${dayInString}-${weekInString}-${year}`;
}


console.log(firstDayWeek(52, '1000'))