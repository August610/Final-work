import { Pagination } from "antd";
import React from "react";
import ContentLoader from "react-content-loader";
import { Cards } from "../../components/Cards";
import { Info } from "../../components/Info";


export const AllPosts = ({currentUser, cards, handlePostLike, loading}) => {
  return (
    <>
        <div className="content__cards">

          <Info />
          {loading && <ContentLoader
    viewBox="0 0 400 160"
    height={160}
    width={400}
    backgroundColor="transparent"
    
  >
    <circle cx="150" cy="86" r="8" />
    <circle cx="194" cy="86" r="8" />
    <circle cx="238" cy="86" r="8" />
  </ContentLoader>}
          <Cards goods={cards} onPostLike={handlePostLike} currentUser={currentUser}/>
          <Pagination defaultCurrent={1} total={50}/>
        </div>
    </>
  );
};
