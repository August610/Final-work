import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import api from "./utils/Api";
import { CurrentUserContext } from "./context/currentUserContext";
import { DeletePostContext } from "./context/deletePostContext";
import { Route, Routes } from "react-router-dom";
import { AllPosts } from "./pages/AllPostsPage/AllPostsPage";
import { PagePost } from "./pages/PostPage/PostPage";
import { AppContext } from "./context/appContext";
import { CreatePost } from "./pages/CreatePost/CreatePost";


export const AppAnt = () => {
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});


  const reload = () => {
    window.location.reload();
  }

  useEffect(() => {
    Promise.all([api.getPostsList(), api.getUserInfo()])
      .then(([postData, userData]) => {
        console.log(cards);
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
        window.location.reload();
      })
      .catch(alert("Ошибка доступа"))
  }

  function handlePostLike(_id, isLiked) {
    console.log(isLiked)
    api.changeLikeStatus(_id, isLiked).then((newCard) => {
      const newCardsState = cards.map((c) => {
        return c._id === newCard._id ? newCard : c;
      });
      setCards(newCardsState);
    });
  }

  function handleCreateNewPost(data) {
    api.createNewPost(data)
      .then((newCard) => {
        return(newCard);
      });
  };

  return (
    <AppContext.Provider value={{ handlePostLike }}>
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
                  />
                }
              />
              <Route
                path="/posts/:postID"
                element={
                  <PagePost
                    currentUser={currentUser}
                    onPostLike={handlePostLike}
                    cards={cards}
                  />
                }
              />
              <Route
                path="/createPost"
                element={
                  <CreatePost handleCreateNewPost={handleCreateNewPost}/>
                }
              />
              <Route path="*" element={<h1>Страница не найдена</h1>} />
            </Routes>
          </main>
          <Footer>© You!</Footer>
        </CurrentUserContext.Provider>
      </DeletePostContext.Provider>
    </AppContext.Provider>
  );
};
