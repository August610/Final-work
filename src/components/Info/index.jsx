import React from "react";
import { Link } from "react-router-dom";
import s from "./styles.module.css";
import cn from "classnames";


const click = (e) => {
  e.preventDefault();
  alert("Есть контакт");
}

export const Info = () => {
  return (
    <form className={s.info}>
      <div>
        <h1>Welcome to Our Image Board!</h1>
        <p>We're stoked that you're here. 🥳</p>
        <Link to={`/createPost`}>
          <div>
            <button className={s.btnn}>Создать пост</button>
          </div>
        </Link>
      </div>
    </form>
  );
};
