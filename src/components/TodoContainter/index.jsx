import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  deleteTodo,
  editTodo,
  getTodos,
} from "../../store/slices/todosSlice";
import AddTodo from "../AddTodo";
import TodoItem from "../TodoItem/TodoItem";
import styled from "styled-components";

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

function TodoContainter() {
  const { entities: todos, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const onAdd = (todoItem) => {
    dispatch(addTodo(todoItem));
  };

  const onEdit = (todo) => {
    dispatch(editTodo(todo));
  };

  const onDelete = (todoId) => {
    dispatch(deleteTodo(todoId));
  };
  return (
    <TodoWrapper>
      <div>Todo List</div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        );
      })}
      <AddTodo onAdd={onAdd} />
    </TodoWrapper>
  );
}

export default TodoContainter;
