import { styles } from "./pimp-my-style.data.js"

let index = 0

export const pimp = () => {
    let isRemove = false
    let button = document.getElementsByTagName('button')[0].classList
    if (index < styles.length) {
        button.add(styles[index])
    }
    if (index == styles.length-1) {
        button.add('unpimp')
        isRemove = true
    }
    if (index != styles.length-1) {
        index++
    }
    if (isRemove) {
        button.remove(button[button.length-2])
    }
}