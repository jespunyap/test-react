import { useRef } from "react";
import './formulari.css';

export default function Formulari(){
    // utilitzem useRef per recuperar els valors del formulari (element natiu del DOM)
    const name = useRef(null)
    const phone = useRef(null)
    // No hauriem de fer un formulari amb method POST ja que estem a una SPA.
    // El que cal fer és parar el formulari pq ho volem enviar via ajax
    function handlerSubmit(e){
        e.stopPropagation(); // pq no es llanci l'event cap amunt
        e.preventDefault(); // si no ho posem s'envia s'envia
        // ara caldria recollir els camps i enviar-los amb una API
        console.log(name.current.value); // name.current seria l'input name
        console.log(phone.current.value);

        const data={
            name:name.current.value,
            phone:phone.current.value
        }
        JSON.stringify(data)

        fetch('/api/v1/costumer',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
        }) // fallarà pq no tenim API però podem veure a F12 network la crida

    }
    return (
        <form className="form" onSubmit={handlerSubmit}> 
            <div className="control">
                <label htmlFor="name">Enter name:</label>
                <input ref={name} id="name" name="name"></input>
            </div>
            <div className="control">
                <label htmlFor="phone">Enter phone:</label>
                <input ref={phone} id="phone" name="phone"></input>
            </div>
            <button className="control" type="submit">Send</button>
        </form>
    )

}