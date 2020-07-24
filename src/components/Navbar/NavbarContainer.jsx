import React from 'react';
import Nav from './Navbar';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({friendsData : state.navBar.friends});

const mapDispatchToProps = (dispatch) => ({});
const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;