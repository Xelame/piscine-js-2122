import { styles } from "./pimp-my-style.data.js"

let index = 0

export const pimp = () => {
    let classbutton = document.getElementsByTagName('button')[0].classList
    
    if (classbutton.length-1 == styles.length) {
        classbutton.toggle('unpimp')
    } 
    
    if (classbutton[classbutton.length-1] != 'unpimp') {
        classbutton.add(styles[index])
        index++
    } else {
        classbutton.remove(classbutton[index])
        index--
    }
    
    
    
}