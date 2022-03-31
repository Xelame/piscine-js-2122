function firstDayWeek(week, year) {
    var result  = new Date(year, 0, (week * 7) -6);
    var weekInString = `${result.getMonth() + 1}`;
    if (weekInString.length == 1) {
        weekInString = `0${weekInString}`;
    }
    return `${result.getDate()}-${weekInString}-${result.getFullYear()}`;
}