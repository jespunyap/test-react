import Child from './Child';
import Child2 from './Child2';

function IfComponent(props){
    const data = {firstName:"Joan", lastName:"Espuña"}
    const islogin =false;
    function login(data){
        if(islogin){
            return( <>
                    <p>logat</p>
                    <Child firstName={data.firstName} lastName={data.lastName} >Fills</Child>
                    </>
            )
        }
        else{
            return( 
                <>
                    <p>No logat</p>
                    <Child2 firstName={data.firstName} lastName={data.lastName} >Fills</Child2>
                </>
            )
        }
    }
    return(
        <>
            <p>Exemple if lleig:</p>
            {islogin &&  <Child firstName={data.firstName} lastName={data.lastName} >Fills</Child>}
            {!islogin &&  <Child2 firstName={data.firstName} lastName={data.lastName} >Fills</Child2>}
            <p>Exemple if maco:</p>
            {login({firstName:"Joan", lastName:"Pineda"})}
            
    </>
    )
}

export default IfComponent;