import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styles from "./Search.module.scss";

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

// const FormStyle = styled.form`
//   margin: 0rem 20rem;

//   div {
//     width: 100%;
//     position: relative;
//   }
//   input {
//     border: none;
//     background: #d5eeee;
//     color: black;
//     font-size: 1.5rem;
//     border: none;
//     padding: 1rem 3rem;
//     width: 100%;
//   }
//   svg {
//     position: absolute;
//     top: 50%;
//     left: 0%;
//     transform: translate(100%, -50%);
//     color: black;
//   }
// `;

export default Search;
