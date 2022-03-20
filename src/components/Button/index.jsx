import React from "react";
import cn from 'classnames';

import s from "./styles.module.css";

export const Button = ({type, children}) => {
  return (
    <button className={cn(
        s.button,
        {
            [s.primary]: type === 'primary',
            [s.secondary]: type === 'secondary',
        }
    )}>
        {children}
    </button>
  );
};
