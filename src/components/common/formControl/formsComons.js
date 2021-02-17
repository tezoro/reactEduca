import React from "react"
import { Field } from "redux-form"
import styles from "./formControl.module.css"


const FormControl = ({ input, meta: { touched, error }, children }) => {
   const hasError = touched && error
   return (
      <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
         {children}
         <div>
            {hasError && <span>{error}</span>}
         </div>
      </div>
   )
}

export const Textarea = (props) => {
   const { input, meta, child, ...restProps } = props
   return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>

}

export const Input = (props) => {
   const { input, meta, child, ...restProps } = props
   return <FormControl {...props}><input {...input} {...restProps} /></FormControl>

}
export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
   <div>
      <Field component={component}
         validate={validators}
         name={name}
         placeholder={placeholder}
         {...props} />
      {text}
   </div>
) 