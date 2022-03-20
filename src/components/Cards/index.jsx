import React, { useState } from "react";
import s from "./styles.module.css";

import { Card } from "../Card";

export const Cards = ({goods}) => {
  
  return (
    <div className={s.cards}>
      {goods.map( (dataItem,index) => {
        return (<Card key={`${index}`} {...dataItem}/>)
      })}
    </div>
  );
};
