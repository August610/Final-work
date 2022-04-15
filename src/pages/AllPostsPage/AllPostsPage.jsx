import { Pagination } from "antd";
import React from "react";
import ContentLoader from "react-content-loader";
import { Cards } from "../../components/Cards";
import { Info } from "../../components/Info";


export const AllPosts = ({ currentUser, cards, handlePostLike}) => {
  return (
    <>
      <div className="content__cards">

        <Info />
        <Cards goods={cards} onPostLike={handlePostLike} currentUser={currentUser}/>
      </div>
    </>
  );
};
