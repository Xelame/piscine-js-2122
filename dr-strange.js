const newWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


function addWeek (date) {
    console.log(date.getDay(), date.getMonth(), date.getFullYear());
    let day = date.getDate()%14;
    if (day > 6) {
        return "second" + newWeek[date.getDay()-1];
    }
    return newWeek[day];
}

console.log(addWeek(new Date('2001-11-07')));