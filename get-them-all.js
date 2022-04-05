export const getArchitects = () => {
    let architects = document.querySelectorAll('a');
    let other = document.querySelectorAll('span');
    return [architects, other]
}

export const getClassical = () => {
    let classical = document.querySelectorAll('.classical')
    let other = document.querySelectorAll(':not(.classical)')
    return [classical, other]
}

export const getActive = () => {
    let active = document ('active')
    let other = document.getSelectionByClassName(':not(active)')
    return [active, other]
}

export const getBonannoPisano = () => {
    let bonannoPisano = document.getElementsById('bonanno-pisano')
    let other = document.getElementsById(':not(bonanno-pisano)')
    return [bonannoPisano, other]
}