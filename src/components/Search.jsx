import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./styles/Search.module.scss";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
  };

  return (
    <form className={styles.FormStyle} onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </form>
  );
};

export default Search;
