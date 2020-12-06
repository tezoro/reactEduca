import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import Navbar from './components/Navbar/navBar';
import News from './components/News/News';
import Profile from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
          <Header />
          <Navbar />
        <div className='app-wrapper-content'>
        <Route path="/Dialogs" component={Dialogs}/>
        <Route path="/Profile"component={Profile}/>
        <Route path="/News" component={News} />
        <Route path="/Music" component={Music} />
        <Route path="/Settings" component={Settings} />
        </div> 
      </div>
    </BrowserRouter>
      )
  }

export default App;
