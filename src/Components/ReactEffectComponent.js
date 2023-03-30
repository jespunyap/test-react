import { useEffect, useState } from "react";
import SectionComponent from "./SectionComponent";


function ReactEffectComponent() {
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        //console.log("effect")
        let interval = setInterval(() => setDate(new Date()), 1000) // setDate modifica l'estat i força el renderitzat
        return () => clearInterval(interval); // per alliberar recursos. Sempre que en un effect ho fem
    }, [])

    //console.log('Render component')

    return (
        <>
            <SectionComponent>useEffect</SectionComponent>
            <div>Hello effect {date.toString()}</div>
        </>

    )

}
export default ReactEffectComponent;