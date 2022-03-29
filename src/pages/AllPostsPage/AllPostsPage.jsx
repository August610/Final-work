import React, { useState, useEffect } from "react";
import { Cards } from "../../components/Cards";
import { Info } from "../../components/Info";

// import Spinner from "../../components/Spinner";

export const AllPosts = ({isLoading, currentUser, cards, handlePostLike}) => {
  return (
    <>
        <div className="content__cards">
          {/* {isLoading  && <Spinner/> } */}
          <Info />
          <Cards goods={cards} onPostLike={handlePostLike} currentUser={currentUser}/>
        </div>
    </>
  );
};
