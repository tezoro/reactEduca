import React from 'react'
import s from './ProfileInfo.module.css';
import { createField, Input, Textarea } from "../../common/formControl/formsComons"
import { required } from "../../../utilities/validators/validators"
import { reduxForm } from "redux-form"
import stylles from '../../common/formControl/formControl.module.css'



const ProfileDataForm = ({ handleSubmit, profile, error }) => {
   return <form action="">
      <div><button onClick={handleSubmit}>save changes</button></div>
      {error && <div className={stylles.formSummaryError}>
         {error}
      </div>}
      <div><b>Looking fo a job:</b>{createField("Loocking for a job", "lookingForAJob", [], Input, { type: "checkbox" })}</div><br></br>
      <div>

         <div>
            <b>my skills:</b>{createField("Profesional skills? ", "lookingForAJobDescription", [required], Textarea)}
         </div>
      </div>
      <div>
         <b>Full Name</b>{createField("Full name", "fullName", [required], Input)}
      </div>
      <div>
         <b>About me:</b>{createField("About me", "aboutMe", [required], Textarea)}
      </div>
      <div>
         <b>Contacts</b>{Object.keys(profile.contacts).map(key => {
            return <div className={s.contact}><b>{key}</b>{createField(key, "contacts." + key, [], Input)}</div>
         })
         }
      </div>
   </form>
}
const ProfileDataFormReduxForm = reduxForm({ form: "profileDataForm" })(ProfileDataForm)

export default ProfileDataFormReduxForm