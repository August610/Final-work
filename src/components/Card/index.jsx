import React from "react";
import "./styles.css";
import { ReactComponent as Save } from './img/save.svg'
import cn from 'classnames';

export const Card = ({ title, image, tags, author, text, created_at, updated_at }) => {

    return (
        <div className="card">
            <a href="#" className="card__link">
                <p className="card__name">{title}</p>
                <img src={image} className="card__image" />
                <div className="card__sticky card__sticky_type_bottom-right">
                    <button className="card__favorite">
                        <Save  />
                        {/* <img src={save} alt="добавить в избранное" className="card__favorite-icon" /> */}
                    </button>
                </div>
            </a>
            <div>
                <p>Tags: {tags}</p>
                <img src={author.avatar} width="40px" heigth="40px" />
                {author.email}
                <p>{text}</p>
                <p>create: {created_at}</p>
                <p>updated: {updated_at}</p>
            </div>
        </div>
    );
};
