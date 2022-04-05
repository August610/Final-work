import React, { useContext } from "react";
import "./styles.css";
import s from "./styles.module.css";
import { ReactComponent as Save } from './img/save.svg'
import { ReactComponent as Delete } from './img/delete.svg'
import cn from 'classnames';
import { CurrentUserContext } from "../../context/currentUserContext";
import { DeletePostContext } from "../../context/deletePostContext";
import { useNavigate } from "react-router-dom";
import { isLiked } from './../../utils/utils';
import { AppContext } from "../../context/appContext";

export const Post = ({ _id, likes, title, image, tags, author, avatar, text, created_at, updated_at }) => {
    const currentUser = useContext(CurrentUserContext);
    const onDeletePost = useContext(DeletePostContext);
    const { handlePostLike } = useContext(AppContext);
    const navigate = useNavigate();


    function handleDeletePost(e) {
        e.preventDefault();
        onDeletePost({ _id });
    }
    const isLike = likes && isLiked(likes, currentUser._id);

    function handleLikeClick(e) {
        // e.preventDefault();
        handlePostLike(_id, isLike)
    }

    function checkUserPost() {
        const userPost = false;
        if (author?.email === "sosnin.aleksande@mail.ru") {
            userPost = true;
        }
    }

    return (
        <>
            <div className="post">
                <div className="buttons">
                    <a href="#" className="button-back" onClick={() => navigate(-1)}>back</a>
                    <a href="#" className="button-edit" onClick={() => navigate(-1)}>edit</a>
                </div>

                <h1 className="card__name"><b>{title}</b></h1>
                <p>{text}</p>
                <span><img src={image} /></span>
                <div className="autor"> <b>Author</b>:
                    {/* <span><img src={author?.avatar} width="70px" height="70px"></img></span> */}
                    <span> {author?.name}</span>
                </div>

                <div className="icons">
                    <div className="card__sticky card__sticky_type_bottom-left">
                        <button className="card__favorite">
                            {checkUserPost() && <Delete onClick={handleDeletePost} />}
                        </button>
                    </div>
                    <div className="card__sticky card__sticky_type_bottom-right">
                        <button className="card__favorite" onClick={handleLikeClick}>
                            <span className="likes">{likes?.length}</span>
                            <Save className={cn('card__favorite-icon', { 'card__favorite-icon_active': isLike })} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};