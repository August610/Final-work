import React from 'react';
import { useForm } from 'react-hook-form';
import s from "./styles.module.css"
import cn from "classnames";
export function CreatePostForm({ handleCreateNewPost }) {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    function onSubmit(data) {
        handleCreateNewPost(data)
    }


    return (
        <form className={s.form_title} onSubmit={handleSubmit(onSubmit)}>
            <h3>Create new post</h3>
            <input className={s.formd}
                type="text"
                {...register('title', {
                    required: 'Это поле обязательно'
                })}
                placeholder="title"
            />
            <div>
                {errors?.name && <p className={s.errorMessage}>{errors?.name?.message}</p>}
            </div>
            <textarea className={cn(s.form_area)}
                type="text"
                {...register('text', {
                    required: 'Это поле обязательно'
                })}
                placeholder="text"
            />
            <input className={s.formd}
                type="text"
                {...register('image', {

                })}
                placeholder="image url"
            />
            <input className={s.formd}
                type="text"
                {...register('tags', {

                })}
                placeholder="tags"
            />
            {errors?.password && <p className={s.errorMessage}>{errors?.password?.message}</p>}
            <button className={s.button}>Submit</button>
        </form>
    )
}