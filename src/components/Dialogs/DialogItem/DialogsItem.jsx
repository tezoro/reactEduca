import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './../Dialogs.module.css'

const DialogItem=(props)=>{
   let path = "/Dialogs/" + props.id;
   return(
      <div className={s.dialog}>
         <img src={props.img} alt="ava" />
         <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
      </div>
   )
}

   export default DialogItem