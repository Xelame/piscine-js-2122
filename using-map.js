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
