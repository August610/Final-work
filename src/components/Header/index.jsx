import React from "react";
import cn from "classnames";
import s from "./styles.module.css";


export const Header = ({children, user}) => {
  return (
      <header className={s.header}>
        <div className={cn(s['header-wrapper'], 'container')}>
            {children}
          <div className={s.profile}>
            <span>{user.email}</span>
            <span>{user.name}</span>
          </div>
        </div>
      </header>
  );
};
