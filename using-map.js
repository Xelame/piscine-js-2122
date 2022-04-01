const city = [
    {
        city: 'Los Angeles',
        temperature: '  101 °F   ',
    },
    {
        city: 'San Francisco',
        temperature: ' 84 ° F   ',
    },
]

function citiesOnly(cities) {
    return cities.map(city => city.city)
}

function upperCasingStates(list) {
    return list.map(city => city.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '))
}

function fahrenheitToCelsius(temperature) {
    return temperature.map(temp => (`${Math.floor((parseInt(temp.slice(0, temp.length - 1)) - 32) * 5 / 9)}°C`))
}

function trimTemp (cities) {
    return cities.map(function(city) {
        return {
            city: city.city,
            temperature: city.temperature.trim()
        }})
}