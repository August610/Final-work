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

    console.log({image});

    return (
        <form className={s.formd} onSubmit={handleSubmit(onSubmit)}>
            <h3>Edit Post</h3>
            <input
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
            <textarea
                type="text"
                {...register('text', {
                    required: 'Это поле обязательно'
                })}
                placeholder="text"
                value={text}
            />
            <input
                type="text"
                {...register('image', {

                })}
                placeholder="image url"
                value={image}
            />
            <input
                type="text"
                {...register('tags', {

                })}
                placeholder="tags"
                value={tags}
            />
            {errors?.password && <p className={s.errorMessage}>{errors?.password?.message}</p>}
            <button>Submit</button>

        </form>
    )
}