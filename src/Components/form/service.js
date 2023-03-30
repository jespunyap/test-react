export default async function sendData(url,data){
    const response = await fetch(url,{
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(data)
    }) // fallarà pq no tenim API però podem veure a F12 network la crida
    console.log(response)
    // aquí podem fer el tractament d'errors segons l'estat de l'API
    // aquesta lògica caldria moure-la a un js
    if(response.status===404) throw new Error("L'api ha donat 404")
    return response;
}