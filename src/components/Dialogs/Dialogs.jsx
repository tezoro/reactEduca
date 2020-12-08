import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs=(props)=>{
   return(
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <div className={`${s.dialog} ${s.active}`}>
               <NavLink to="/dialog/1">igor</NavLink>
               </div>
            <div className={s.dialog}>
               <NavLink to="/dialog/2">nikita</NavLink>
               </div>
            <div className={s.dialog}>
               <NavLink to="/dialog/3">maksym</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to="/dialog/4">ruslan</NavLink>
            </div>
            <div className={s.dialog}>
               <NavLink to="/dialog/5">olga</NavLink>
            </div>
         </div>
               <div className={s.messages}>
                  <div className={s.message}>hi</div>
                  <div className={s.message}>how are you</div>
                  <div className={s.message}>what you doing</div>
            </div>
      </div>
   )
}
   export default Dialogs;