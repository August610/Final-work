import React, { useState, useEffect } from "react";
import { Cards } from "./components/Cards";
import { postData } from "./posts.js";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { Info } from "./components/Info";


export const AppAnt = () => {
  const [cards] = useState(postData);
  
  const reload = () => {
    window.location.reload();
  }
  return (
    <>
      <Header>
        <Logo onClick={reload}/>
      </Header>
      <main className="content container">
      <Info/>
        <Cards goods={cards} />
      </main>
      <Footer>© You!</Footer>
    </>
  );
};
