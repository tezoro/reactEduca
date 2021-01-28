import React from 'react';
import s from './ProfileInfo.module.css';

class ProfileStatus extends React.Component {

   state = {
      editMode: false,
      status: this.props.status
   }
   componentDidUpdate(prevProps, prevState) {

      let a = this.props
      let b = this.state
      console.log("componentDidupdate")
      if (prevProps !== this.props) {
         this.setState({
            status: this.props.status
         })
      }
   }


   activateEditMode = () => {

      this.setState({

         editMode: true
      })


   }

   deactivateEditMode = () => {

      this.setState({

         editMode: false
      })

      this.props.updateUserStatus(this.state.status)
   }

   onStatusChange = (e) => {
      console.log(this.state.status)
      this.setState({
         status: e.currentTarget.value

      })
   }

   render() {
      console.log("render")
      return (
         <>
            <div>
               {!this.state.editMode ?
                  <div>

                     <span onDoubleClick={this.activateEditMode} >status:{this.props.status}</span>
                  </div>
                  :
                  <div>
                     <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} type="text" />
                  </div>
               }
            </div>

         </>
      )
   }
}

export default ProfileStatus;