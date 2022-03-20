import React from "react";
import "./styles.css";
import save from './img/save.svg'
import cn from 'classnames';

export const Card = ({ title, image, tags, author, text, created_at, updated_at }) => {
    return (
        <div className="card">
            <a href="#" className="card__link">
            <p className="card__name">{title}</p>
                <img src={image} className="card__image" />
                <div className="card__desc"> 
                </div>
            </a>
            <div>
                <p>Tags: {tags}</p>
                <image src={author.avatar}/>
                <p>{author.email}</p>
                <p>{text}</p>
                <p>create: {created_at}</p>
                <p>updated: {updated_at}</p>
            </div>
        </div>
    );
};
