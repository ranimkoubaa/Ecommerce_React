import SlideBar from '../SideBar';
import Home from '../Home';
import Nav from '../Nav';
import { useState } from 'react';
function Dashbord() {
    const [toggle, setToggle] = useState(true);
    const Toggle = ()=>{
        setToggle(!toggle)
    }
    return (  <div className=' container-fluid bg-secondary min-vh-100'>
    <div className='row '>
     {toggle && <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
        <SlideBar/>
        </div>}
        {toggle && <div className='col-4 col-md-2 '></div>}
    <div className='col '>
            <Home Toggle={Toggle}/>
</div>
    </div>
    </div> );
}

export default Dashbord;