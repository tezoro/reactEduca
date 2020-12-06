import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Posts/Post';

function MyPosts(){
   return(
      <div className={s.posts}>
         my posts
      <Post />
         <Post message='hi,how are you'likeCounts='6'/>
         <Post message="it's my first post" likeCounts='10'/>
         <Post />
      </div>
   )
}

export default MyPosts; 