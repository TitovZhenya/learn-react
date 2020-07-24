import React from 'react';
import style from './Post.module.scss';

const Post = (props) => {
	return(
    <div className={style.newPost}>
        <img src="https://5bucks.ru/wp-content/uploads/2019/07/che2l-500x412.jpg" alt=""/>
        <div className={style.newPost__text}>{props.message}</div>
        <span>{props.likeCount}</span>
    </div>
		);
}

export default Post;