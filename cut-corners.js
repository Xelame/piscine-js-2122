function round(float) {
    if (Math.abs(float)%1 >= 0.5) {
        return Math.ceil(float);
    } 
    return Math.floor(float);   
}

function floor(float) {
    let num = trunc(float);
    if (num > 0) {
        return num-1;
    }
    return num;
}

function ceil(float) {
    num = trunc(float);
    if (num < 0) {
        return num+1;
    }
    return num;
}

function trunc(float) {
    return float-float%1;
}

console.log(round(-7.4));