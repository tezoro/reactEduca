import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import s from "./Header.module.css";

function Header(props) {
   const logOut = props.logout
   return (
      <header className={s.header}>
         <img height="60px" width="60px" src="../../logos.png" alt="logo"></img>
         <div className={s.loginBlock}>
            {props.isAuth ? <div>{props.login}<button onClick={logOut}  >logout</button></div> : <NavLink to='/login' >login</NavLink>}
         </div>
      </header >
   )
}

export default Header