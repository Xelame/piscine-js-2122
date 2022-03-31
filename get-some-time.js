function firstDayWeek(week, year) {
    var date = new Date(year, 0, 1);
    var day = date.getDay();
    var result  = new Date(year, 0, (week * 7) + 1 - day);
    return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
}
