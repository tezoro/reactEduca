import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Dialogs from './components/Dialogs/Dialogs'
import Header from './components/Header/Header'
import Music from './components/Music/Music'
import Navbar from './components/Navbar/navBar'
import News from './components/News/News'
import Profile from './components/Profile/Profile'
import Settings from './components/Settings/Settings'

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
          <Header />
          <Navbar />
        <div className='app-wrapper-content'>
          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogPage} sendMessage={props.sendMessage} />} />
          <Route path="/profile" render={() => <Profile state={props.state.profilePage} addPost={props.addPost} />} />
          <Route path="/news" render={()=><News />} />
          <Route path="/music" render={()=><Music />} />
          <Route path="/settings" render={()=><Settings />} />
        </div> 
      </div>
    </BrowserRouter>
      )
  }

export default App  
