import React from "react";
import s from "./styles.module.css";

import { Card } from "../Card";
import ContentLoader from "react-content-loader";

export const Cards = ({ goods, onPostLike}) => {

  return (
    <>
      <div className={s.cards}>
        {goods?.map((dataItem, index) => {
          return (<Card key={`${index}`} {...dataItem} onPostLike={onPostLike}/>)
        })}
      </div>

    </>

  );
};
