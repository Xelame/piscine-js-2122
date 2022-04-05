export const getArchitects = () => {
    let architects = document.querySelectorAll('.architect');
    let other = document.querySelectorAll(':not(.architect)');
    return [architects, other]
}

export const getClassical = () => {
    let classical = document.getElementsByClassName('classical')
    let other = document.getElementsByClassName(':not(classical)')
    return [classical, other]
}

export const getActive = () => {
    let active = document.getSelectionByClassName('active')
    let other = document.getSelectionByClassName(':not(active)')
    return [active, other]
}

export const getBonannoPisano = () => {
    let bonannoPisano = document.getElementsById('bonanno-pisano')
    let other = document.getElementsById(':not(bonanno-pisano)')
    return [bonannoPisano, other]
}