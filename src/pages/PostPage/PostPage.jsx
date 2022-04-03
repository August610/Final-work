import React, { useCallback } from "react";
import api from "../../utils/Api";
import { useParams } from "react-router-dom";
import { Post } from '../../components/Post/Post';
import { useApi } from "../../hooks/useApi";

export const PagePost = ({cards}) => {
  const { postID } = useParams();
;

const handler = useCallback(()=> {
  return api.getPostById(postID)
}, [postID, cards]);

const {data: post, loading, error} = useApi(handler);

  return (
    <>
          {post && <Post {...post} />}
    </>
  );
};
