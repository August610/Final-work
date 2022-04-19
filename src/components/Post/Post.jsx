import React, { useContext, useState } from "react";
import "./styles.css";
import s from "./styles.module.css";
import { ReactComponent as Save } from './img/save.svg'
import { ReactComponent as Delete } from './img/delete.svg'
import { ReactComponent as DeleteCom } from './img/delete_com.svg'
import { ReactComponent as Edit } from './img/edit.svg'
import cn from 'classnames';
import { CurrentUserContext } from "../../context/currentUserContext";
import { DeleteContext } from "../../context/deletePostContext";
import { useNavigate } from "react-router-dom";
import { isLiked } from './../../utils/utils';
import { AppContext } from "../../context/appContext";
import { Modal } from "../Modal/Modal";
import { EditPostForm } from "../CreatePostForm/EditForm";
import { CommentForm } from "../CreatePostForm/CommentForm";
import { Button } from '../../components/Button/Button';
// import ContentLoader from "react-content-loader";
// import Spinner from "../Spinner";
import SkeletonPost from "../Skeleton/SrletonPost";
import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import api from "../../utils/Api";


export const Post = ({ _id, likes, title, image, tags, author, avatar, text, comments, created_at }) => {
    const currentUser = useContext(CurrentUserContext);
    // const onDeletePost = useContext();
    const { handleDeletePost, handleDeleteComment } = useContext(DeleteContext);
    const [modalActive, setModalActive] = useState(false);
    const [show, setShow] = useState(false);
    const [showCom, setShowCom] = useState(false);
    const [user, setUser] = useState([]);
    // const { handlePostLike } = useContext(AppContext);
    const { handlePostLike, isLoading } = useContext(AppContext);
    const navigate = useNavigate();
    function changeToggle() {
        if (!show) {
            setShow(true)
        }
        if (show) {
            setShow(false)
        }
    }

    function changeToggleCom() {
        if (!showCom) {
            setShowCom(true)
        }
        if (showCom) {
            setShowCom(false)
        }
    }

    function deletePost(e) {
        e.preventDefault();
        const confirmm = confirm("Удалить пост?")
        if (confirmm == true) {
            handleDeletePost({ _id });
        }
        navigate(-1);
    }

    function deleteComment(idCom) {
        // e.preventDefault();
        console.log(idCom);
        console.log(_id);
        const confirmm = confirm("Удалить комментарий?")
        if (confirmm == true) {
            handleDeleteComment([_id], [idCom]);
        }
        // navigate(-1);
    }

    const isLike = likes && isLiked(likes, currentUser._id);

    function handleLikeClick(e) {
        e.preventDefault();
        handlePostLike(_id, isLike)
    }

    function checkUserPost() {
        if (currentUser?.email === author?.email) {
            return true;
        }
    }

    
    function getUsers(userId) {
        api.getUserById(userId)
        .then((dataUser) => {
            // console.log(dataUser.name);
            setUser(dataUser.name)
        })
    }

    // getUsers('622b6ffc09b12f80f4c10bc0')

    // const date = new Date(created_at)
    console.log(comments);

    return (
        <>
            {isLoading ? (<SkeletonPost>
            </SkeletonPost>) : (

                <div className="post">
                    <div className="buttons">
                        <Button type={() => navigate("/")}>back</Button>
                        {checkUserPost() && <Button type={() => setModalActive(true)}>edit</Button>}
                        <Modal active={modalActive} setActive={setModalActive}>
                            <EditPostForm title={title} text={text} image={image} tags={tags} id={_id} setActive={setModalActive} />
                        </Modal>
                    </div>

                    <h1 className="card__name"><b>{title}</b></h1>
                    <p>{text}</p>
                    <span><img src={image} /></span>
                    <div className="autor"> <b>Author</b>:
                        <span> {author?.name}</span>
                    </div>
                    <span className="commentss" onClick={changeToggleCom}><b><button className="com_btn">comments:</button></b></span>
                    <div className="comments">
                        {comments?.length !== 0 ? showCom ? (
                            <List
                                className="comment-list"
                                header={`${comments.length} comments`}
                                itemLayout="horizontal"
                                dataSource={comments}
                                renderItem={item => (
                                    <li>
                                        <Comment
                                            // actions={getUsers(item.author)}
                                            author={item.author.name}
                                            // avatar={item.avatar}
                                            content={item.text} 
                                            datetime={item.created_at?.slice(0, 10) + " " + created_at?.slice(11, 16)}
                                        />
                                        {/* {item.author === currentUser?._id && <DeleteCom className="delete_iconn" onClick={(e) => e.stopPropagation(deleteComment(com?._id))} />}
                                        {item.author === currentUser?._id && <Edit className="edit_iconn" onClick={(e) => e.stopPropagation(alert("Изменение"))} />} */}
                                    </li>
                                )}
                            />
                        ) : null : <>no comments</>}
                    </div>
                    <Button type={changeToggle}>add comment</Button>
                    <div>
                        {show ? <CommentForm id={_id} /> : null}
                    </div>

                    <div className="icons">
                        <div className="card__sticky card__sticky_type_bottom-left">
                            <button className="card__favorite">
                                {checkUserPost() && <Delete onClick={deletePost} />}
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
            )}
        </>
    );
};

