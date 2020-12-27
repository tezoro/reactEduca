import React from 'react'
import s from "./MyPosts.module.css"
import Post from './Posts/Post'

function MyPosts(props) {
   let postsElement = props.posts
      .map(p => <Post message={p.message} likeCounts={p.likesCount} key={p.id} id={p.id} />)

   let onAddPost = () => {

      props.addPost()
   }

   let onPostChange = (e) => {
      let text = e.target.value
      props.onPostChange(text)
   }

   return (
      <div className={s.postsBlock}>
         <h3> my posts</h3>
         <div>
            <textarea onChange={onPostChange} value={props.newPostText} />
         </div>
         <div>
            <button onClick={onAddPost} >Add post</button>
         </div>
         <div className={s.posts}>
            <Post />
            {postsElement}
         </div>
      </div>
   )
}

export default MyPosts; 