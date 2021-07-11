import { Suspense } from "react"

const wihSuspense = (Component) => {
   return <Suspense ><Component {...props} /></Suspense>
}