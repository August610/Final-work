import React, { useState, useEffect } from "react";
import { Cards } from "./components/Cards";
import { postData } from "./posts.js";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { Info } from "./components/Info";
import api from "./utils/Api";


export const AppAnt = () => {
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({})

  const reload = () => {
    window.location.reload();
  }

  useEffect(() => {
    Promise.all([api.getPostsList(), api.getUserInfo()])
      .then(([productData, userData]) => {
        setCurrentUser(userData)
        setCards(productData);
      })
  }, [])

  function handleUpdateUser(userUpdate) {
    api.setUserInfo(userUpdate).then((newUserData) => { setCurrentUser(newUserData) }
    )
  }

  function handleProductLike({_id, likes}) {
    const isLiked = likes.some(id=> id === currentUser._id)
    api.changeLikeStatus(_id, isLiked)
      .then((newCard)=> {
        const newCardsState = cards.map(c => { 
          return c._id === newCard._id ? newCard : c 
        })

        setCards(newCardsState);
      })
}


  return (
    <>
      <Header user={currentUser} onUpdateUser={handleUpdateUser}>
        <Logo onClick={reload} />
      </Header>
      <main className="content container">
        <Info />
        <Cards goods={cards} onProductLike={handleProductLike} currentUser={currentUser}/>
      </main>
      <Footer>© You!</Footer>
    </>
  );
};
