import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addMessage } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
   return {
      dialogPage: state.dialogPage,
   }
}
/* let mapDispatchToProps = (dispatch) => {
   return {
      addMessage: (newMessageBody) => {
         dispatch(addMessageTextCreator(newMessageBody))
      }
   }
}
 */
export default compose(
   connect(mapStateToProps, { addMessage }),
   withAuthRedirect
)(Dialogs)