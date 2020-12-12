import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Navbar.module.css";

function Navbar(){
   return(
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
      <div className={s.friends}>
         <div className="s.item0">Friends</div>
         <div className={s.item1}>aleksey</div>
         <div className={s.item2}>orestovych</div>
         <div className={s.item3}>nikynos</div>
      </div>
   </nav>
   )
}

export default Navbar;