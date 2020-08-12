import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import UsersContainer from './components/Users/UsersContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';
import { initializeApp } from './Redux/reducer-app';
import Preloader from './components/Common/Preloader/Preloader';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

const News = React.lazy( () => import('./components/News/News'));
const Settings = React.lazy ( () => import('./components/Settings/Settings') );

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader isFetching={true} />
        }
        return (
            <div className="Wrapper">
                <HeaderContainer />
                <NavbarContainer />
                <div className="content">
                    <React.Suspense fallback={ <Preloader /> } >
                        <Switch>
                            <Route path='/Profile/:userId?' render={() => <ProfileContainer />} />
                            <Route path='/Dialogs' render={() => <DialogsContainer />} />
                            <Route path='/Login' render={() => <LoginContainer />} />
                            <Route path='/News' component={News} />
                            <Route path='/Music' component={Music} />
                            <Route path='/Settings' component={Settings} />
                            <Route path='/Users' component={UsersContainer} />
                        </Switch>
                    </React.Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(connect(mapStateToProps, { initializeApp }), withRouter)(App);
