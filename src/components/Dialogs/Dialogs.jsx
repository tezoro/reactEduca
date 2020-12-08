import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem=(props)=>{
   let path = "/Dialogs/" + props.id;
   return(
      <div className={`${s.dialog} ${s.active}`}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}
const Message=(props)=>{
   return(
      <div className={s.massage}>{props.message}</div>
   )
}

const Dialogs=(props)=>{
   return(
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            <DialogItem name="igor" id="1" />
            <DialogItem name="nikita" id="2" />
            <DialogItem name="maksym" id="3" />
            <DialogItem name="ruslan" id="4" />
            <DialogItem name="olga" id="5" />
           
         </div>
               <div className={s.massage}>
                 <Message message="hi" />
                 <Message message="how you doing" />
                 <Message message="wher aare you comm from?" />
            </div>
      </div>
   )
}
   export default Dialogs;