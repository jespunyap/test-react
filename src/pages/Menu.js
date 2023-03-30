import { Link } from "react-router-dom";

// page2 rep un paràmetre
// page3 query params
export default function Menu(){
    return(
        <ul>
            <li><Link to="/page1">Page 1</Link></li>
            <li><Link to="/page2/1/invoices/3">Page 2</Link></li>
            <li><Link to="/page3?name=Joan&page=1&size=20">Page 3</Link></li>
            <li><Link to="/other">Other</Link></li>
            <li><Link to="/webcomponent">Web components</Link></li>
        </ul>
    )
}