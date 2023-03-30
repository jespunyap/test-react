import { useEffect, useState } from "react";

// hoc que encapsularia les crides a una API
export function useFetch(promise,...args){ // args serien els paràmetres 
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const [data,setData]=useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            promise.apply(null,args).then(async data=>{ // fem apply per passar els paràmetres args (apply és del objecte Function) 
                setData(await data.json()) // Ho fem assincron pq no sabem què pot tardar. No tenim el body fins que no es tanqui la connexió http. En realitat és una promise
            })
            .catch(error=>{
                setError(error)
            })
            .finally(()=>{
                setLoading(false)
            })
        },2000)
    },[promise,args])

    // Aquest seria el correcte. L'anterior és per simular un timeout
    /*useEffect(()=>{
        promise.apply(null,args).then(async data=>{ // fem apply per passar els paràmetres que 
            setData(await data.json())
        })
        .catch(error=>{
            setError(error)
        })
        .finally(()=>{
            setLoading(false)
        })
    },[]) // quan canvien arguments fa nova petició?*/

    
    return [loading,error,data]
}