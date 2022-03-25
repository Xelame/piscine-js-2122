function getAcceleration (Object) {
    if (Object.f != undefined && Object.m != undefined) {
        return Object.f / Object.m;
    } else {
        return "impossible";
    }
}