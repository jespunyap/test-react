import {useState} from 'react';
import SectionComponent from './SectionComponent';

function ArrayStateComponent(){
    const [array,setArray]=useState([]);
    
    function handlerClick(){
        array.push(array.length+1);
        setArray([...array]); // cal clonar l'array pq react s'enteri amb spread operator pq sinó apunta a la mateixa posició de memòria i react no s'entera que ha canviat
    }
    function handlerClear(){
        setArray([])
    }
    return(
        
        <>
            <SectionComponent>useState - array</SectionComponent>
            <button onClick={handlerClick}>Incrementar</button>
            <button onClick={handlerClear}>Clear</button>
            {array.map(v=><div key={v}>{v}</div>)}
        </>
    )
}

export default ArrayStateComponent;