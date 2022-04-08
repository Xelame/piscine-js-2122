export const createCircle = () => {
    document.body.addEventListener("click", (e) => {
        let div = document.createElement('div')
        div.style.background = 'white'
        div.style.top = `${e.clientY - 25}px`
        div.style.left = `${e.clientX - 25}px`
        div.className = "circle"
        document.body.appendChild(div)
    })
}

export const moveCircle = () => {
    document.body.addEventListener("mousemove", follow)

}

export const setBox = () => {
    let box = document.createElement('box')
    box.className = "box"
    document.body.appendChild(box)
}


const follow = (e) => {
    let divs2 = document.getElementsByTagName('div')
    if (divs2.length) {
        let div = divs2[divs2.length - 1]
        div.style.top = `${e.clientY - 25}px`
        div.style.left = `${e.clientX - 25}px`
        let box = document.getElementsByTagName('box')[0]
        box.addEventListener("mouseover", (e) => {
            console.log(e.clientX, e.clientY)
            div.style.background = "var(--purple)"
        })
    }
}