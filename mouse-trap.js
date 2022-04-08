/*let isTrap = false

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
    return circleRect.left > boxRect.left && circleRect.top > boxRect.top && circleRect.bottom < boxRect.bottom && circleRect.right < boxRect.right
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
} */

let box
let circle
let x
let y
let isInTheBox = false

export function createCircle() {
    addEventListener("click", function() {
        circle = document.createElement("div")
        circle.className = "circle"
        if (isInTheBox) {
            circle.style.background = "var(--purple)"

        } else {
            circle.style.background = "white"
        }
        circle.style.left = x
        circle.style.top = y
        document.body.appendChild(circle)
        isInTheBox = false
    })
}

export function setBox() {
    box = document.createElement("div")
    box.className = "box"
    document.body.appendChild(box)
}

export function moveCircle() {
    addEventListener("mousemove", e => {
        document.querySelectorAll(".circleRem").forEach((elem) => {
            elem.remove()
        })
        x = e.clientX - 25 + "px"
        y = e.clientY - 25 + "px"
        let circle = document.createElement("div")
        circle.className = "circle"
        circle.classList.add("circleRem")
        if (isInTheBox) {
            circle.style.background = "var(--purple)"
        } else {
            circle.style.background = "white"
        }
        circle.style.left = x
        circle.style.top = y
        document.body.appendChild(circle)
        if ((e.clientX >= box.getBoundingClientRect().left + 25 && e.clientX <= box.getBoundingClientRect().right - 25) && (e.clientY >= box.getBoundingClientRect().top + 25 && e.clientY <= box.getBoundingClientRect().bottom - 25)) {
            document.querySelector(".circle").style.background = 'var(--purple)'
            isInTheBox = true
        }
        if (isInTheBox) {
            if (e.clientX - 25 < box.getBoundingClientRect().left) {
                circle.style.left = box.getBoundingClientRect().left + "px"

            }
            if (e.clientX + 25 > box.getBoundingClientRect().right) {
                circle.style.left = box.getBoundingClientRect().right - 50 + "px"
            }
            if (e.clientY - 25 < box.getBoundingClientRect().top) {
                circle.style.top = box.getBoundingClientRect().top + "px"
            }
            if (e.clientY + 25 > box.getBoundingClientRect().bottom) {
                circle.style.top = box.getBoundingClientRect().bottom - 50 + "px"
            }
            document.querySelector(".circle").style.background = 'var(--purple)'
        }
    })
}