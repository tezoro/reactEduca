import React from 'react';
import s from "./Navbar.module.css";

function Navbar(){
   return(
<nav className={s.nav}>
  <div className={`${s.item} ${s.active}`}><a href="/Profile">Profile</a></div>
  <div className={s.item}><a href="/Dialogs">Messages</a></div>
  <div className={s.item}><a href="">Blog</a></div>
  <div className={s.item}><a href="">Settings</a></div>
</nav>
   )
}

export default Navbar;