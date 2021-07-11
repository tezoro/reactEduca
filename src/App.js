import { connect, Provider } from 'react-redux'
import React from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/login/login'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/navBar'
import News from './components/News/News'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/preloader'
import store from './redux/redux-store'
import { withSuspence } from './hoc/withSuspenc'

const Profile = React.lazy(() => import("./components/Profile/ProfileContainer"))
const Dialogs = React.lazy(() => import("./components/Dialogs/DialogsContainer"))

class App extends React.Component {

   catchUnhandleError = (promiseRejectionEvent) => {
      alert(promiseRejectionEvent)
   }

   componentDidMount() {
      this.props.initializeApp()
      window.addEventListener("unhandledrejection", this.catchUnhandleError)
   }

   componentWillUnmount() {
      window.removeEventListener("unhandledrejection", this.catchUnhandleError)
   }

   render() {
      if (!this.props.initialized) {
         return <Preloader />
      }

      return (
         <BrowserRouter basename={process.env.PUBLIC_URL}>
            <div className="app-wrapper">
               <HeaderContainer />
               <Navbar />
               <div className='app-wrapper-content'>
                  <Route path="/dialogs" render={() => {
                     return <React.Suspense fallback={<div>loading</div>}>
                        <Dialogs />
                     </React.Suspense>
                  }} />
                  <Switch>
                     <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
                     <Route path="/profile/:userId?" render={withSuspence(Profile)} />
                     <Route path="/news" render={() => <News />} />
                     <Route path="/music" render={() => <Music />} />
                     <Route path="/settings" render={() => <Settings />} />
                     <Route path="/users" render={() => <UsersContainer />} />
                     <Route path="/login" render={() => <LoginPage />} />
                     <Route path="*" render={() => <div>404</div>} />
                  </Switch>
               </div>
            </div>
         </BrowserRouter>
      )
   }
}

const mapStateToProps = (state) => ({
   initialized: state.app.initialized
})

let AppContainer = connect(mapStateToProps, { initializeApp })(App)

let SamuraiApp = (props) => {
   return < React.StrictMode >
      <Provider store={store}>
         <AppContainer />
      </Provider>
   </ React.StrictMode>
}
export default SamuraiApp
