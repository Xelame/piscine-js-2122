const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const getRandomInt = (max) => Math.floor(Math.random() * max)

export const generateLetters = () => {
    for (let i = 1; i <= 120 ; i++) {
        let div = document.createElement('div')
        div.textContent = `${alphabet[getRandomInt(alphabet.length-1)]}`
        div.style.fontSize = `${10+i}px`
        if (i < 120/3) {
            div.style.fontWeight = 300
        } else if (i <120/3*2) {
            div.style.fontWeight = 400
        } else {
            div.style.fontWeight = 600
        }
        document.body.appendChild(div)
    }
}
