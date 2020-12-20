import React from 'react'
import s from "./MyPosts.module.css"
import Post from './Posts/Post'
import {addPostActionCreator, updateNewPostTextActionCreator} from './../../../redux/state'

function MyPosts(props){ 
   let postsElement = props.posts
   .map(p =><Post message={p.message} likeCounts={p.likesCount} id={p.id} /> )

   let newPostElement=React.createRef()

   let addPost=()=>{
      props.dispatch(addPostActionCreator())
   }

   let onPostChange=()=>{
      let text = newPostElement.current.value
      props.dispatch(updateNewPostTextActionCreator(text))
   }

   return(
      <div className={s.postsBlock}>
         <h3> my posts</h3>
         <div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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