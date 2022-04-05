import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CreatePostForm } from "../../components/CreatePostForm/CreatePostForm";
import s from "./styles.module.css";


export const CreatePost = ({handleCreateNewPost}) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="buttons">
                <a href="#" className="button-back" onClick={() => navigate(-1)}>back</a>
            </div>
            <CreatePostForm handleCreateNewPost={handleCreateNewPost}/>
        </>
    );
};