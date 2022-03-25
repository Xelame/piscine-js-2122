function dogYears(planetname, ageinsecond) {
  var ageinyears = ageinsecond / (365.25 * 24 * 60 * 60) * 7;
  var earthAge = Math.round(ageinyears*100)/100;
  switch (planetname) {
    case "earth":
      return earthAge;
    case "mercury":
      return Math.round(earthAge / 0.2408467 * 100) / 100;
    case "venus":
      return Math.round(earthAge / 0.61519726 * 100) / 100;
    case "mars":
      return Math.round(earthAge / 1.8808158 * 100) / 100;
    case "jupiter":
      return Math.round(earthAge / 11.862615 * 100) / 100;
    case "saturn":
      return Math.round(earthAge / 29.447498 * 100) / 100;
    case "uranus":
      return Math.round(earthAge / 84.016846 * 100) / 100;
    case "neptune":
      return Math.round(earthAge / 164.79132 * 100) / 100;
    default:
      return "Invalid planet name";
  }
}