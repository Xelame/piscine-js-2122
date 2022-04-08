export const pick = () => {
    let hue = 0
    let luminosity = 0
    let divhsl = document.createElement('div')
    let divhue = document.createElement('div')
    let divluminosity = document.createElement('div')
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    let svgNS = svg.namespaceURI
    let axisX = document.createElementNS(svgNS, 'line')
    let axisY = document.createElementNS(svgNS, 'line')
    document.body.addEventListener('mousemove', (e) => {
        axisX.setAttribute('x1', e.clientX)
        axisX.setAttribute('y1', 0)
        axisX.setAttribute('x2', e.clientX)
        axisX.setAttribute('y2', window.innerHeight)
        axisY.setAttribute('x1', 0)
        axisY.setAttribute('y1', e.clientY)
        axisY.setAttribute('x2', window.innerWidth)
        axisY.setAttribute('y2', e.clientY)
        hue = Math.round(e.clientX / window.innerWidth * 360)
        luminosity = Math.round(e.clientY / window.innerHeight * 100)
        document.body.style.backgroundColor = `hsl(${hue}, 50%, ${luminosity}%)`
        divhsl.textContent = `hsl(${hue}, 50%, ${luminosity}%)`
        divhue.textContent = `hue\n ${hue}`
        divluminosity.textContent = `${luminosity}\nluminosity`
    })
    document.body.addEventListener('click', (e) => {
        navigator.clipboard.writeText(`hsl(${hue}, 50%, ${luminosity}%)`)
    })
    divhsl.className = 'hsl text'
    divhue.className = 'hue text'
    divluminosity.className = 'luminosity text'
    document.body.appendChild(divhsl)
    document.body.appendChild(divhue)
    document.body.appendChild(divluminosity)
    document.body.appendChild(svg)
    axisX.id = 'axisX'
    axisY.id = 'axisY'
    svg.appendChild(axisX)
    svg.appendChild(axisY)
}