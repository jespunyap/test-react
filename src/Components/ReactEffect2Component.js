import { useTimer } from "./useTimer";


function ReactEffect2Component() {
    const date = useTimer(1000)

    return (
        <>
            <div>Hello effect {date.toString()}</div>
        </>

    )

}
export default ReactEffect2Component;