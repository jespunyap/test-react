import { useReducer } from "react";
import SectionComponent from "./SectionComponent";

const ACTIONS={
    increment:0,
    decrement:1
}


function reducer(state, action) {
    const {type,value}=action;
  switch (type) {
    case ACTIONS.increment:
      return {count: state.count + value};
    case ACTIONS.decrement:
      return {count: state.count - value};
    default:
      throw new Error();
  }
}

function ReducerComponent({increment}){

    const initialState = {count: parseInt(increment)};

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <SectionComponent>useReducer</SectionComponent>
      Count: {state.count}
      <button onClick={() => dispatch({type: ACTIONS.decrement,value:5})}>-</button>
      <button onClick={() => dispatch({type: ACTIONS.increment,value:5})}>+</button>
    </>
  );

}
export default ReducerComponent;