import React, { useState, useEffect } from "react";
import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { Info } from "./components/Info";
import api from "./utils/Api";
import { Pagination } from 'antd';
import { CurrentUserContext } from "./context/currentUserContext";
import { DeletePostContext } from "./context/deletePostContext";
import { Route, Routes } from "react-router-dom";
import { AllPosts } from "./pages/AllPostsPage/AllPostsPage";
import { PagePost } from "./pages/PostPage/PostPage";

// const POST_ID = "622bda5c06c7d323b8ae4617";

export const AppAnt = () => {
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  

  const reload = () => {
    window.location.reload();
  }

  useEffect(() => {
    Promise.all([api.getPostsList(), api.getUserInfo()])
      .then(([postData, userData]) => {
        setCurrentUser(userData)
        setCards(postData);
      })
  }, [])

  function handleUpdateUser(userUpdate) {
    api.setUserInfo(userUpdate).then((newUserData) => { setCurrentUser(newUserData) }
    )
  }

  function handleDeletePost({ _id }) {
    api.deletePost(_id)
      .then((newData) => {
        setCards(newData)
      })
      .catch(alert("Ошибка доступа"))
  }

  function handlePostLike({ _id, likes }) {
    const isLiked = likes.some(id => id === currentUser._id)
    api.changeLikeStatus(_id, isLiked)
      .then((newCard) => {
        const newCardsState = cards.map(c => {
          return c._id === newCard._id ? newCard : c
        })

        setCards(newCardsState);
      })
  }


  return (
    <DeletePostContext.Provider value={handleDeletePost}>
      <CurrentUserContext.Provider value={currentUser}>
        <Header user={currentUser} onUpdateUser={handleUpdateUser}>
          <Logo onClick={reload} />
        </Header>
        <main className="content container">
          <Routes>
            <Route
              path="/"
              element={
                <AllPosts
                  currentUser={currentUser}
                  cards={cards}
                  handlePostLike={handlePostLike}
                />
              }
            />
            <Route
              path="/posts/:postID"
              element={
                <PagePost
                  currentUser={currentUser}            
                  handlePostLike={handlePostLike}
                />
              }
            />
            <Route path="*" element={<h1>Страница не найдена</h1>} />
          </Routes>
          <Pagination defaultCurrent={1} total={50} />
        </main>
        <Footer>© You!</Footer>
      </CurrentUserContext.Provider>
    </DeletePostContext.Provider>
  );
};
