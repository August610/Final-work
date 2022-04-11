import React from 'react';
import { useForm } from 'react-hook-form';
import s from "./styles.module.css"
import cn from "classnames";
import { Button } from '../../components/Button/Button';
export function CreatePostForm({ handleCreateNewPost }) {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    function onSubmit(data) {
        handleCreateNewPost(data, data.image, data.tags)
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
                {errors?.title && <p className={s.errorMessage}>{errors?.title?.message}</p>}
            </div>
            <textarea className={cn(s.form_area)}
                type="text"
                {...register('text', {
                    required: 'Это поле обязательно'
                })}
                placeholder="text"
            />
            <div>
                {errors?.text && <p className={s.errorMessage}>{errors?.text?.message}</p>}
            </div>
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
            {/* <button className={s.button}>Submit</button> */}
            <Button>Submit</Button>
        </form>
    )
}