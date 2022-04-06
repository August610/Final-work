import React from 'react';
import { useForm } from 'react-hook-form';
import s from "./styles.module.css"
export function EditPostForm( {title, text, image, tags }) {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    function onSubmit(data) {
        console.log(data);
        // handleCreateNewPost(data)
    }

    return (
        <form className={s.form_title} onSubmit={handleSubmit(onSubmit)}>
            <h3>Edit Post</h3>
            <input className={s.formd}
                type="text"
                {...register('title', {
                    required: 'Это поле обязательно'
                })}
                placeholder="title"
                value={title}
            />
            <div>
                {errors?.name && <p className={s.errorMessage}>{errors?.name?.message}</p>}
            </div>
            <textarea className={s.form_area}
                type="text"
                {...register('text', {
                    required: 'Это поле обязательно'
                })}
                placeholder="text"
                value={text}
            />
            <input className={s.formd}
                type="text"
                {...register('image', {

                })}
                placeholder="image url"
                value={image}
            />
            <input className={s.formd}
                type="text"
                {...register('tags', {

                })}
                placeholder="tags"
                value={tags}
            />
            {errors?.password && <p className={s.errorMessage}>{errors?.password?.message}</p>}
            <button className={s.button}>Submit</button>

        </form>
    )
}