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
    let num = 0;
    if (float > 1) {
        while (num < float) {
            num++
            console.log(num);
        }
        num--;
    } else if (float < 1) {
        while (num > float) {
            num--
            console.log(num)
        }
        num++;
    }
    return num;
}
