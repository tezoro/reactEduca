import React from 'react';
import { addMessageTextCreator, updateMessageTextCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
   let state = props.store.getState()

   let addMessage = () => {
      props.store.dispatch(addMessageTextCreator())
   }
   let onMessagChange = (text) => {
      props.store.dispatch(updateMessageTextCreator(text))
   }

   return (<Dialogs addMessage={addMessage} updateNewMessageText={onMessagChange} dialogPage={state.dialogPage}
      newMessageText={state.dialogPage.newMessageText} />)
}
export default DialogsContainer;