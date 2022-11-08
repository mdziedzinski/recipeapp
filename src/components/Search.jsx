import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  const [input, setInput] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form>
      <FormStyle onSubmit={submitHandler}>
        <div>
          <FaSearch></FaSearch>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
          />
        </div>
      </FormStyle>
    </form>
  );
};

const FormStyle = styled.form`
  margin: 0rem 20rem;

  div {
    width: 100%;
    position: relative;
  }
  input {
    border: none;
    background: #d5eeee;
    color: black;
    font-size: 1.5rem;
    border: none;
    padding: 1rem 3rem;
    width: 100%;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: black;
  }
`;

export default Search;