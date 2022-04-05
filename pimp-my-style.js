import { styles } from "./pimp-my-style.data.js"

let index = 0

export const pimp = () => {
    if (index < styles.length) {
        let button = document.getElementsByTagName('button')[0]
        button.classList.add(styles[index])
    }
    if (index == styles.length) {
        button.classList.toggle('unpimp')
    }
    if (index != styles.length-1) {
        index++
    }
}