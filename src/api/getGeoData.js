import getIP from "./getIP";

export default async () => {
    let ip = await getIP();
    return await fetch(`http://free.ipwhois.io/json/${ip}?lang=ru`).then(r => r.json()).then(r => r)
}