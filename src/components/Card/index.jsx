import React, { useContext } from "react";
import "./styles.css";
import { ReactComponent as Save } from './img/save.svg'
import { ReactComponent as Delete } from './img/delete.svg'
import cn from 'classnames';
import { CurrentUserContext } from "../../context/currentUserContext";
import { DeletePostContext } from "../../context/deletePostContext";

export const Card = ({ onProductLike, _id, likes, title, image, tags, author, text, created_at, updated_at }) => {

    const currentUser = useContext(CurrentUserContext);
    const onDeletePost = useContext(DeletePostContext)


    function handleDeletePost(e) {
        e.preventDefault();
        onDeletePost({ _id });
    }
    const isLiked = likes.some(id => id === currentUser._id);

    function handleLikeClick() {
        onProductLike({ _id, likes })
    }

    return (
        <div className="card">
            <a href="#" className="card__link">
                <p className="card__name"><b>{title}</b></p>
                <img src={image} className="card__image" />
            </a>
            <div className="post_info">
                <h2>Tags: {tags}</h2>
                <span><img src={author.avatar} width="40px" heigth="40px" /></span>
                <span>{author.email}</span>
                <p>{text}</p>
                <p>create: {created_at}</p>
                <p>updated: {updated_at}</p>
            </div>
            <div className="card__sticky card__sticky_type_bottom-left">
                <button className="card__favorite">
                    <Delete onClick={handleDeletePost} />
                </button>
            </div>
            <div className="card__sticky card__sticky_type_bottom-right">
                <button className="card__favorite" onClick={handleLikeClick}>
                    <Save className={cn('card__favorite-icon', { 'card__favorite-icon_active': isLiked })} />
                </button>
            </div>
        </div>
    );
};
