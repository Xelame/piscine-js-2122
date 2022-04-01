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
            state: city.state,
            region: city.region,
            temperature: city.temperature.replace(/\s/g, '')
        }})
}

function tempForecasts(cities) {
    cities = trimTemp(cities)
    return cities.map(city => `${Math.floor((parseInt(city.temperature.slice(0, city.temperature.length - 1)) - 32) * 5 / 9)}elsius in ${city.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}, ${city.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')}`)
}