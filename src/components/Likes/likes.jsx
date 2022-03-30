import React from "react";
import cn from "classnames";
import s from "./styles.module.css";


export const Likes = ({likes}) => {
    let count = 0;
    likes.fotEach(e => {
        count++;
    });
  return (

    <span className="likes">{count}</span>
  );
};
