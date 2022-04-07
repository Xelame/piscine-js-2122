export const createCircle = () => {
    document.onmclick = () => {
        let div = document.createElement('div')
        div.style.background = 'white'
        div.className = "circle"
        document.body.appendChild(div)
    } 
}

export const moveCircle = () => {
    document.onkeydown = (event) => {
        let div = document.querySelector('.circle')
        if (event.key == 'ArrowLeft') {
            div.style.left = `${parseInt(div.style.left) - 10}px`
        }
        if (event.key == 'ArrowRight') {
            div.style.left = `${parseInt(div.style.left) + 10}px`
        }
        if (event.key == 'ArrowUp') {
            div.style.top = `${parseInt(div.style.top) - 10}px`
        }
        if (event.key == 'ArrowDown') {
            div.style.top = `${parseInt(div.style.top) + 10}px`
        }
    }
}

export const setBox = () => {
    document.onkeydown = (event) => {
        let div = document.createElement('div')
        div.style.backgroundcolor = 'white'
        div.className = circle
        document.body.appendChild(div)
    } 
}