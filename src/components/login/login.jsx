import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { authApi } from '../../api/api'
import { maxLenght, required } from '../../utilities/validators/validators'
import { Input } from '../common/formControl/formsComons'


const LoginForm = (props) => {
   const maxLenght15 = maxLenght(15)
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Input} validate={[required]} name={"login"} placeholder={"email"} />
         </div>
         <div>
            <Field component={Input} validate={[required, maxLenght15]} name={"password"} placeholder={"password"} />
         </div>
         <div>
            <Field component={Input} name={"remember me"} type={"checkbox"} name="" id="" />remember me
         </div>
         <div>
            <button>Submit</button>
         </div>
      </form>
   )
}

const LoginReduxForm = reduxForm({
   form: "login"
})(LoginForm)

const Login = (props) => {
   const onSubmit = (formData) => {
      console.log(formData)
   }
   return <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
   </div>
}

export default Login