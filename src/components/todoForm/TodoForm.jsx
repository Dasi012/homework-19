import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { todoActionTypes } from "../../store/todo/todoReducer";
import { TodoList } from "../todoList/TodoList";

const TodoForm = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todo);

  const changeInputHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: todoActionTypes.ADD_TODO, payload: value });
    setValue("");
  };

  const removeAllTodo = () => {
    dispatch({ type: todoActionTypes.DELETE_ALL_TODO });
  };

  return (
    <>
      <Container>
        <SecondContainer>
          <Input type="text" value={value} onChange={changeInputHandler} />
          <Button onClick={submitHandler} disabled={!value}>
            Add Todo
          </Button>
          <Button onClick={removeAllTodo}>Delete All</Button>
        </SecondContainer>
        <div>
          {todo.todos.map((item) => (
            <TodoList key={item.id} todo={item} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default TodoForm;

const Container = styled.div`
  display: flex;
  width: 800px;
  align-self: center;
  flex-direction: column;
  margin-top: 50px;
`;

const Button = styled.button`
  width: 120px;
  height: 38px;
  border-radius: 5px;
  margin-left: 50px;
  background-color: #0000ff83;
  color: white;
  border-color: #4242a2c1;
`;

const SecondContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid;
  background-color: #004667c7;
`;

const Input = styled.input`
  width: 400px;
  height: 30px;
  border-radius: 5px;
  margin-left: 20px;
`;
