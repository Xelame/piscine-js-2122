import { styles } from "./pimp-my-style.data.js"

let index = 0
let isRemove = false

export const pimp = () => {
    let button = document.getElementsByTagName('button')[0].classList

    

    if (index == styles.length-1) {
        button.add('unpimp')
        isRemove = true
    } 
    
    if (index < styles.length) {
        button.add(styles[index])
    } else if (isRemove) {
        button.remove(button[button.length-2])
    }

    if (index != styles.length-1) {
        index++
    }
    
}