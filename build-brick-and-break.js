export const build = (number) => {
    let i = 1;
    const intervalID = setInterval(() => {
        let div = document.createElement('div');
        div.id = `brick-${i}`;
        div.dataset.foundation =  i % 3 == 2 ? true : ''
        document.body.appendChild(div)

        if (number === i) {
            clearInterval(intervalID)
        }
        i++
    }, 100)
}



export const destroy = () => {
    let allbricks = document.querySelectorAll('[id^=brick]')
    let lastbrick = allbricks[allbricks.length-1]
    lastbrick.remove()
}

export const repair = (...id) => {
    for (let index = 0; index < id.length; index++) {
        const brick = document.getElementById(id[index])
        brick.setAttribute('repaired', brick.getAttribute("data-foundation") ? true : 'in progress')
    }
}
