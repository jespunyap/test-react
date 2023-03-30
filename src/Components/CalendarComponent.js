function CalendarComponent(props){
    function* calendar(){ for(let i=1;i<=31;i++){ yield i;}}
    function handlerClickEficient(e){
        e.stopPropagation(); // pq es pari la propagació i no pugi cap als elements pares
        //console.log(e.nativeEvent.composedPath());
        const node=e.nativeEvent.composedPath().find(n=>n.dataset && 'day' in n.dataset); // busquem que el dataset tingui definit day seria data-day
        if(node){
            const {day} = node.dataset; // ens quedem amb el valor de la propietat day del dataset data-set=X que seria X
            console.log(day);
        }
        /*if(e.target.className==='day'){
            console.log(e);
        } */       
    }
    /*
    En un map no és bo posar un event (carrega molt memòria)
    Això no estaria bé cal usar event delegation
    function handlerClick(e){
        console.log(e)
    }
    return(
        <>
            <div className='month'>
                {[...calendar()].map(v=><div onClick={handlerClick} key={v} className="day">{v}</div>)}
            </div>
        </>
    )

    */
    return(
        <>
            <div className='month' onClick={handlerClickEficient}>
                {
                //Això no seria eficient
                //[...calendar()].map(v=><div onClick={handlerClick} key={v} className="day">{v}</div>)
                // en canvi això si
                [...calendar()].map(v=><div data-day={v} key={v} className="day">{v}</div>)
                }
            </div>
        </>
    )
}

export default CalendarComponent;