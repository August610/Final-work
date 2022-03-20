import React, { useState, useEffect } from "react";
import { Cards } from "./components/Cards";
import { Header } from "./components/Header";
// import { Sort } from "./components/Sort";
import { Footer } from "./components/Footer";
import jsonData from "./data.json";
import { Logo } from "./components/Logo";
// import { Search } from "./components/Search";
// import { SearchInfo } from './components/SearchInfo';
import { Button } from "./components/Button";

export const App = () => {
  console.log("### 1 ###: Start");
  const [searchQuery, setSearchQuery] = useState("");
  const [cards, setCards] = useState(jsonData);
  
  useEffect(() => {
    console.log('useEffect#1')
    handleRequest();
  }, [searchQuery]);
  
  const handleRequest = () => {
    if(searchQuery !== '') {
      const filterCards = jsonData.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
      setCards(prevState => filterCards)
    }
  }

  const handleInputChange = (inputValue) => {
    setSearchQuery(inputValue)
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleRequest();
  }
  const margin = 40;

  console.log("### 2 ###: Finish");
  
  const headerStyle = {
    color: "red",
    fontSize: "34px",
    marginBottom: `${margin}px`,
    marginLeft: `${margin}px`
  }

  return (
    <>
      <Header>
      <MehOutlined />
        <Search handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} />
      </Header>
      <main className="content container">
        <h1 style={headerStyle}>Стилизованный заголовок</h1>
        <Button type="primary">
          Купить
        </Button>
        <Button type="secondary">
          Подробнее
        </Button>
        <SearchInfo searchText={searchQuery} searchCount={cards.length}/>
        <Sort />
        <div className="content__cards">
          <Cards goods={cards} />
        </div>
      </main>
      <Footer />
    </>
  );
};
