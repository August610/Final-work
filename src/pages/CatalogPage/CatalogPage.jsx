import React from "react";
import { Cards } from "../../components/Cards";

export const PageCatalog = ({isLoading, currentUser, cards, handleProductLike}) => {
  return (
    <>
        <div className="content__cards">
          {/* {isLoading  && <Spinner/> } */}
          <Cards goods={cards} onProductLike={handleProductLike} currentUser={currentUser}/>
        </div>
    </>
  );
};
