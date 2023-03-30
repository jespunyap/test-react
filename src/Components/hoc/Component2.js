import { hoc } from "./hoc"

function Component2(){
    return(
        <div>
            Hello Component2
        </div>
    )
}
export default hoc(Component2,"Hola 2")