import React from 'react';
import s from "./Header.module.css";

function Header(){
   return(
      <header className={s.header}>
         <img height="60px" width="60px" src="../../logos.png" alt="logo"></img>
      </header>
   )
}
export default Header;