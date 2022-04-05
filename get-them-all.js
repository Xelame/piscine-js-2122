export const getArchitects = () => {
    let architects = document.getElementsByTagName('a')
    let other = document.getElementsByTagName('span')
    return [architects, other]
}