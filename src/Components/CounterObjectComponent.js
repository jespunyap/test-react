import {useState} from 'react';
import SectionComponent from './SectionComponent';

function CounterObjectComponent({count}){
    //const [counter,setCounter] = useState({count:0}) // inicialitzat a 0
    const [counter,setCounter] = useState({count:count}) // inicialitzat al valor que ens arriba per paràmetre
    
    function handlerClick(){
        counter.count++
        setCounter({...counter}); // clonem l'objecte (spread operator)
    }
    function handlerClear(){
        counter.count=count; // agafa la propietat count que li arriba per inicialitzar
        setCounter({...counter})
    }
    return(
        
        <>
            <SectionComponent>useState - object</SectionComponent>
            <button onClick={handlerClick}>Incrementar</button>
            <button onClick={handlerClear}>Clear</button>
            <div>{counter.count}</div>
        </>
    )
}

export default CounterObjectComponent;