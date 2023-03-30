import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import './layout.css'

export default function Layout(){
    return(
        <div className="layout">
            <Menu/>
            <Outlet/>
        </div>
    )
}