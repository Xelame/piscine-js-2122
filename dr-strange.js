function addWeek(date) {
    let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let beginning = new Date('0001-01-01')
    // On prend le nombre de semaine passé depuis le début de l'année 1
    let weekNumber = Math.floor((date.getTime() - beginning.getTime()) / (7 * 24 * 60 * 60 * 1000))
    // Si semaine impair ==> on ajoute un "second"
    if (weekNumber % 2 === 0) {
        return week[date.getDay()];
    } else {
        return "second"+week[date.getDay()];
    }

     
}

function timeTravel({ date, hour, minute, second }) {
    date.setHours(hour)
    date.setMinutes(minute)
    date.setSeconds(second)
    return date
}
