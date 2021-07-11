import React, { useState } from 'react';
import Preloader from '../../common/preloader';
import userImage from '../../../assets/images/userImage.png'
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus.jsx';
import ProfileStatusWithHooks from './ProfileStatusWithHocks';
import ProfileDataForm from './ProfileDataForm';
import { Redirect } from 'react-router-dom';


function ProfileInfo({ profile, status, updateUserStatus, isOwner, savePhoto, saveProfile }) {

   const onSubmit = (formData) => {
      saveProfile(formData).then(() => {
         setEditMode(false)
      })

   }
   const [editMode, setEditMode] = useState(false)

   const onMainPhotoSaved = (e) => {
      if (e.target.files) {
         savePhoto(e.target.files[0])
      }
   }
   if (!profile) {
      return <>
         <Preloader />
      </>
   } else {
      return (
         <div>
            <div className={s.discriptionBlock}>
               <img className={s.profile__img} src={profile.photos.large || userImage} alt="img" /><br />
               {!isOwner && <input type={"file"} onChange={onMainPhotoSaved} />}<br />
               {editMode ? <ProfileDataForm onSubmit={onSubmit} profile={profile} initialValues={profile} />
                  : <ProfileData setEditMode={() => { setEditMode(true) }} isOwner={isOwner} profile={profile} />}
               <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
            </div>
         </div>
      )
   }

}



const ProfileData = ({ profile, isOwner, setEditMode }) => {
   return <div>
      {!isOwner && <div><button onClick={setEditMode}>change</button></div>}
      <span>Lucking for a job: {profile.lookingForAJobDescription}</span><br></br>
      <div>
         {profile.lookingForAJob &&
            <div>
               <b>my skills:</b> {profile.lookingForAJobDescription}
            </div>}
      </div>
      <div>
         <b>Full Name</b>{profile.fullName}
      </div>
      <div>
         <b>About me:</b>{profile.aboutMe}
      </div>
      <div>
         <b>Contacts</b>{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
         })
         }
      </div>
   </div >
}


const Contact = ({ contactTitle, contactValue }) => {
   return <div><b>{contactTitle}</b>:{contactValue}</div>
}



export default ProfileInfo;