import React, { useContext, useState } from "react";
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
import { Modal } from "../Modal/Modal";
import { EditPostForm } from "../CreatePostForm/EditForm";
import { CommentForm } from "../CreatePostForm/CommentForm";
import api from "../../utils/Api";
import { Button } from '../../components/Button/Button';

export const Post = ({ _id, likes, title, image, tags, author, avatar, text, comments, created_at, com }) => {
    const currentUser = useContext(CurrentUserContext);
    const onDeletePost = useContext(DeletePostContext);
    const [modalActive, setModalActive] = useState(false);
    const [show, setShow] = useState(false);
    const [showCom, setShowCom] = useState(false);
    const { handlePostLike } = useContext(AppContext);
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


    function handleDeletePost(e) {
        e.preventDefault();
        const confirmm = confirm("Удалить пост?")
        if (confirmm == true) {
            onDeletePost({ _id });
        }
        navigate(-1);
    }
    const isLike = likes && isLiked(likes, currentUser._id);

    function handleLikeClick(e) {
        e.preventDefault();
        handlePostLike(_id, isLike)
    }


    function checkUserPost() {
        // if(author?.email === "sosnin.aleksande@mail.ru"){
        if (currentUser?.email === author?.email) {
            return true
        }
    }

    const textCom = comments?.map(e => (e.text));
    console.log(textCom);

    return (
        <>
            <div className="post">
                <div className="buttons">
                    <Button children={"back"} type={() => navigate("/")} />
                    {/* {checkUserPost() && <button href="#" className="button_back edit" onClick={() => setModalActive(true)}>edit</button>} */}
                    {checkUserPost() && <Button children={"edit"} type={() => setModalActive(true)} />}
                    <Modal active={modalActive} setActive={setModalActive}>
                        <EditPostForm title={title} text={text} image={image} tags={tags} id={_id} />
                    </Modal>
                </div>

                <h1 className="card__name"><b>{title}</b></h1>
                <p>{text}</p>
                <span><img src={image} /></span>
                <div className="autor"> <b>Author</b>:
                    {/* <span><img src={author?.avatar} width="70px" height="70px"></img></span> */}
                    <span> {author?.name}</span>
                </div>
                <span className="commentss" onClick={changeToggleCom}> <b>comments:</b>{showCom ? comments?.map(com => (
                    <div key={com._id} >
                        {com?.text}
                    </div>
                )) : null}</span>
                
                {/* <span className="">comments: {textCom} </span> */}
                {/* <button className="button_back" onClick={changeToggle}>add comment</button> */}
                <Button children={"add comment"} type={changeToggle} />
                <div>
                    {show ? <CommentForm id={_id} /> : null}
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