import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { maxLenght, required } from '../../utilities/validators/validators'
import { Input } from '../common/formControl/formsComons'
import stylles from "../common/formControl/formControl.module.css"


const LoginForm = (props) => {
   const maxLenght15 = maxLenght(15)

   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Input} validate={[required]} name={"email"} placeholder={"email"} />
         </div>
         <div>
            <Field component={Input} validate={[required, maxLenght15]} name={"password"} placeholder={"password"} type={"password"} />
         </div>
         <div>
            <Field component={Input} name={"remember me"} type={"checkbox"} name="" id="" />remember me
         </div>
         {props.error && <div className={stylles.formSummaryError}>
            {props.error}
         </div>}
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
      props.login(formData.email, formData.password, formData.rememberMe)
   }
   if (props.isAuth) {
      return <Redirect to={"/profile"} />
   }
   return <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
   </div>
}
const mapStateToProps = (state) => ({
   isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login)