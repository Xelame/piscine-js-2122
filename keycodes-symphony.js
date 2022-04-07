export const compose = () => {
    document.onkeydown = event => {
        if ('a' <= event.key && event.key <= 'z') {
            let div = document.createElement('div')
            div.classList.add('note')
            div.innerHTML = event.key
            document.body.appendChild(div)
        }
        if (event.key == 'Backspace') {
            let div = document.getElementsByClassName('note')[0]
            div.remove()
        }
        if (event.key == 'Enter') {
            let divs = document.querySelectorAll('.note')
            for (let i = 0; i < divs.length; i++) {
                divs[i].remove()
            }
        }
    }
}