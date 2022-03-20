import React from "react";
import cn from "classnames";
import s from "./styles.module.css";


export const Header = ({children}) => {
  return (
      <header className={s.header}>
        <div className={cn(s['header-wrapper'], 'container')}>
            {children}
        </div>
      </header>
  );
};
