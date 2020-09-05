import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { RootState } from '../Redux/redux-store';

interface IMapStateProp{
    isAuth: boolean | null
}

let mapStateToProps = (state:RootState):IMapStateProp => ({
	isAuth : state.auth.isAuth
});

export const withAuthRedirect = (Component:any) => {
	class RedirectComponent extends React.Component<IMapStateProp>{
		render(){
			if( !this.props.isAuth )
				return <Redirect to='/login' />
			return <Component {...this.props} />
		}
	}
	let ConnectedAuthRedirect = connect(mapStateToProps)(RedirectComponent);
	return ConnectedAuthRedirect;
}