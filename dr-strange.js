const newWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "secondMonday", "secondTuesday", "secondWednesday", "secondThursday", "secondFriday", "secondSaturday", "secondSunday"];


function addWeek (date) {
    console.log(date.getDay(), date.getMonth(), date.getFullYear());
    let day = ((date.getDate()*(date.getMonth()+1)*date.getFullYear())-1)%14;
    return newWeek[day];
}
