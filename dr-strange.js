const newWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


function addWeek (date) {
    console.log(date.getDay(), date.getMonth(), date.getFullYear());
    let day = date.getDate()%14;
    if (day > 7) {
        return "second" + newWeek[date.getDay()];
    }
    return newWeek[day-1];
}

console.log(addWeek(new Date('2001-11-07')));