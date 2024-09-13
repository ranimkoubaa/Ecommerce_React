import { Link, Router } from "react-router-dom";
import React, { useState , useEffect } from 'react';
import { useContext } from "react";
import BookStoreContext from "./context/bookStorContext";
import {auth} from "../fireConfig";
import { onAuthStateChanged} from "firebase/auth";


import './menu.css';


function Menu() {
  const  {cartInfoLength}  = useContext(BookStoreContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setIsLoggedIn(user ? true : false);
  });

  return () => unsubscribe();
}, []);

const logOut = () => {
  auth.signOut().then(() => {
    console.log('Sign Out');
  }).catch((error) => {
    console.log(error);
  });
}
    return ( 
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      {/*<Link className="navbar-brand">Site</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>*/}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to="/authors">Authors</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to="/About">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to="/Contact">Contact</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link"  to="/clients">Register</Link>
          </li>
       </ul>
       {!isLoggedIn
            ? (
              <Link className="btn btn-outline-dark" to="/loginclient">Log In</Link>
            ) : (
              <button className="btn btn-outline-dark" onClick={logOut}>Log Out</button>
            )
          }
        {/*<form className="d-flex" role="search" style={{marginRight:'50px'}}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
    </form>*/}
        <Link to="/cart" className="header-middle-cart-wrapper">
        {cartInfoLength > 0 && (
          <b className="cart-notification">{cartInfoLength}</b>
       )}
        <i className="bi bi-cart2"></i>
      </Link>
      </div>
    </div>
  </nav>
    );
}

export default Menu;
