import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs=(props)=>{

   let dialogsElement=props.dialogs
      .map(d=> <DialogItem name={d.name} id={d.id} />)

   let messagesElements =props.messages
      .map(m =>  <Message message={m.message} />)

   return(
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
           {dialogsElement}
         </div>
         <div className={s.massage}>
            {messagesElements}
         </div>
      </div>
   )
}
   export default Dialogs;