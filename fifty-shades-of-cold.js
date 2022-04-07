import { colors } from "./fifty-shades-of-cold.data.js"

const coldShades = ["aqua", "blue", "turquoise", "green", "cyan", "navy", "purple"]

export const generateClasses = () => {
    let style = document.createElement('style')
    colors.forEach((color) => {  
        if (style.styleSheet) {
            // This is required for IE8 and below.
            style.styleSheet.cssText = `.${color} {background : ${color};}`;
        } else {
            style.appendChild(document.createTextNode(`.${color} {background : ${color};}`));
        }
    })
    document.head.appendChild(style)
}

export const generateColdShades = () => {
    colors.forEach((color) => {
        if(coldShades.some((cold) => RegExp(`${cold}`).test(color))) {
            let div = document.createElement('div')
            div.className = color
            div.innerHTML = color
            document.body.appendChild(div)
        }
    })
}

export const choseShade = (shade) => {
    let divs = document.querySelectorAll('div')
    for (let index = 0; index < divs.length; index++) {
        const div = divs[index]
        div.className = shade
    }
}