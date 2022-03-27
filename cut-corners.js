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

function ceil(float) {
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
        return num+1;
    }
}

function floor(float) {
    let num = 0;
    if (float > 0) {
        while (num < float) {
            num++
        }
        return num-1;
    } else {
        while (num > float) {
            num--
        }
        return num;
    }
}

function trunc(float) {
    let num = 0;
    if (float > 0) {
        while (num < float) {
            num++
        }
        return num-1;
    } else {
        while (num > float) {
            num--
        }
        return num;
    }
}