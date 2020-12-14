import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs=(props)=>{

   let dialogsElement=props.state.dialogs
      .map(d=> <DialogItem img={d.img} name={d.name} id={d.id} />)

   let messagesElements =props.state.messages
      .map(m =>  <Message message={m.message} />)

   let sendMessage=React.createRef()
   
   let addMessage=()=>{
      var text=sendMessage.current.value
      props.sendMessage(text)
   }

   return(
      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
           {dialogsElement}
         </div>
         <div className={s.massage}>
            {messagesElements}
            <div>
               <textarea ref={sendMessage} name="" id="" cols="30" rows="10"></textarea>
            </div>
            <button onClick={addMessage} >Send</button>
         </div>
      </div>
   )
}
   export default Dialogs;