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
    console.log(document.querySelectorAll('brick'))
}



export const destroy = () => {

}

export const repair = (arrayOfIds) => {
    console.log(arrayOfIds);
    const brick = document.getElementById(arrayOfIds)
    brick.setAttribute('repaired', brick.foundation ? true : 'in progress')

}
