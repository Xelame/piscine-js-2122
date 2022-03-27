function round(float) {
    let num = 0;
    if (float > 0) {
        while (num < float-0.5) {
            num++
        }
    } else {
        while (num > float+0.5) {
            num--
        }
    }
    return num;
}

function floor(float) {
    let num = round(float);
    return num;
}