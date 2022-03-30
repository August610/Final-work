import { Pagination } from "antd";
import React, { useState, useEffect } from "react";
import { Cards } from "../../components/Cards";
import { Info } from "../../components/Info";


export const AllPosts = ({currentUser, cards, handlePostLike}) => {
  return (
    <>
        <div className="content__cards">
          <Info />
          <Cards goods={cards} onPostLike={handlePostLike} currentUser={currentUser}/>
          <Pagination defaultCurrent={1} total={50}/>
        </div>
    </>
  );
};
