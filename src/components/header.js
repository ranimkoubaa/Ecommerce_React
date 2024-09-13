import { useContext } from "react";
import './header.css';
import { Link } from "react-router-dom";
import BookStoreContext from "./context/bookStorContext";

function Header(){
    const photo='Bookshop.gif'
    const  cartInfoLength  = useContext(BookStoreContext);
    return (
    <>
    <section style={{marginTop:'30px', position: 'relative'}} >
    <p style={{ float: 'left',fontSize: '56px',fontWeight: '700',marginTop:'80px', marginLeft:'60px'}}>Discover Your Next <br></br> Favorite Book Here.
      </p><h3 style={{ position: 'absolute', float: 'left', marginLeft:'25px',marginTop:'250px',textAlign: "center",
color: "#001524",
fontSize: 24,
fontFamily: "Raleway",
paddingBottom: 28,
width: 584,}}>Explore our curated collection of new and popular <br></br> books to find your next literary adventure.</h3>

<img src={photo} alt='erreur'className='gif' width='40%'style={{ float: 'right', marginRight:'60px'}}></img>
</section>
<div className='search-box'>
      <input type='search' placeholder='Which book are you looking for ?' className='search-input' width='100%' height='100%'></input>
    <i className='bi bi-search'></i></div>
    {/*<Link to="/cart" className="header-middle-cart-wrapper">
        {cartInfoLength > 0 && (
          <b className="cart-notification">{cartInfoLength}</b>
        )}
        <i className="bi bi-cart2"></i>
        </Link>*/}
      </>
      );
} 
export default Header