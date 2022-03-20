import React from "react";
import "./styles.css";

export const SearchInfo = ({searchText, searchCount }) => {
  return (
    searchText && <section className="search-title">
			По запросу <span>{searchText}</span> найдено {searchCount} товаров
		</section>
  );
};
