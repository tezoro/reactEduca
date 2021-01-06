import { render } from '@testing-library/react'
import React from 'react'
import s from "./MyPosts.module.css"
import Post from './Posts/Post'

class MyPosts extends React.Component {
   componentDidMount() { }
   onAddPost = () => {

      this.props.addPost()
   }
   onPostChange = (e) => {
      let text = e.target.value
      this.props.onPostChange(text)
   }

   render() {
      return (
         <div className={s.postsBlock}>
            <h3> my posts</h3>
            <div>
               <textarea onChange={this.onPostChange} value={this.props.newPostText} />
            </div>
            <div>
               <button onClick={this.onAddPost} >Add post</button>
            </div>
            <div className={s.posts}>
               {this.props.posts.map(p => <Post message={p.message} likeCounts={p.likesCount} key={p.id} id={p.id} />)}
            </div>
         </div>
      )
   }
}

export default MyPosts; 