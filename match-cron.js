function matchCron(cron, date) {
    let match = cron.split(' ');
    let minute = match[0];
    let hour = match[1];
    let dayOfMonth = match[2];
    let month = match[3];
    let dayOfWeek = match[4];
    let year = match[5];
    let isValid = true;
    if (!(minute === '*' || minute === date.getMinutes())) {
        isValid = false;
    }
    if (!(hour === '*' || hour === date.getHours())) {
        isValid = false;
    }
    if (!(dayOfMonth === '*' || dayOfMonth === date.getDate())) {
        isValid = false;
    }
    if (!(month === '*' || month === (date.getMonth() + 1))) {
        isValid = false;
    }
    if (!(dayOfWeek === '*' || dayOfWeek === date.getDay())) {
        isValid = false;
    }
    if (!(year === '*' || year === date.getFullYear())) {
        isValid = false;
    }
    return isValid;

}
