import React from 'react';
import './App.scss';
import {Route} from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';

const App = (props) => {
  return (
	  	<div className="Wrapper">
		    <HeaderContainer />
			<NavbarContainer />
			<div className="content">
				<Route path='/Profile/:userId?' render={ () => <ProfileContainer />} />
				<Route path='/Dialogs' render={ () => <DialogsContainer />} />
				<Route path='/Login' render={ () => <Login />} />
				<Route path='/News' component={News} />
				<Route path='/Music' component={Music} />
				<Route path='/Settings' component={Settings} />
				<Route path='/Users' component={UsersContainer} />
			</div>		
	      </div>
	    );
}

export default App;
