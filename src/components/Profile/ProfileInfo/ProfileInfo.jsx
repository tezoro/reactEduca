import React from 'react';
import Preloader from '../../common/preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus.jsx';

function ProfileInfo(props) {
   if (!props.profile) {
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
               <img className={s.profile__img} src={props.profile.photos.large} alt="img" /><br />
               <span>Lucking for a job: {props.profile.lookingForAJobDescription}</span><br></br>

               <span>Name: {props.profile.fullName}</span><br />
               <ProfileStatus status={props.status} updateUserStatus={props.updateUserStatus} />
            </div>
         </div>
      )
   }
}

export default ProfileInfo;