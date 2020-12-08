import React from 'react';
import s from './ProfileInfo.module.css';
function ProfileInfo(){
   return(
      <div>
         <div>
            <img className={s.profile__img} src="https://www.ronenbekerman.com/wp-content/uploads/2010/05/Grand-prize-winner-bertrand-benoit-exterior-1200px.jpg" alt="img" />
            <img className={s.ava_img} src="https://i.pinimg.com/originals/04/a8/73/04a87347b071ec062a586e02c23f6221.png" alt="non" />
         </div>
         <div className={s.discriptionBlock}>
            ava+description
         </div>
      </div>
   )
}

export default ProfileInfo;