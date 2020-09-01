import React from 'react';
import style from './Header.module.scss'
import { NavLink } from 'react-router-dom';

interface IProps {
    isAuth:boolean | null
    login: string | null
    logout: () => void
}

const Header:React.FC<IProps> = (props) => {
    return (
        <div className={style.header}>
            <div className={style.header__logo}>
                <img src="https://image.freepik.com/free-vector/husky-dog-sport-logo_94073-38.jpg" alt="" />
            </div>
            <div className={style.header__login}>
                {props.isAuth
                    ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                    : <NavLink to="/Login">Login</NavLink>}
            </div>
        </div>
    );
}

export default Header;