import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';


function Profile(props) {
   console.log("profile")
   return (
      <div>
         <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus} />
         <MyPostsContainer />
      </div>
   )
}

export default Profile;