function dogYears(planetname, ageinsecond) {
  var ageinyears = ageinsecond / (365.25 * 24 * 60 * 60) * 7;
  var earthAge = Math.round(ageinyears*100)/100;
  switch (planetname) {
    case "earth":
      return earthAge;
    case "mercury":
      return earthAge / 0.2408467;
    case "venus":
      return earthAge / 0.61519726;
    case "mars":
      return earthAge / 1.8808158;
    case "jupiter":
      return earthAge / 11.862615;
    case "saturn":
      return earthAge / 29.447498;
    case "uranus":
      return earthAge / 84.016846;
    case "neptune":
      return earthAge / 164.79132;  
    default:
      return "Invalid planet name";
  }
}