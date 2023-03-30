

function ArrayComponent(props){
    const data = [1,2,3];
    
    return(
        <>
            <p>Exemple array:</p>
            {data.map(v=><div className="red" key={v}>{v}</div>)}
            
    </>
    )
}

export default ArrayComponent;