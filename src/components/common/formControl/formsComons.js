import React from "react"
import styles from "./formControl.module.css"


const FormControl = ({ input, meta,child ,...props }) => {
   debugger
   const hasError=meta.touched&&meta.error 
   return (
      <div className={styles.formControl+" "+(hasError?styles.error:"")}>
        {props.children}
         <div>
          {hasError && <span>{meta.error}</span>}
          </div>
      </div>
   )
} 

export const Textarea = (props) => {
    const {input,meta,child,...restProps}=props
        return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
   
} 

export const Input = (props) => {
   const {input,meta,child,...restProps}=props
       return  <FormControl {...props}><input {...input} {...restProps} /></FormControl>
        
}  