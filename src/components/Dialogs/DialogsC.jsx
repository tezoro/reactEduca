import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

   let dialogsElement = props.dialogPage.dialogs
      .map(d => <DialogItem img={d.img} name={d.name} key={d.id} id={d.id} />)

   let messagesElements = props.dialogPage.messages
      .map(m => <Message key={m.id} message={m.message} />)

   let addMessage = () => {

      props.addMessage()
   }

   let onMessagChange = (e) => {

      let text = e.target.value
      props.updateNewMessageText(text)
   }

   return (
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsElement}

         </div>
         <div className={s.massage}>
            <div>{messagesElements}</div>
            <div>
               <textarea placeholder="enter your text" onChange={onMessagChange} value={props.newMessageText} />
               <button onClick={addMessage} >Send</button>
            </div>
         </div>
      </div>
   )
}
export default Dialogs;