import React, { useContext } from "react";
import "./styles.css";
import { ReactComponent as Save } from './img/save.svg'
import { ReactComponent as Delete } from './img/delete.svg'
import cn from 'classnames';
import { CurrentUserContext } from "../../context/currentUserContext";
import { DeletePostContext } from "../../context/deletePostContext";
import { Link } from "react-router-dom";
import { isLiked } from "../../utils/utils";
import { AppContext } from "../../context/appContext";

export const Card = ({ _id, likes, title, image, tags, author, text, created_at, updated_at }) => {

    const currentUser = useContext(CurrentUserContext);
    const onDeletePost = useContext(DeletePostContext);
    const { handlePostLike } = useContext(AppContext);


    function handleDeletePost(e) {
        e.preventDefault();
        const confirmm = confirm("Удалить пост?")
            if(confirmm == true){
                onDeletePost({ _id });
            }
    }
    const isLike = isLiked(likes, currentUser?._id);

    function handleLikeClick(e) {
        e.preventDefault();
        handlePostLike( _id, isLike )
    }

    function checkUserPost() {
        if(author?.email === "sosnin.aleksande@mail.ru"){
            return true
        }
        
    }

    return (

        <div className="card">
            <Link to={`/posts/${_id}`} className="card__link">
                <a href="/" className="card__link">
                    <p className="card__name"><b>{title}</b></p>
                    {{image} && <img src={image} className="card__image" alt="img" />}
                </a>
            </Link>
            <div className="post_info">
                <h2><b>Tags</b>: {tags && tags}</h2>
                {/* <span><img src={author.avatar} width="40px" heigth="40px" /></span> */}
                <b>Author</b>: <span>{author?.email}</span>
                <div className="textPost">{text}</div>
                <p><b>create</b>: {created_at}</p>
                <p><b>updated</b>: {updated_at}</p>
            </div>
            <div className="card__sticky card__sticky_type_bottom-left">
                <button className="card__favorite">
                    {checkUserPost() && <Delete onClick={handleDeletePost} />}
                </button>
            </div>
            <div className="card__sticky card__sticky_type_bottom-right">
                <button className="card__favorite" onClick={handleLikeClick}>
                    <span className="likes">{likes.length}</span>
                    <Save className={cn('card__favorite-icon', { 'card__favorite-icon_active': isLike })} />
                </button>
            </div>
        </div>
    );
};
