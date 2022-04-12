import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import api from "./utils/Api";
import { CurrentUserContext } from "./context/currentUserContext";
import { DeletePostContext } from "./context/deletePostContext";
import { Link, Route, Routes } from "react-router-dom";
import { AllPosts } from "./pages/AllPostsPage/AllPostsPage";
import { PagePost } from "./pages/PostPage/PostPage";
import { AppContext } from "./context/appContext";
import { CreatePost } from "./pages/CreatePost/CreatePost";
import { UpdatePostContext } from "./context/updatePostContext";
import { AddCommentContext } from "./context/commentContext";


export const AppAnt = () => {
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const reload = () => {
    window.location.reload();
  }

  useEffect(() => {
    setIsLoading(true);
    Promise.all([api.getPostsList(), api.getUserInfo()])
      .then(([postData, userData]) => {
        setCurrentUser(userData)
        setCards(postData);
      })
      .finally(() => {
        setTimeout(() => setIsLoading(false), 200);
      });
  }, [])


  function handleUpdateUser(userUpdate) {
    api.setUserInfo(userUpdate).then((newUserData) => { setCurrentUser(newUserData) }
    )
  }

  function handleDeletePost({ _id }) {
    api.deletePost(_id)
      .then(() => {
        const newCards = cards.filter((card) => card._id !== _id);
        setCards(newCards);
      });
  }


  function handlePostLike(_id, isLiked) {
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
        alert("Пост создан!")
        cards.push(newCard);
        setCards(cards);
      });
  };

  function handleUpdatePost(data, id) {
    api.updatePost(data, id)
      .then((newCard) => {
        // cards.splice(cards.indexOf(cards.find(e => e.id === id)), 1, updatePost)
        // setCards(cards);
        alert("Пост обновлен!")
        const newCards = cards.map((c) => {
          return c._id === newCard._id ? newCard : c
        });
        setCards(newCards);
      });
  }

  function handleAddComment(data, id) {
    api.addComments(data, id)
      .then((newCard) => {
        // cards.splice(cards.indexOf(cards.find(e => e.id === id)), 1, updatePost)
        // setCards(cards);
        const newCards = cards.map((c) => {
          return c._id === newCard._id ? newCard : c
        });
        setCards(newCards);
      });
  }

  return (
    <AddCommentContext.Provider value={handleAddComment}>
      <UpdatePostContext.Provider value={handleUpdatePost}>
        <AppContext.Provider value={{ handlePostLike, isLoading }}>
          <DeletePostContext.Provider value={handleDeletePost}>
            <CurrentUserContext.Provider value={currentUser}>
              <Header user={currentUser} onUpdateUser={handleUpdateUser}>
                {/* <Link to={"/"}> */}
                  <Logo />
                {/* </Link> */}
              </Header>
              <main className="content container">
                <Routes>
                  <Route
                    path="/"
                    element={
                      <AllPosts
                        currentUser={currentUser}
                        cards={cards}
                        loading={isLoading}
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
                      <CreatePost handleCreateNewPost={handleCreateNewPost} />
                    }
                  />
                  <Route path="*" element={<h1>Страница не найдена</h1>} />
                </Routes>
              </main>
              <Footer>© You!</Footer>
            </CurrentUserContext.Provider>
          </DeletePostContext.Provider>
        </AppContext.Provider>
      </UpdatePostContext.Provider>
    </AddCommentContext.Provider>
  );
};
