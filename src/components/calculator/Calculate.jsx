import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";

export const Calculate = () => {
  const [das, setDas] = useState(0);

  const { value } = useSelector((state) => state.caculate);

  const dispatch = useDispatch();

  const minusHandler = () => {
    dispatch({ type: "MINUS", payload: +das });
    setDas("");
  };

  const plusHandler = () => {
    dispatch({ type: "PLUS", payload: +das });
    setDas("");
  };

  const divisionHandler = () => {
    dispatch({ type: "DIVISION", payload: das });
    setDas("");
  };

  const malkinplasHandler = () => {
    dispatch({ type: "PLAS", payload: das });
    setDas("");
  };

  return (
    <Container>
      <h1> Current value:{value}</h1>

      <input
        type="number"
        placeholder="enter the number"
        value={das || ""}
        onChange={(e) => setDas(e.target.value)}
      />

      <button onClick={minusHandler}>minus</button>

      <button onClick={plusHandler}>plus</button>

      <button onClick={divisionHandler}>division</button>

      <button onClick={malkinplasHandler}>plas</button>
    </Container>
  );
};

const Container = styled.div`
  background-color: cornflowerblue;
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  margin-left: 600px;
  margin-top: 50px;
  border-radius: 10px;

  input {
    width: 280px;
    height: 30px;
    border-radius: 10px;
    border: none;
  }
  button {
    width: 150px;
    height: 30px;
    border-radius: 10px;
    border: none;
    background-color: #1950b6bd;
    color: #fff;
  }
`;
