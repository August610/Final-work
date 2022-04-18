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
import SkeletonCard from "../Skeleton/SkeletonCard";
import MyLoader from "../Skeleton/SkeletonCard";

export const Card = ({ _id, likes, title, image, tags, author, text, created_at, updated_at }) => {

    const currentUser = useContext(CurrentUserContext);
    // const onDeletePost = useContext(DeletePostContext);
    const { handlePostLike, isLoading, pageLimit } = useContext(AppContext);
    const { handleDeletePost } = useContext(DeleteContext);


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

//     speed={2}
//     // width={360}
//     // height={424}
//     viewBox="0 0 260 424"
//     backgroundColor="#b3b3b3"
//     foregroundColor="#655d5d"
// >
//     <path d="M 0 0 h 185.6 v 187 H 0 z M 0 203 h 186 v 14 H 0 z M 0 233 h 186 v 56 H 0 z M 0 305 h 186 v 24 H 0 z" />
//     <circle cx="180" cy="350" r="12

    // console.log(author);
    return (
        <>
            {isLoading ? (<SkeletonCard>
            </SkeletonCard>) : (
                <div className="card">
                    <Link to={`/posts/${_id}`} className="card__link">
                        <div className="card__name"><p><b>{title}</b></p></div>
                       
                        {{ image } && 
                            <div className="card__image"><img src={image} alt="img" /></div>
                        }
                    </Link>
                    <div className="post_info text">
                        <h2>Tags: {tags &&
                            tags.filter(e => e !== " ").map((tag, i) => (
                                <span
                                    key={i}
                                    className={cn("tag")}
                                >
                                    {tags.length > 1 && tag !== " " ? tag + "." : tag}
                                </span>
                            ))}
                        </h2>
                        <b>Author</b>: <span className="email text">{author?.name}</span>
                        <div className="textPost">{text}</div>
                        <div>create: {time_created}</div>
                        <div>updated: {time_updated}</div>
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
