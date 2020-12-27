import React from 'react';
import { connect } from 'react-redux';
import { addMessageTextCreator, updateMessageTextCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
   return {
      dialogPage: state.dialogPage,
      newMessageText: state.dialogPage.newMessageText
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      addMessage: () => {
         dispatch(addMessageTextCreator())
      },
      updateNewMessageText: (text) => {
         dispatch(updateMessageTextCreator(text))
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;