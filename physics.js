function getAcceleration (Object) {
    if (Object.f != undefined || Object.m != undefined) {
        return Object.f / Object.m;
    } else if (Object.Δv != undefined || Object.Δt != undefined) {
        return Object.Δv / Object.Δt;
    } else if (Object.d != undefined || Object.t != undefined) {
        return 2*Object.d / Object.t**2;
    } else {
        return "impossible";
    }
}