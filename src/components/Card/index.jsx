import React from "react";
import "./styles.css";
import { ReactComponent as Save } from './img/save.svg'
import { ReactComponent as Delete } from './img/delete.svg'
import cn from 'classnames';

export const Card = ({ onProductLike, currentUser, _id, likes, title, image, tags, author, text, created_at, updated_at }) => {
   const handleDeletePosts = () => {
    
   }
   const isLiked = likes.some(id => id === currentUser._id);

   function handleLikeClick() {
       
    onProductLike({_id, likes})
}

    return (
        <div className="card">
            <a href="#" className="card__link">
                <p className="card__name">{title}</p>
                <img src={image} className="card__image" />
                <div className="card__sticky card__sticky_type_bottom-right">
                    <button className="card__favorite" onClick={handleLikeClick}>
                        <Save className={cn('card__favorite-icon', {'card__favorite-icon_active': isLiked})}/>      
                    </button>
                </div>
                <div className="card__sticky card__sticky_type_bottom-left">
                    <button className="card__favorite">
                    <Delete onClick={handleDeletePosts}/>     
                    </button>
                </div>
            </a>
            <div>
                <p>Tags: {tags}</p>
                <span><img src={author.avatar} width="40px" heigth="40px"/></span> 
                <span>{author.email}</span> 
                <p>{text}</p>
                <p>create: {created_at}</p>
                <p>updated: {updated_at}</p>
            </div>
        </div>
    );
};
