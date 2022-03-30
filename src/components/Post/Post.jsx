import React, { useContext } from "react";
import "./styles.css";
import { ReactComponent as Save } from './img/save.svg'
import { ReactComponent as Delete } from './img/delete.svg'
import cn from 'classnames';
import { CurrentUserContext } from "../../context/currentUserContext";
import { DeletePostContext } from "../../context/deletePostContext";
import { useNavigate } from "react-router-dom";
import { Likes } from "../Likes/likes";

export const Post = ({ onPostLike, _id, likes, title, image, tags, author, avatar, text, created_at, updated_at }) => {
    const currentUser = useContext(CurrentUserContext);
    const onDeletePost = useContext(DeletePostContext);
    const navigate = useNavigate();


    function handleDeletePost(e) {
        e.preventDefault();
        onDeletePost({ _id });
    }
    const isLiked = likes && likes.some(id => id === currentUser._id);

    function handleLikeClick(e) {
        e.preventDefault();
        onPostLike({ _id, likes })
    }

    return (
        <>
            <div className="card">
                <a href="#" className="button-back" onClick={() => navigate(-1)}>back</a>
                <h1 className="card__name"><b>{title}</b></h1>
                <p>{text}</p>
                <span><img src={image} /></span>
                {/* <p>{author}</p> */}
                {/* <span><img src={author.avatar} width="40px" heigth="40px" /></span> */}
                {/* <span>{author}</span> */}
                <div className="icons">
                    <div className="card__sticky card__sticky_type_bottom-left">
                        <button className="card__favorite">
                            <Delete onClick={handleDeletePost} />
                        </button>
                    </div>
                    <div className="card__sticky card__sticky_type_bottom-right">
                        <button className="card__favorite" onClick={handleLikeClick}>
                            {/* <span className="likes">{count}</span> */}
                            <Save className={cn('card__favorite-icon', { 'card__favorite-icon_active': isLiked })} />
                        </button>
                    </div>
                </div>

            </div>
        </>
    );
};