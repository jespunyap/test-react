import { useParams } from "react-router-dom"

export default function Page1(){
    const data = useParams(); // per recuperar els paràmetres
    const {id} = useParams(); // fem destructurin per recuperar directament id
    console.log(data);
    console.log(id);
    return(
        <div>Page 2</div>
    )
}