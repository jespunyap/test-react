import {useState} from 'react';
import SectionComponent from './SectionComponent';

function CounterComponent(){
    const [counter,setCounter]=useState(0);
    
    function handlerClick(){
        setCounter(counter+1);
        console.log(counter);
    }
    return(
        <>
            <SectionComponent>useState</SectionComponent>
            <button onClick={handlerClick}>{counter}</button>
        </>
    )
}

export default CounterComponent;