const gossips = [
    `Oasis star Noel Gallagher used to gorge on Greggs pastries and donuts every day`,
    `Lea Michele's lookalike Monica Moskatow says Glee star called her ugly`,
    `WE PAY FOR JUICY INFO!`,
    `Trainer to Hollywood's biggest stars reveals how to get an A-list body`,
    `Ed Sheeran comes out of music retirement to write brand new song`,
    `Kylie Jenner & Travis Scott’s breakup timeline`,
    `Quiet on the set: temper tantrums stars hope you forget`,
    `The style & grace of Chloë Grace Moretz: her top 20 red carpet looks`,
    `Paulina Porizkova feels betrayed after being cut out of husband Ric Ocasek's will`,
    `From too hot to not: Paris Hilton and Chris Zylka's relationship history`,
    `No bite in the big apple? Celine Dion looks scary skinny in New York`,
    `Jennifer Aniston and Brad Pitt relationship timeline`,
    `They shouldn’t have said that: 10 celebrity rants heard around the world`,
    `The most intense celebrity fights on set`,
    `The 18 most bitter real housewives feuds`,
    `Tristan Thompson's remarkable transformation from skinny teen to hulking NBA ace`,
    `Kim Kardashian 'considers leaving home' with Kanye West to 'save marriage'`,
]

export const grid = () => {
    const ranges = document.createElement('div')
    ranges.classList.add('ranges')
    document.body.appendChild(ranges)

    const rangeWidth = document.createElement('input')
    rangeWidth.type = 'range'
    rangeWidth.min = '200'
    rangeWidth.max = '800'
    rangeWidth.id = 'width'
    rangeWidth.addEventListener('input', () => {
        document.querySelectorAll('.gossip').forEach(gossip => {
            gossip.style.width = `${rangeWidth.value}px`
        })
    })
    ranges.appendChild(rangeWidth)

    const rangeFontSize = document.createElement('input')
    rangeFontSize.type = 'range'
    rangeFontSize.min = '20'
    rangeFontSize.max = '40'
    rangeFontSize.id = 'font-size'
    rangeFontSize.addEventListener('input', () => {
        document.querySelectorAll('.gossip').forEach(gossip => {
            gossip.style.fontSize = `${rangeFontSize.value}px`
        })
    })
    ranges.appendChild(rangeFontSize)

    const rangeBackground = document.createElement('input')
    rangeBackground.type = 'range'
    rangeBackground.min = '20'
    rangeBackground.max = '75'
    rangeBackground.id = 'background'
    rangeBackground.addEventListener('input', () => {
        document.body.style.background = `hsl(0, 0%, ${rangeBackground.value}%)`
    })
    ranges.appendChild(rangeBackground)

    const form = document.createElement('form')
    form.classList.add('gossip')
    const textarea = document.createElement('textarea')
    textarea.placeholder = 'Got a gossip to share ?'
    form.appendChild(textarea)

    const button = document.createElement('button')
    button.type = 'submit'
    button.textContent = 'Share gossip!'
    document.body.appendChild(form)
    form.appendChild(button)

    gossips.forEach(gossip => {
        const gossipContainer = document.createElement("div")
        gossipContainer.classList.add("gossip")
        gossipContainer.textContent = gossip
        document.body.appendChild(gossipContainer)
    })
}