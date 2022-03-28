import React, { useState } from "react";
import s from "./styles.module.css";
import { ReactComponent as Save } from './img/save.svg'
import truck from './img/truck.svg';
import quality from './img/quality.svg';
import cn from 'classnames';
import { useNavigate } from "react-router-dom";



export const Product = ({ onProductLike, currentUser, _id, name, likes, price, discount, wigth, description, available, pictures, tags }) => {
    const [count, setCount] = useState(0)
    const discount_price = Math.round(price - price * discount / 100);
    const isLiked = likes && likes.some(id => id === currentUser._id);
    const navigate = useNavigate();
    function createMarkup() {
        return { __html: description };
    }

    function handleLikeClick() {
        onProductLike({ _id, likes })
    }

    return (
        <>
            <div>
                <a href="#" className="button-back" onClick={() => navigate(-1)}>Назад</a>
                <h1 className={s.productTitle}>{name}</h1>
                <div>
                    <span>Артикул: <b>2388907</b></span>
                    {/* Тут будут отзывы */}
                </div>
            </div>

            <div className={s.product}>
                <div className={s.imgWrapper}>
                    <img src={pictures} alt={`Изображение товара ${name}`} />
                </div>
                <div className={s.desc}>
                    <span className={discount !== 0 ? s.oldPrice : s.price}>{price}₽</span>
                    {discount !== 0 && <span className={cn(s.price, 'card__price_type_discount')}>{discount_price}₽</span>}
                    <div className={s.bntWrap}>
                        <div className={s.btnLeft}>
                            <button className={s.minus}> - </button>
                            <span className={s.amount}>{count}</span>
                            <button className={s.plus}> + </button>
                        </div>
                        <a href="#" className={cn('btn', 'btn_type_primary', s.buttonCart)}>В корзину</a>
                    </div>

                    <button className={cn(s.favorite, { [s.favoriteActive]: isLiked })} onClick={handleLikeClick}>
                        <Save />
                        <span>{isLiked ? 'В избранном' : 'В избранное'}</span>
                    </button>

                    <div className={s.delivery}>
                        <img src={truck} aria-hidden="true" />
                        <div className={s.right}>
                            <h3 className={s.name}>Доставка по всему Миру!</h3>
                            <p className={s.text}>Доставка курьером — <span className={s.bold}>от 399 ₽</span></p>
                            <p className={s.text}>Доставка в пункт выдачи — <span className={s.bold}>от 199 ₽</span></p>
                        </div>
                    </div>
                    <div className={s.delivery}>
                        <img src={quality} aria-hidden="true" />
                        <div className={s.right}>
                            <h3 className={s.name}>Гарантия качества</h3>
                            <p className={s.text}>
                                Если Вам не понравилось качество нашей продукции, мы вернем
                                деньги, либо сделаем все возможное, чтобы удовлетворить ваши
                                нужды.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={s.box}>
                <h2 className={s.title}>Описание</h2>
                <p dangerouslySetInnerHTML={createMarkup()}></p>
                <h2 className={s.title}>Характеристики</h2>
                <div className={s.grid}>
                    <div className={s.naming}>Вес</div>
                    <div className={s.description}>1 шт 120-200 грамм</div>
                    <div className={s.naming}>Цена</div>
                    <div className={s.description}>490 ₽ за 100 грамм</div>
                    <div className={s.naming}>Польза</div>
                    <div className={s.description}>
                        <p>
                            Большое содержание аминокислот и микроэлементов оказывает
                            положительное воздействие на общий обмен веществ собаки.
                        </p>
                        <p>Способствуют укреплению десен и жевательных мышц.</p>
                        <p>
                            Развивают зубочелюстной аппарат, отвлекают собаку во время смены
                            зубов.
                        </p>
                        <p>
                            Имеет цельную волокнистую структуру, при разжевывание получается
                            эффект зубной щетки, лучше всего очищает клыки собак.
                        </p>
                        <p>Следует учесть высокую калорийность продукта.</p>
                    </div>
                </div>
            </div>
        </>
    );
};