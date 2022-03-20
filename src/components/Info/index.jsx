import React from "react";
import s from "./styles.module.css";


const click = () => {
  alert("Есть контакт");
}

export const Info = () => {
  return (
    <form className={s.info}>
      <div>
        <h1>Welcome to Our Image Board!</h1>
        <p>We're stoked that you're here. 🥳</p>
        <div>
          <button className="btn" onClick={click}>Создать пост</button>
        </div>
      </div>
    </form>
  );
};
