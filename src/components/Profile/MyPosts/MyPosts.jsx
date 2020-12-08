import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Posts/Post';

function MyPosts(props){
   return(
      <div className={s.postsBlock}>
         <h3> my posts</h3>
         <div>
            <textarea></textarea>
         </div>
         <div>
            <button>Add post</button>
         </div>
         <div className={s.posts}>
         <Post />
         <Post message='hi,how are you'likeCounts='6'/>
         <Post message="it's my first post" likeCounts='10'/>
         <Post />
         </div>
      </div>
   )
}

export default MyPosts; 