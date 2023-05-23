import React from "react";
import styled from "styled-components";
import { authActionTypes } from "../../store/auth/authReducer";
import { todoActionTypes } from "../../store/todo/todoReducer";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch({ type: authActionTypes.LOGOUT });
    dispatch({ type: todoActionTypes.DELETE_ALL_TODO });
    navigate("/login");
  };
  return (
    <StyledHeader>
      <div>
        <NavLinkStyle to={"calculate"}>Calculate</NavLinkStyle>
        <NavLinkStyle to={"todo"}>AddToDo</NavLinkStyle>
      </div>
      <Button onClick={logoutHandler}>logout</Button>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  height: 100px;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #401ce2;
`;
const Button = styled.button`
  width: 120px;
  height: 38px;
  border-radius: 5px;
  background-color: #2672ad;
  color: white;
  border-color: #4242a2c1;
`;

const NavLinkStyle = styled(NavLink)`
  color: white;
  margin-right: 20px;
  font-size: 24px;
  text-decoration: none;
`;
