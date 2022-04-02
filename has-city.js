function hasCity (country, arrayOfCity) {
    return function(city) {
        if (arrayOfCity.some(City => City == city)) {
            return `${city} is a city from ${country}`
        }
        return `${city} is not a city from ${country}`
    }
}