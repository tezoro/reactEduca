import React from "react"
import Preloader from "../components/common/preloader"


export const withSuspence = (Component) => {
   return (props) => {
      return <React.Suspense fallback={<Preloader />}  /* <div>loading...</div> */ > <Component {...props} /> </React.Suspense>
   }
}


export const hocSomething = (Component) => {
   return (props) => {
      return <Component {...props} />
   }
}