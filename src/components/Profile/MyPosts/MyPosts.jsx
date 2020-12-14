import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Posts/Post';

function MyPosts(props){ 
     debugger   
   let postsElement = props.posts
   .map(p =><Post message={p.message} likeCounts={p.likesCount} id={p.id} /> )

   let newPostElement=React.createRef()
   let addPost=()=>{
         let text = newPostElement.current.value
         props.addPost(text)
         newPostElement.current.value=''
         }

   return(
      <div className={s.postsBlock}>
         <h3> my posts</h3>
         <div>
            <textarea ref={newPostElement} ></textarea>
         </div>
         <div>
            <button onClick={addPost} >Add post</button>
         </div>
         <div className={s.posts}>
         <Post />
           {postsElement}
         </div>
      </div>
   )
}

export default MyPosts; 