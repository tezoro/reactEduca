import React from 'react';
import DialogItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';


class Dialogs extends React.Component {
   constructor(props) {
      super(props)
   }

   addMessage = () => {
      this.props.addMessage()
   }

   onMessagChange = (e) => {
      let text = e.target.value
      this.props.updateNewMessageText(text)
   }
   render() {
      return (
         <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {this.props.dialogPage.dialogs.map(d => <DialogItem img={d.img} name={d.name} key={d.id} id={d.id} />)}
            </div>
            <div className={s.massage}>
               <div>
                  {this.props.dialogPage.messages.map(m => <Message key={m.id} message={m.message} />)}
               </div>
               <div>
                  <textarea placeholder="enter your text" onChange={this.onMessagChange} value={this.props.newMessageText} />
                  <button onClick={this.addMessage} >Send</button>
               </div>
            </div>
         </div>
      )
   }
}

export default Dialogs;