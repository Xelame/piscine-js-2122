export const build = (number) => {
    let i = 1;
    const intervalID = setInterval(() => {
        let div = document.createElement('div');
        div.id = `brick-${i}`;
        div.setAttribute('foundation', i % 3 == 2);
        document.body.appendChild(div) 
        
        if (number === i) {
            clearInterval(intervalID)
        }
        i++
    }, 100)
}



export const destroy = () => {
    
}

export const repair = (arrayOfIds) => {
    for (let i = 0; i < arrayOfIds.length; i++) {
        console.log(`brick-${arrayOfIds}`)
        const brick = document.getElementById(`brick-${arrayOfIds[i]}`)
        brick.setAttribute('repaired', brick.foundation ? true : 'in progress')
    }
}
