import 'bootstrap-icons/font/bootstrap-icons.css';
import './SideBar.css'
import { Link } from "react-router-dom";
function SideBarAdmin () {
    return ( 
       
        
    <div className="bg-white sidebar">
    <div className='m-2'>
        <i className="bi bi-bootstrap-fill me-3 fs-4"></i>
        <span className="brand-name fs-4">Ranim</span>
    </div>
    <hr className="text-dark"/>
    <div className="list-group list-group-flush">
        <a className="list-group-item py-2 ">
            <i className="bi bi-speedometer2 fs-5 me-3"></i>
            <span >Dashboard</span>
        </a>
        <a className="list-group-item py-2 ">
            <i className="bi bi-house fs-4 me-3"></i>
            <span >Home</span>
        </a>
        <Link className="list-group-item py-2" to='/AddArticle'>
            <i className="bi bi-table fs-4 me-3"></i>
            <span > Add Products</span>
        </Link><a className="list-group-item py-2">
            <i className="bi bi-clipboard-data fs-4 me-3"></i>
            <span >Report</span>
        </a><a className="list-group-item py-2">
            <i className="bi bi-people fs-4 me-3"></i>
            <span >Customers</span>
        </a>
        <a className="list-group-item py-2">
            <i className="bi bi-power fs-5 me-3"></i>
            <span >Logout</span>
        </a>
    </div>
    
    </div>
    
    
     );
}

export default SideBarAdmin ;