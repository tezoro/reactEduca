import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Navbar.module.css";

function Navbar() {
   return (
      <nav className={s.nav}>
         <div className={s.item}>
            <NavLink to="/Profile" activeClassName={s.activeLink}>Profile</NavLink>
         </div>
         <div className={s.item}>
            <NavLink to="/Dialogs" activeClassName={s.activeLink}>Messages</NavLink ></div>
         <div className={s.item}>
            <NavLink to="/News" activeClassName={s.activeLink}>News</NavLink >
         </div>
         <div className={s.item}>
            <NavLink to="/Music" activeClassName={s.activeLink}>Music</NavLink >
         </div>
         <div className={s.item}>
            <NavLink to="Settings" activeClassName={s.activeLink}>Settings</NavLink >
         </div>
         <div className={s.item}>
            <NavLink to="users" activeClassName={s.activeLink}>Users</NavLink >
         </div>
      </nav>
   )
}

export default Navbar;