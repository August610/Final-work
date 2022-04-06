import React, { useCallback } from "react";
import api from "../../utils/Api";
import { useParams } from "react-router-dom";
import { Post } from '../../components/Post/Post';
import { useApi } from "../../hooks/useApi";
import Spinner from "../../components/Spinner";
import ContentLoader from "react-content-loader";

export const PagePost = ({ cards }) => {
  const { postID } = useParams();
  ;

  const handler = useCallback(() => {
    return api.getPostById(postID)
  }, [postID, cards]);

  const { data: post, loading, error } = useApi(handler);

  return (
    <>
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
      {post && <Post {...post} />}
    </>
  );
};
