// React
import { useState } from "react";

export const useSearch = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleInputSearchChange = (e, data) => {
    const texto = e.target.value;
    if (texto.length > 0) {
      const search = data.filter((project) => {
        return `${project.name} ${project.category}`
          .toLowerCase()
          .includes(texto.toLowerCase());
      });
      setSearchText(texto);
      setSearchResult(search);
    } else {
      setSearchText("");
      setSearchResult([]);
    }
  };

  return {
    searchText,
    searchResult,
    handleInputSearchChange,
  };
};
