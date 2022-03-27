function round(float) {
    let num = 0;
    if (float > 0) {
        while (num < float-1,5) {
            num++
        }
    } else {
        while (num > float+1,5) {
            num--
        }
    }
    return num;
}

/*
function ceil(float) {
    let num = round(float);
    if (num > 0) {
        if (num < float) {
            return num+1;
        }
    } else {
        if (num > float) {
            return num-1;
        }
    }
    return num;
}

function floor(float) {
    let num = round(float);
    if (num > 0) {
        if (num > float) {
            return num-1;
        }
    } else {
        if (num < float) {
            return num-1;
        }
    }
    return num;
}
*/
