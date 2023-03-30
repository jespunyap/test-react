import { hoc } from "./hoc"

function Component1(){
    return(
        <div>
            Hello Component1
        </div>
    )
}
export default hoc(Component1,"Hola")