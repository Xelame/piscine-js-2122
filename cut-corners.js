function round(float) {
    let num = 0;
    if (float > 0) {
        while (num < float*2) {
            num++
        }
    } else {
        while (num > float*2) {
            num--
        }
    }
    return num/2;
}

function ceil(float) {
    let num = 0;
    if (float > 0) {
        while (num < float) {
            num++
        }
        return num+1;
    } else {
        while (num > float) {
            num--
        }
        return num;
    }
}

function floor(float) {
    let num = 0;
    if (float > 0) {
        while (num < float) {
            num++
        }
        return num;
    } else {
        while (num > float) {
            num--
        }
        return num-1;
    }
}

function trunc(float) {
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