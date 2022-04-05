import { styles } from "./pimp-my-style.data.js"

let index = 0

export const pimp = () => {
    let button = document.getElementsByTagName('button')[0]
    if (index <+ styles.length) {
        button.classList.add(styles[index])
    }
    if (index == styles.length-1) {
        button.classList.add('unpimp')
    }
    if (index != styles.length-1) {
        index++
    }
}