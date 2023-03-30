import { useRef } from "react";
import Input from "./controls/Input";
import './formulari.css';
import sendData from "./service";

export default function FormulariWrapper(){
    // utilitzem useRef per recuperar els valors del formulari (element natiu del DOM)
    const name = useRef(null)
    const phone = useRef(null)
    // No hauriem de fer un formulari amb method POST ja que estem a una SPA.
    // El que cal fer és parar el formulari pq ho volem enviar via ajax
    function handlerSubmit(e){
        e.stopPropagation(); // pq no es llanci l'event cap amunt
        e.preventDefault(); // si no ho posem s'envia el formulari
        // ara caldria recollir els camps i enviar-los amb una API
        console.log(name.current.value); // name.current seria l'input name
        console.log(phone.current.value);

        const data={
            name:name.current.value,
            phone:phone.current.value
        }
        JSON.stringify(data)

        // això s'ha de moure a un js perquè estigui millor

        /*fetch('/api/v1/costumer',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(data)
        }) // fallarà pq no tenim API però podem veure a F12 network la crida
        */
        sendData('/api/v1/costumer',data).then((data)=>{
            console.log(data)
            // aquí caldria tractar els 200, 400,... 
            // si és un 400 no passarà pel catch pq retorna un objecte Response //Response {type: 'basic', url: 'http://localhost:3000/api/v1/costumer', redirected: false, status: 404, ok: false, …}
            // donarà error si tractem la lògica al sendData
        })
        .catch(error=>{
            console.log(error)
        })

    }
    return (
        <form className="form" onSubmit={handlerSubmit}> 
            <Input name="name" label="Enter name:" ref={name} />
            <Input name="phone" label="Enter phone:" ref={phone} />

            <button className="control" type="submit">Send</button>
        </form>
    )

}