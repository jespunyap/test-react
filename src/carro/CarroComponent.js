import { useEffect, useState } from "react"

function CarroComponent(){
    const [products,setProducts]=useState(0)
    
    
    useEffect(()=>{
        const listProducts=[]
        function handlerAddCart(ev){
            ev.stopPropagation();
            console.log(ev.detail)
            listProducts.push(ev.detail)
            setProducts(listProducts.length)
        }
        window.addEventListener('addcart',handlerAddCart)
        return ()=>window.removeEventListener('addcart',handlerAddCart) // alliberar recursos

    },[]) // si posem [] només es llança una vegada
    return(
        <div>{products}</div>
    )

}
export default CarroComponent