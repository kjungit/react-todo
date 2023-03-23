import React, { useState } from "react";
import { BsCheckCircle, BsCheckCircleFill } from "react-icons/bs";
import styled from "styled-components";
import EditModal from "../EditModal/EditModal";

const TodoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border: 1px solid #000;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 20px;
`;
const ItemCheckButton = styled.div`
  width: 30px;
  height: 30px;
  font-size: 26px;
`;
const ItemText = styled.div``;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ItemEditButton = styled.div`
  padding: 4px 12px;
  border: 1px solid #000;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
`;
const ItemDeleteButton = styled.div`
  padding: 4px 12px;
  border: 1px solid #000;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
`;

function TodoItem({ todo, onDelete, onEdit }) {
  const { id, title, done } = todo;
  const [modal, setModal] = useState(false);
  const [check, setCheck] = useState(done);
  const modalChange = () => {
    setModal(!modal);
  };

  const checkCheck = () => {
    setCheck(!check);
    onEdit({ title, done: !check, id });
  };

  return (
    <TodoItemWrapper>
      <ItemCheckButton onClick={checkCheck}>
        {check ? <BsCheckCircleFill /> : <BsCheckCircle />}
      </ItemCheckButton>
      <ItemText>{title}</ItemText>
      <ButtonWrapper>
        <ItemEditButton
          onClick={() => {
            modalChange(true);
          }}
        >
          Edit
        </ItemEditButton>
        <ItemDeleteButton onClick={() => onDelete(id)}>Delete</ItemDeleteButton>
      </ButtonWrapper>
      {modal === true ? (
        <EditModal todo={todo} onEdit={onEdit} modalChange={modalChange} />
      ) : null}
    </TodoItemWrapper>
  );
}

export default TodoItem;
