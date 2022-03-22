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


  return (
    <>
      <Header user={currentUser}>
        <Logo onClick={reload} />
      </Header>
      <main className="content container">
        <Info />
        <Cards goods={cards} />
      </main>
      <Footer>© You!</Footer>
    </>
  );
};
