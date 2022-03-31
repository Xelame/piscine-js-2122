function firstDayWeek(week, year) {
    var result  = new Date(year, 0, (week * 7) - 6);
    if (week == 1) {
        return `01-${result.getMonth() + 1}-${result.getFullYear()}`;
    }
    return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`;
}
