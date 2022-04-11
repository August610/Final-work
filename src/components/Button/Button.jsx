import React from "react";
// import cn from 'classnames';

import s from "./styles.module.css";

export const Button = ({children, type}) => {
  return (
    <button className={s.button} onClick={type}>
        {children}
    </button>
  );
};
