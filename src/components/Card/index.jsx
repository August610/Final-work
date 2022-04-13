import React, { useContext } from "react";
import "./styles.css";
import { ReactComponent as Save } from './img/save.svg'
import { ReactComponent as Delete } from './img/delete.svg'
import cn from 'classnames';
import { CurrentUserContext } from "../../context/currentUserContext";
import { DeleteContext } from "../../context/deletePostContext";
import { Link } from "react-router-dom";
import { isLiked } from "../../utils/utils";
import { AppContext } from "../../context/appContext";
import ContentLoader from "react-content-loader";

export const Card = ({ _id, likes, title, image, tags, author, text, created_at, updated_at}) => {

    const currentUser = useContext(CurrentUserContext);
    // const onDeletePost = useContext(DeletePostContext);
    const { handlePostLike, isLoading } = useContext(AppContext);
    const { handleDeletePost} = useContext(DeleteContext);


    // console.log((created_at.slice(0, 10) + " " + created_at.slice(11, 16)));
    const time_created = created_at?.slice(0, 10) + " " + created_at?.slice(11, 16);
    const time_updated = updated_at?.slice(0, 10) + " " + updated_at?.slice(11, 16);

    function deletePost(e) {
        e.preventDefault();
        const confirmm = confirm("Удалить пост?")
        if (confirmm == true) {
            handleDeletePost({ _id });
        }
    }
    const isLike = isLiked(likes, currentUser?._id);

    function handleLikeClick(e) {
        e.preventDefault();
        handlePostLike(_id, isLike)
    }

    function checkUserPost() {
        if (author?.email === "sosnin.aleksande@mail.ru") {
            return true
        }

    }

    // console.log(author);
    return (
        <>
            {isLoading ? (<ContentLoader
                viewBox="0 0 400 160"
                height={160}
                width={400}
                backgroundColor="transparent"
            >
                <circle cx="150" cy="86" r="8" />
                <circle cx="194" cy="86" r="8" />
                <circle cx="238" cy="86" r="8" />
            </ContentLoader>) : (

            <div className="card">
                <Link to={`/posts/${_id}`} className="card__link">
                    <p className="card__name"><b>{title}</b></p>
                    {{ image } && <img src={image} className="card__image" alt="img" />}
                </Link>
                <div className="post_info">
                    <h2><b>Tags</b>: {tags &&
                        tags.filter(e => e !== " ").map((tag, i) => (
                            <span
                                key={i}
                                className={cn("tag")}
                            >
                                {tags.length > 1 && tag !== " " ? tag + "." : tag}
                            </span>
                        ))}
                    </h2>
                    <b>Author</b>: <span className="email">{author?.name}</span>
                    <div className="textPost">{text}</div>
                    <p><b>create</b>: {time_created}</p>
                    <p><b>updated</b>: {time_updated}</p>
                </div>
                <div className="card__sticky card__sticky_type_bottom-left">
                    <button className="card__favorite">
                        {checkUserPost() && <Delete onClick={deletePost} />}
                    </button>
                </div>
                <div className="card__sticky card__sticky_type_bottom-right">
                    <button className="card__favorite" onClick={handleLikeClick}>
                        <span className="likes">{likes.length}</span>
                        <Save className={cn('card__favorite-icon', { 'card__favorite-icon_active': isLike })} />
                    </button>
                </div>
            </div>
            )}
        </>
    );
};
