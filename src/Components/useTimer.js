import { useEffect, useState } from "react";

// exemple de custom hook
export function useTimer(delay){
    const [date, setDate] = useState(new Date())
    useEffect(() => {
        let interval = setInterval(() => setDate(new Date()), delay) // setDate modifica l'estat i força el renderitzat
        return () => clearInterval(interval); // per alliberar recursos. Sempre que en un effect ho fem
    }, [delay])
    return date;
}