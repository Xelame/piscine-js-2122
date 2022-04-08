export const compose = () => {
    document.onkeyup = (event) => {
        if ('a' <= event.key && event.key <= 'z' || ' ' == event.key) {
            let div = document.createElement('div')
            div.classList.add('note')
            div.innerHTML = event.key
            div.style = `background: rgb(100, ${event.key.charCodeAt(0)}, 100);`
            document.body.appendChild(div)
        }
        if (event.key == 'Backspace') {
            let divs = document.querySelectorAll('.note')
            divs[divs.length-1].remove()
        }
        if (event.key == 'Escape') {
            let divs = document.querySelectorAll('.note')
            for (let i = 0; i < divs.length; i++) {
                divs[i].remove()
            }
        }
        console.log(event.key)
    }
}