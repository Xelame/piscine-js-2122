export const compose = () => {
    document.onkeydown = event => {
        if ('a' <= event.key && event.key <= 'z') {
            let div = document.createElement('div')
            div.classList.add('note')
            div.innerHTML = event.key
        }
        if (event.key == 'Backspace') {
            let div = document.getElementsByClassName('note')[0]
            div.remove()
        }
        if (event.key == 'Enter') {
            let div = document.getElementsByClassName('note')[0]
            div.classList.add('note-enter')
        }
    }
}