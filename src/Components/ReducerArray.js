
export const ACTIONS={
    add:0,
    remove:1,
    update:2
}

function find(array,id){
    let index=0;
    const value=array.find((v,i) => {
        index =i
        return v.id===id
    })
    if(value)
    return [index,value]
}

function clone(array){
    return [...array]
}



export function reducerArray(state, action) {
    const {type,value}=action;
    const {id} = value || {}
    if(!id){
        throw new Error("No existeix")
    }
    const [index,item] = find(state,id) || []
  switch (type) {
    case ACTIONS.add:
        !item && state.push(value)
      return clone(state)
    case ACTIONS.remove:
        if(index>-1){
            state.splice(index,1);
        }
      return clone(state);
    case ACTIONS.update:        
        item && (state[index]=value)
      return clone(state);
    default:
      throw new Error();
  }
}
