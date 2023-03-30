import { useFetch } from "./useFetch"

const promise = (page)=> fetch('data.json') // si ho canviem per 'data1.json' podem veure el cas d'error. page seria el número de pàgina

function FetchComponent(props){
    const [loading,error,data]=useFetch(promise,props.page)
    if(loading){
        return (
            <div>...Loading...</div>
        )
    }
    if(error){
        return (
            <div>S'ha produit un error</div>
        )
    }
    console.log(data);
    return (
        <>
           { 
                data.map(item=>
                    <div key={item.id}>
                        <div>{item.id}</div>
                        <div>{item.name}</div>
                    </div>
                )
            }
        </>
        
    )
}
export default FetchComponent