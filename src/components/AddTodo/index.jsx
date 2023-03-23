import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
const Footer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100px;
  width: 100%;
  background-color: #ddd;
`;
const TodoInput = styled.input``;
const InputButton = styled.button``;

function AddTodo({ onAdd }) {
  const { loading } = useSelector((state) => state.post);

  const [input, setInput] = useState("");

  const onChange = (event) => {
    setInput(event.target.value);
  };
  return (
    <Footer>
      <TodoInput onChange={onChange} />
      <InputButton onClick={() => onAdd(input)}>추가</InputButton>
    </Footer>
  );
}

export default AddTodo;
