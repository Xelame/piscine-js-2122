export const build = (number) => {
    let i = 1;
    const intervalID = setInterval(() => {
        let div = document.createElement('div');
        div.id = `brick-${i}`;
        div.foundation = i % 3 === 2
        document.body.appendChild(div) 
        i++
        if (number === i) {
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
