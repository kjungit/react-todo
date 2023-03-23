import React, { useState } from "react";
import styled from "styled-components";
import { BsXSquare, BsXSquareFill } from "react-icons/bs";

const Xsquare = styled.div`
  width: 20px;
  display: block;
`;
const ModalWrapper = styled.div`
  top: 26%;
  left: 50%;
  margin-left: -45%;
  width: 90%;
  height: 160px;
  position: absolute;
  z-index: 1;
  border: 1px solid #000;
  background-color: #fff;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 16px;
`;
const EditInput = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  margin-top: 16px;
`;

const ItemEditButton = styled.div`
  padding: 4px 12px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #000;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  margin-top: 30px;
`;
function EditModal({ todo, onEdit, modalChange }) {
  const [input, setInput] = useState("");
  const [isHover, setIsHover] = useState(false);

  const onChange = (event) => {
    setInput(event.target.value);
  };
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <ModalWrapper>
      <Xsquare
        onClick={modalChange}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHover ? <BsXSquareFill /> : <BsXSquare />}
      </Xsquare>
      <EditInput onChange={onChange} />
      <ItemEditButton onClick={() => onEdit(todo.id, input, todo.done)}>
        Edit
      </ItemEditButton>
    </ModalWrapper>
  );
}

export default EditModal;
