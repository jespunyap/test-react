import { useReducer } from "react";
import SectionComponent from "./SectionComponent";
import {reducerArray,ACTIONS} from "./ReducerArray";


function renderitem(array){
    return array.map(v=>{
        return(<div key={v.id}>
            <div>{v.id}</div>
            <div>{v.name}</div>
        </div>)
    })
}

function ReducerArrayComponent({increment}){

  const [state, dispatch] = useReducer(reducerArray, [{id:2,name:'Prova'}]); // utilitza el reducer de ReducerArray.js
  return (
    <>
    <SectionComponent>useReducer - array</SectionComponent>
      <button onClick={() => dispatch({type: ACTIONS.add,value:{id:1,name:'Joan'}})}>add</button>
      <button onClick={() => dispatch({type: ACTIONS.remove,value:{id:1,name:'Joan'}})}>remove</button>
      <button onClick={() => dispatch({type: ACTIONS.update,value:{id:1,name:'Joan Espuña'}})}>update</button>
      Array:
      {renderitem(state)}
    </>
  );

}
export default ReducerArrayComponent;