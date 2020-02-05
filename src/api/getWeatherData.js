export default async (lat, lon) => {
    return await fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`).then(r=>r.json()).then(r=>r)
}