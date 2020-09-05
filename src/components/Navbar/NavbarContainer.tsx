import React from 'react';
import Nav from './Navbar';
import {connect} from 'react-redux';
import { IFriends } from '../../Redux/reducer-nav';
import { RootState } from '../../Redux/redux-store';

interface IMapStateProps {
    friendsData: Array<IFriends>
}

const mapStateToProps = (state:RootState):IMapStateProps => ({
    friendsData : state.navBar.friends
});

const NavContainer = connect(mapStateToProps, null)(Nav);

export default NavContainer;

