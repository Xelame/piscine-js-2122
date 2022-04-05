export const getArchitects = () => {
    let architects = Array.from(document.getElementsByTagName('a'));
    let other = Array.from(document.getElementsByTagName('span'));
    return [architects, other]
}

export const getClassical = () => {
    let classical = Array.from(document.getElementsByClassName('classical'))
    let other = document.querySelectorAll(':not(.classical)')
    return [classical, other]
}

export const getActive = () => {
    let active = Array.from(document.getElementsByClassName('classical active'))
    let other = document.querySelectorAll(':not(.active)')
    return [active, other]
}

export const getBonannoPisano = () => {
    let bonannoPisano = document.getElementById("BonannoPisano")
    let other = document.querySelectorAll(':not(#BonannoPisano)')
    return [bonannoPisano, other]
}