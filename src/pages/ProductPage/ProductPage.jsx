import React, { useState, useEffect } from "react";
import api from "../../utils/Api";
import Spinner from "../../components/Spinner";
import { Product } from '../../components/Product/Product';
import { useParams } from "react-router-dom";

export const PageProduct = ({currentUser, isLoading, handleProductLike}) => {
  const [product, setProduct] = useState([]);
  const { productID } = useParams();
;


  useEffect(()=> {
    api.getProductById(productID)
      .then((productData)=> {
        setProduct(productData);
      })
  },[])

  return (
    <>
          {/* {isLoading  && <Spinner/> } */}
          <Product {...product} currentUser={currentUser} onProductLike={handleProductLike}/>  
    </>
  );
};
