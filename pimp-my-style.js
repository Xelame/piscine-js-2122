import { styles } from "./pimp-my-style.data.js"

let index = 0

export const pimp = () => {
    let button = document.getElementsByTagName('button')[0]
    button.classList.add(styles[index])
    if (index != styles.length) {
        index++
    }
}