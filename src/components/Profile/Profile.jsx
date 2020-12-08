import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from"./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(){
   return(
      <div>
         <ProfileInfo />
         <MyPosts />
      </div>
   )
}

export default Profile;