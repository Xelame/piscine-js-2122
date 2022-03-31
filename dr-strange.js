const newWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"];


function addWeek (date = new Date('0001-01-01')) {
    let day = date.getDay()*date.getMonth()*date.getFullYear()%14;
    return newWeek[day];
}
