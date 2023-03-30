export function hoc(Component,saludo){
    return (props) => {
        return <div>
            <Component/>
            {saludo}
        </div>
    }
}
