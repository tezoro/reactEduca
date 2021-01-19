import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Header.module.css";

function Header(props) {
   return (
      <header className={s.header}>
         <img height="60px" width="60px" src="../../logos.png" alt="logo"></img>
         <div className={s.loginBlock}>
            {props.isAuth ? props.login : <NavLink to='/login/' >login</NavLink>}

         </div>
      </header>
   )
}
export default Header;