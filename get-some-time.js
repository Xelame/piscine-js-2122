function firstDayWeek(week, year) {
    var date = new Date(year,0);
    if (week == 1) {
        var result  = new Date(year, 0, ((week-1) * 7)+1); 
    } else {
        var result  = new Date(year, 0, ((week-1) * 7)+1 - date.getDay());  
    }
    var dayInString = `${result.getDate()}`;
    var weekInString = `${result.getMonth() + 1}`;
    if (weekInString.length == 1) {
        weekInString = `0${weekInString}`;
    }
    if (dayInString.length == 1) {
        dayInString = `0${dayInString}`;
    }
    return `${dayInString}-${weekInString}-${result.getFullYear()}`;
}