import { styles } from "./pimp-my-style.data.js"

let index = 0

export const pimp = () => {
    let button = document.getElementsByTagName('button')[0]
    button.classList.add(styles[index])
    
    if (!styles[index]) {
        button.classList.toggle('unpimp')
        button.classList.remove(button.classList[button.classList.length - 2])
    }
    index++
    console.log(button.classList);
}