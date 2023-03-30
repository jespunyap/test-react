import './input.css'
import { forwardRef } from 'react'
function Input({label,name,...props},ref){ // cal utilitzar forwardRef sinó no podem passar referència i llavors el component queda Input(props,ref)
    return(
        <div className="control">
                <label htmlFor={name}>{label}</label>
                <input ref={ref} id={name} name={name}></input>
            </div>
    )
}
export default forwardRef(Input)