function dayOfTheYear(date) {
    let count = 0;
    for (let i = 1; i < date.getMonth(); i++) {
        count += new Date(date.getFullYear(), i, 0).getDate();
    }
    count += date.getDate();
    return count;
}
