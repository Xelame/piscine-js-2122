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