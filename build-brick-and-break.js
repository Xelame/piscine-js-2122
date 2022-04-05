export const build = (number) => {
    for (let i = 1; i <= number; i++) {
        let div = document.createElement('div');
        div.id = `brick-${i}`;
        div.foundation = i % 3 === 2
        document.body.appendChild(div);
    }
}