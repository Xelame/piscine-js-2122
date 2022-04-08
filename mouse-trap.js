let isTrap = false

export const createCircle = () => {
    document.body.addEventListener("click", (e) => {
        isTrap = false 
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
    let divs = document.getElementsByTagName('div')
    let box = document.getElementsByTagName('box')[0]
    if (divs.length) {
        let div = divs[divs.length - 1]
        if (isInBox(div, box)) {
            div.style.background = "var(--purple)"
            isTrap = true
        }
        div.style.top = `${e.clientY - 25}px`
        div.style.left = `${e.clientX - 25}px`
        if (isTrap) {
            TrapPosition(div, box)
        }
    }
}


const isInBox = (circle, box) => {
    let circleRect = circle.getBoundingClientRect()
    let boxRect = box.getBoundingClientRect()
    if (circleRect.left > boxRect.left && circleRect.top > boxRect.top && circleRect.bottom < boxRect.bottom && circleRect.right < boxRect.right) {
        return true
    }
    return false
}

const TrapPosition = (circle, box) => {
    let circleRect = circle.getBoundingClientRect()
    let boxRect = box.getBoundingClientRect()
    if (circleRect.left < boxRect.left) {
        circle.style.left = `${boxRect.left+1}px`
    } 
    if (circleRect.right > boxRect.right) {
        circle.style.left = `${boxRect.right-51}px`
    } 
    if (circleRect.top < boxRect.top) {
        circle.style.top = `${boxRect.top+1}px`
    } 
    if (circleRect.bottom > boxRect.bottom) {
        circle.style.top = `${boxRect.bottom-51}px`
    }
}