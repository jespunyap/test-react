import { useSearchParams } from "react-router-dom"

// exemple query params
export default function Page3(){
    //const [searchParams,setSearchParams] = useSearchParams()
    const [searchParams] = useSearchParams()
    console.log(searchParams.get("name"));
    // utilitzem reduce per convertir a objecte
    //[...searchParams.entries()] // ho convertim a array pq és un iterator
    const data=[...searchParams.entries()].reduce((a,b)=>{ // 'a' és actual i 'b' anterior
        a[b[0]] = b[1]
        return a;
    },{})
    console.log(data);
    return(
        <div>Page 3</div>
    )
}