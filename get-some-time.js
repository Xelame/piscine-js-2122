function firstDayWeek(week, year) {
    var date = new Date(year, 0, 1);
    var day = date.getDay();
    return new Date(year, 0, (week * 7) + 1 - day);
}
