import { styles } from "./pimp-my-style.data.js"

let index = 0

export const pimp = () => {
    let button = document.getElementsByTagName('button')[0]
    button.classList.add(styles[index])
    index++
    if (index >= button.classList.length - 1) {
        button.classList.remove(button.classList[button.classList.length - 2])
    }
    console.log(button.classList);
}