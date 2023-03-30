import { createEvent } from "./addeventproduct";
const data = [1,2,3]
function ProductListComponent(){
    function handlerClick(e){
        e.stopPropagation();
        const event=createEvent("addcart",{id:1})
        e.nativeEvent.target.dispatchEvent(event);
    }
    return (
        data.map(v=><button key={v} onClick={handlerClick}>{v}</button>) // amb el onclick així no seria eficient. Cal aplicar event delegation
    )
}
export default ProductListComponent;