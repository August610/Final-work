import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CreatePostForm } from "../../components/CreatePostForm/CreatePostForm";
import s from "./styles.module.css";
import { Button } from '../../components/Button/Button';



export const CreatePost = ({ handleCreateNewPost }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="buttons">
                {/* <button href="#" className={s.button_back} onClick={() => navigate(-1)}>back</button> */}
                <Button children={"back"} type={() => navigate("/")} />
            </div>
            <div className={s.post}>
                <CreatePostForm handleCreateNewPost={handleCreateNewPost} />
            </div>

        </>
    );
};