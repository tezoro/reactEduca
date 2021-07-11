import { render } from '@testing-library/react'
import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { maxLenght, required } from '../../../utilities/validators/validators'
import { Textarea } from '../../common/formControl/formsComons'
import s from "./MyPosts.module.css"
import Post from './Posts/Post'

const MyPosts = React.memo(props => {
   let onAddPost = (values) => {

      props.addPost(values.addPost)
   }
   let postElement = [...props.posts]
      .reverse()
      .map(p => <Post message={p.message} likeCounts={p.likesCount} key={p.id} id={p.id} />)
   console.log(postElement)
   return (
      <div className={s.postsBlock}>
         <h3> my posts</h3>
         <div>
            <MyPostFormRedux onSubmit={onAddPost} />
         </div>
         <div className={s.posts}>
            {postElement}
         </div>
      </div>
   )
}
)

const maxLenght15 = maxLenght(15)
const MyPostForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Textarea} name={"addPost"} validate={[required]} placeholder={"enter texts"} />
         </div>
         <div>
            <button >Add post</button>
         </div>
      </form>
   )
}

const MyPostFormRedux = reduxForm({
   form: "addPostRedux"
})(MyPostForm)

export default MyPosts; 