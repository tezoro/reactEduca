import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { maxLenght, required } from '../../utilities/validators/validators'
import { createField, Input } from '../common/formControl/formsComons'
import stylles from "../common/formControl/formControl.module.css"


const LoginForm = ({ handleSubmit, error }) => {
   const maxLenght15 = maxLenght(15)
   debugger

   return (
      <form onSubmit={handleSubmit}>
         <div>
            {createField("email", "email", [required], Input)}
            {/* <Field component={Input} validate={[required]} name={"email"} placeholder={"email"} /> */}
         </div>
         <div>
            {createField("password", "password", [required, maxLenght15], Input, { type: "password" })}
            {/* <Field component={Input} validate={[required, maxLenght15]} name={"password"} placeholder={"password"} type={"password"} /> */}
         </div>
         <div>
            {createField(null, "rememberMe", null, Input, { type: "checkbox" }, "remember me")}
            {/* <Field component={Input} name={"remember me"} type={"checkbox"} />remember me */}
         </div>
         {error && <div className={stylles.formSummaryError}>
            {error}
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

const Login = ({ login, isAuth }) => {
   const onSubmit = (formData) => {
      login(formData.email, formData.password, formData.rememberMe)
   }
   if (isAuth) {
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