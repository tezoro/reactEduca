import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLenght, required } from '../../utilities/validators/validators';
import { Textarea } from '../common/formControl/formsComons';
import DialogItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


const Dialogs = (props) => {

   let dialogsItem = props.dialogPage.dialogs.map(d => <DialogItem img={d.img} name={d.name} key={d.id} id={d.id} />)
   let messageElement = props.dialogPage.messages.map(m => <Message key={m.id} message={m.message} />)

   let addNewMessage = (values) => {
      props.addMessage(values.newMessageBody)
   }

   return (

      <div className={s.dialogs}>
         <div className={s.dialogsItems}>
            {dialogsItem}
         </div>
         <div className={s.massage}>
            <div>
               {messageElement}
            </div>
            <div>
               <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
         </div>
      </div>
   )
}
const maxLenght15 = maxLenght(15)
const DialogsLoginForm = (props) => {

   return (
      <form onSubmit={props.handleSubmit} >
         <Field component={Textarea} placeholder="enter your text" name={"newMessageBody"} validate={[required, maxLenght15]} />
         <button>Send</button>
      </form>
   )
}
const AddMessageFormRedux = reduxForm({
   form: "addMessageForm"
}
)(DialogsLoginForm)

export default Dialogs;