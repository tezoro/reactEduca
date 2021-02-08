import React, { useEffect, useState } from 'react';
import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])
   let [editMode, setEditMode] = useState(false)
   let [status, setStatus] = useState(props.status)
   const activateEditMode = () => {
      setEditMode(true)
   }
   const deactivateEditMode = () => {
      setEditMode(false)
      props.updateUserStatus(status)
   }
   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value)
   }
   return (
      <>
         <div>
            {!editMode && <div>
               <span onDoubleClick={activateEditMode} >status:{props.status || "-------"}</span>
            </div>}
            {editMode && <div>
               <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status} type="text" />
            </div>}
         </div>

      </>
   )
}

export default ProfileStatusWithHooks;