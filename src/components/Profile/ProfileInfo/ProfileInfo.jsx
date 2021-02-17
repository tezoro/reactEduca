import React from 'react';
import Preloader from '../../common/preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus.jsx';
import ProfileStatusWithHooks from './ProfileStatusWithHocks';

function ProfileInfo({ profile, status, updateUserStatus }) {
   if (!profile) {
      return <>
         <Preloader />
      </>
   } else {
      return (
         <div>
            <div>
               <img className={s.ava_img} src="https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png" alt="non" />
            </div>
            <div className={s.discriptionBlock}>
               <img className={s.profile__img} src={profile.photos.large} alt="img" /><br />
               <span>Lucking for a job: {profile.lookingForAJobDescription}</span><br></br>

               <span>Name: {profile.fullName}</span><br />
               <ProfileStatusWithHooks status={status} updateUserStatus={updateUserStatus} />
            </div>
         </div>
      )
   }
}

export default ProfileInfo;