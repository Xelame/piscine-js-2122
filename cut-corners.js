function round(float) {
    let num = 0;
    if (float > 0) {
        while (num < float) {
            num++
        }
    } else {
        while (num > float) {
            num--
        }
    }
    return num;
}
