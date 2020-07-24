import React from 'react';
import Header from './Header';
import {getAuthUserData} from '../../Redux/reducer-auth';
import {connect} from 'react-redux';

class HeaderContainer extends React.Component{
	componentDidMount(){
		this.props.getAuthUserData();
	}
	render(){
		return <Header {...this.props} />
	}
}

const mapStateToProps = (state) => ({
	login : state.auth.login,
	isAuth : state.auth.isAuth
}) 

export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);