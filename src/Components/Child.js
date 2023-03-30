function Child(props){
    return(
        <>
            <div>
                {props.firstName}
            </div>
            <div>
                {props.lastName}
            </div>
            {props.children}
        </>
    )
}

export default Child;