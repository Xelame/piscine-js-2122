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
    if (num > float) {
        return num-1;
    }
    return num;
}

function ceil(float) {
    let num = round(float);
    if (num < float) {
        return num+1;
    }
    return num;
}

function trunc(float) {
    return float-float%1;
}

console.log(trunc(0));