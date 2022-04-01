function dayOfTheYear(date) {
    let count = 0;
    for (let i = 1; new Date(date.getFullYears(), 0, i) != date; i++) {
        count++;
        console.log(count);
    }
    
    return count;
}