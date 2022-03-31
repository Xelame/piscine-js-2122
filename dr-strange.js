const newWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"];


function addWeek (date) {
    console.log(date.getDay(), date.getMonth(), date.getFullYear());
    let day = date.getDay()%14;
    return newWeek[day];
}

console.log(addWeek(new Date('2001-11-07')));