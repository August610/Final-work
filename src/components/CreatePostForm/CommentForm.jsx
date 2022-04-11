import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import s from "./styles.module.css"
import cn from "classnames";
import { AddCommentContext } from '../../context/commentContext';
import { Button } from '../Button/Button';
export function CommentForm({ id }) {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });
    const handleAddComment = useContext(AddCommentContext);
    
    function onSubmit(data) {
        handleAddComment(data, id)
    }


    return (
        <form className={s.form_title_com} onSubmit={handleSubmit(onSubmit)}>
            <span>add comments</span>
            <textarea className={cn(s.form_area_com)}
                type="text"
                {...register('text', {
                    // required: 'Это поле обязательно'
                })}
                placeholder="text"
            />
            <div>
                {errors?.text && <p className={s.errorMessage}>{errors?.text?.message}</p>}
            </div>
            <Button>Submit</Button>
        </form>
    )
}