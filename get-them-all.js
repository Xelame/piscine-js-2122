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
    let active = document.querySelectorAll('.classical.active')
    let other = document.querySelectorAll(':not(active)')
    return [active, other]
}

export const getBonannoPisano = () => {
    let bonannoPisano = document.querySelector('#BonannoPisano')
    let other = document.querySelectorAll(':not(#BonannoPisano)')
    return [bonannoPisano, other]
}