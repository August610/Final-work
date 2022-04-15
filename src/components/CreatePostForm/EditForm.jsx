import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UpdatePostContext } from '../../context/updatePostContext';
import { Button } from '../Button/Button';

import s from "./styles.module.css"

export function EditPostForm({title, text, image, tags, id, setActive}) {

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    const [info, setinfo] = useState({
        title: title,
        text: text,
        image: image,
        tags: tags,
    })

    const onUpdatePost = useContext(UpdatePostContext);

    function onSubmit(data) {
        onUpdatePost(data, id);
        setTimeout(() => setActive(false), 200); 
        
    }

    function handleChange(event) {
        setinfo({...info, [event.target.name]: event.target.value})
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
                value={info.title}
                onChange={handleChange}
            />
            <div>
                {errors?.title && <p className={s.errorMessage}>{errors?.title?.message}</p>}
            </div>
            <textarea className={s.form_area}
                type="text"
                {...register('text', {
                    required: 'Это поле обязательно'
                })}
                placeholder="text"
                value={info.text}
                onChange={handleChange}
            />
            <div>
                {errors?.text && <p className={s.errorMessage}>{errors?.text?.message}</p>}
            </div>
            <input className={s.formd}
                type="text"
                {...register('image', {

                })}
                placeholder="image url"
                value={info.image}
                onChange={handleChange}
            />
            <input className={s.formd}
                type="text"
                {...register('tags', {

                })}
                placeholder="tags"
                value={info.tags}
                onChange={handleChange}
            />
            <Button>Submit</Button>
        </form>
    )
}