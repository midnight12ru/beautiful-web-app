export default async ()=>{
    return await fetch(`http://api.db-ip.com/v2/free/self`).then(r=>r.json()).then(r=>r.ipAddress)
}