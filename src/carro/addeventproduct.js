export function createEvent(name,detail){
    return new CustomEvent(name,{
        detail,
        bubbles:true,
        composed:true
        
    })
}
