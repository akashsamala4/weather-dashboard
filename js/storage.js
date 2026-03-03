export function saveLastCity(city) {
  localStorage.setItem("lastCity", city);
}

export function getLastCity() {
  return localStorage.getItem("lastCity");
}
