import React from 'react';
import style from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import { IFriends } from '../../Redux/reducer-nav';

interface IProps {
    friendsData: Array<IFriends>
}

const Nav:React.FC<IProps> = (props) => {
    let friend = props.friendsData.map((friend, index) => <Friends key={index} id={friend.id} name={friend.name} />);
    return (
        <nav className={style.nav}>
            <ul className={style.nav__list}>
                <li>
                    <NavLink to='/Profile' activeClassName={style.active}>Profile</NavLink>
                </li>
                <li>
                    <NavLink to='/Dialogs' activeClassName={style.active}>Message</NavLink>
                </li>
                <li>
                    <NavLink to='/News' activeClassName={style.active}>News</NavLink>
                </li>
                <li>
                    <NavLink to='/Music' activeClassName={style.active}>Music</NavLink>
                </li>
                <li>
                    <NavLink to='/Settings' activeClassName={style.active}>Settings</NavLink>
                </li>
                <li>
                    <NavLink to='/Users' activeClassName={style.active}>Users</NavLink>
                </li>
            </ul>
            <div className={style.nav__friend}>
                {friend}
            </div>
        </nav>
    );
}

export default Nav;