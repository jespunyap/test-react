import Child from './Child';
import Child2 from './Child2';

function Father(props){
    const data = {firstName:"Joan", lastName:"Espuña"}
    return(
        <>
            <p>Pas de paràmetres:</p>
            <Child {...data} />
            <Child2 {...data} />
            <p>Pas de paràmetres - altre opció però millor l'anterior:</p>
            <Child firstName={data.firstName} lastName={data.lastName} >Fills</Child>
    </>
    )
}

export default Father;