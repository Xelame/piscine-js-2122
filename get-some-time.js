function firstDayWeek(week, year) {
    var date = new Date(2022, 0, 1);
    var day = date.getDay();
    var result  = new Date(year, 0, (week * 7) + 1 - day);
    var weekInString = `${result.getMonth() + 1}`;
    if (weekInString.length == 1) {
        weekInString = `0${weekInString}`;
    }
    if (week == 1) {
        return `01-${weekInString}-${result.getFullYear()}`;
    }
    return `${result.getDate()}-${weekInString}-${result.getFullYear()}`;
}
