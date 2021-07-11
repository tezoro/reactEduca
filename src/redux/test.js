import React from 'react'
import axios from "axios"
import { connect } from 'react-redux'

const getPages = (text, messageId) => (dispatch) => {
   dispatch(getPagesAc(messageId, text))
   axios.get(`https.get.get.pick?${text}/`, {
      withCredentials: true
   })
      .then(responce => dispatch(setPages(responce.data)))

}

//!!HOC

let hoc = (Component) => {

   let OtherComponent = () => {

      const mapStateToProps = (state) => ({
         isAuth: state.apiPage.isAuth
      }
      )

      Component = connect(mapStateToProps)(Component)
      return <Component {...props} />
   }
   return OtherComponent

}