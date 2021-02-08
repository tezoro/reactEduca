import { connect } from 'react-redux'
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/login/login'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/navBar'
import News from './components/News/News'
import ProfileContainer from './components/Profile/ProfileContainer'
import Settings from './components/Settings/Settings'
import  UsersContainer  from './components/Users/UsersContainer'
import { getAuthUserData } from './redux/auth-reducer'
import { initializeApp } from './redux/app-reducer'
import Preloader from './components/common/preloader'

//!tymcasovo vydalyty obovjaskovo
var data = [
   {
      "name": "Baked Salmon",
      "ingredients": [
         { "name": "Salmon", "amount": 1, "measurement": "l lb" },
         { "name": "Pine Nuts", "amount": 1, "measurement": "cup" },
         { "name": "Butter Lettuce", "amount": 2, "measurement": "cups" },
         { "name": "Yellow Squash", "amount": 1, "measurement": "med" },
         { "name": "Olive Oil", "amount": 0.5, "measurement": "cup" },
         { "name": "Garlic", "amount": 3, "measurement": "cloves" }
      ],
      "steps": [
         "Preheat the oven to 350 degrees.",
         "Spread the olive oil around a glass baking dish.",
         "Add the salmon, garlic, and pine nuts to the dish.",
         "Bake for 15 minutes.",
         "Add the yellow squash and put back in the oven for 30 mins.",
         "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
      ]
   },
   {
      "name": "Fish Tacos",
      "ingredients": [
         { "name": "Whitefish", "amount": 1, "measurement": "l lb" },
         { "name": "Cheese", "amount": 1, "measurement": "cup" },
         { "name": "Iceberg Lettuce", "amount": 2, "measurement": "cups" },
         { "name": "Tomatoes", "amount": 2, "measurement": "large" },
         { "name": "Tortillas", "amount": 3, "measurement": "med" }
      ],
      "steps": [
         "Cook the fish on the grill until hot.",
         "Place the fish on the 3 tortillas.",
         "Top them with lettuce, tomatoes, and cheese."
      ]
   }
];
//!

class App extends React.Component {
   componentDidMount(){
      this.props.initializeApp()
   }
   render(){
      if(!this.props.initialized){ 
         return <Preloader />
      }

     return (
    <BrowserRouter>
      <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/dialogs" render={() => <DialogsContainer store={this.props.store} />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer  />} />
          <Route path="/news" render={()=><News recipes={data}/>} />
          <Route path="/music" render={()=><Music />} />
          <Route path="/settings" render={()=><Settings />} />
          <Route path="/users" render={()=><UsersContainer />} />
          <Route path="/login" render={()=><LoginPage />} />
        </div> 
      </div>
    </BrowserRouter>
      )
  }
}

const mapStateToProps=(state)=>({
initialized:state.app.initialized
})

export default connect(mapStateToProps ,{initializeApp})(App)  
