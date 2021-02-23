import { connect, Provider } from 'react-redux'
import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/login/login'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/navBar'
import News from './components/News/News'
import ProfileContainer from './components/Profile/ProfileContainer'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import { getAuthUserData } from './redux/auth-reducer'
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/preloader'
import store from './redux/redux-store'

class App extends React.Component {
   componentDidMount() {
      this.props.initializeApp()
   }
   render() {
      if (!this.props.initialized) {
         return <Preloader />
      }

      return (
         <HashRouter basename={process.env.PUBLIC_URL}>
            <div className="app-wrapper">
               <HeaderContainer />
               <Navbar />
               <div className='app-wrapper-content'>
                  <Route path="/dialogs" render={() => <DialogsContainer store={this.props.store} />} />
                  <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
                  <Route path="/news" render={() => <News />} />
                  <Route path="/music" render={() => <Music />} />
                  <Route path="/settings" render={() => <Settings />} />
                  <Route path="/users" render={() => <UsersContainer />} />
                  <Route path="/login" render={() => <LoginPage />} />
               </div>
            </div>
         </HashRouter>
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
