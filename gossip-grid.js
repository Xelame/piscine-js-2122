import { gossips } from "./gossip-grid.data.js";


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
            gossip.style.width = rangeWidth.value + 'px'
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
            gossip.style.fontSize = `${document.getElementById('font-size').value}px`
        })
    })
    ranges.appendChild(rangeFontSize)

    const rangeBackground = document.createElement('input')
    rangeBackground.type = 'range'
    rangeBackground.min = '20'
    rangeBackground.max = '75'
    rangeBackground.id = 'background'
    rangeBackground.addEventListener('input', () => {
        document.body.style.background = `hsl(0, 0%, ${document.getElementById('background').value}%)`
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