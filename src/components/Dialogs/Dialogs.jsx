import React from 'react';
import { addMessageTextCreator, updateMessageTextCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs=(props)=>{
   
   let dialogsElement=props.dialogPage.dialogs
      .map(d=> <DialogItem img={d.img} name={d.name} id={d.id} />)

   let messagesElements =props.dialogPage.messages
      .map(m =>  <Message message={m.message} />)
   
   let addMessage=()=>{
      props.dispatch(addMessageTextCreator())
   }
   let onMessagChange=(e)=>{
      let text=e.target.value
      props.dispatch(updateMessageTextCreator(text))
   }

   return(
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
           {dialogsElement}
         </div>
         <div className={s.massage}>
            <div>{messagesElements}</div>
            <div>
               <textarea onChange={onMessagChange} value={props.dialogPage.newMessageText} />
               <button onClick={addMessage} >Send</button>
            </div>
         </div>
      </div>
   )
}
   export default Dialogs;