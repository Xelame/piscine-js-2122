export const build = (number) => {
    const intervalID = setInterval(() => {
        let div = document.createElement('div');
        div.id = `brick-${number}`;
        div.foundation = number % 3 === 2
        document.body.appendChild(div) 
        number--
        if (number === 0) {
            clearInterval(intervalID)
        }
    }, 100)
}



export const destroy = () => {
    return
}

export const repair = () => {
    return
}
