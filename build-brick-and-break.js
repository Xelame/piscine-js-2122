export const build = (number) => {
    let i = 1;
    const intervalID = setInterval(() => {
        let div = document.createElement('div');
        div.id = `brick-${i}`;
        if (i % 3 == 2) {
            div.foundation = true
        } else {
            div.foundation = false
        }
        document.body.appendChild(div) 
        
        if (number === i) {
            clearInterval(intervalID)
        }
        i++
    }, 100)
}



export const destroy = () => {
    return
}

export const repair = () => {
    return
}
