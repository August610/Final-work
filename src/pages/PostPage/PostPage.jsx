import React, { useCallback, useState, useEffect } from "react";
import api from "../../utils/Api";
import { useParams } from "react-router-dom";
import { Post } from '../../components/Post/Post';
import { useApi } from "../../hooks/useApi";
import Spinner from "../../components/Spinner";
import ContentLoader from "react-content-loader";

export const PagePost = ({ cards }) => {
  const { postID } = useParams();
  // const [postData, setPostData] = useState({});
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  const handler = useCallback(() => {
    return api.getPostById(postID)
  }, [postID, cards]);

  const { data: post, loading, error } = useApi(handler);
  return (

  // useEffect(() => {
  //   setIsLoading(true)
  //   api.getPostById(postID)
  //     .then((dataPost) => {
  //       setPostData(dataPost)
  //     })
  //     // .catch(() => setIsError(true))
  //     .finally(() => setIsLoading(false))
  // }, [postID, cards])

  // function handleFormReviews(dataProduct){
  //   setProductData(dataProduct)
  // }
  // return (
    <>
      {/* {isLoading && <ContentLoader
        viewBox="0 0 400 160"
        height={160}
        width={400}
        backgroundColor="transparent"

      >
        <circle cx="150" cy="86" r="8" />
        <circle cx="194" cy="86" r="8" />
        <circle cx="238" cy="86" r="8" />
      </ContentLoader>} */}
      {/* {isLoading  && <Spinner/> } */}
      {post && <Post {...post}/>}
    </>
  );
};
