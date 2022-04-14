import React from "react";
import { Link } from "react-router-dom";
import s from "./styles.module.css";
import cn from "classnames";
import { Button } from '../../components/Button/Button';


// const click = (e) => {
//   e.preventDefault();
//   alert("Есть контакт");
// }

export const Info = () => {
  return (
    <form className={s.info}>
      <div>
        <h1>Welcome to Our Image Board!</h1>
        <p>We're stoked that you're here. 🥳</p>
        <Link to={`/createPost`}>
          <div>
            <Button>Создать пост</Button>
          </div>
        </Link>
      </div>
    </form>
  );
};
