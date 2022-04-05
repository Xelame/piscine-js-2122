import { styles } from "./pimp-my-style.data.js"

let index = 0

export const pimp = () => {
    let button = document.getElementsByTagName('button')[0].classList
    if (index <+ styles.length) {
        button.add(styles[index])
    }
    if (index == styles.length-1) {
        button.add('unpimp')
        button.remove(button[button.length-2])
    }
    if (index != styles.length-1) {
        index++
    }
}