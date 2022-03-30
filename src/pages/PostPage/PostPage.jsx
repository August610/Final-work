import React, { useState, useEffect } from "react";
import api from "../../utils/Api";
import { useParams } from "react-router-dom";
import { Post } from '../../components/Post/Post';

export const PagePost = ({currentUser, isLoading, handlePostLike}) => {
  const [post, setpost] = useState([]);
  const { postID } = useParams();
;

  useEffect(()=> {
    api.getPostById(postID)
      .then((postData)=> {
        console.log(postData);
        setpost(postData);
      })
  },[])

  return (
    <>
          {/* {isLoading  && <Spinner/> } */}
          <Post {...post} currentUser={currentUser} onPostLike={handlePostLike}/>  
    </>
  );
};
