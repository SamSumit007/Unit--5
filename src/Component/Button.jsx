import React from "react";
import styled from "styled-components";

const Button = styled.button`
border: none;
padding: 5px;
background: ${(props) =>(props.theme === "light" ? "#29f" : "#46a")};
text-align: center;
color:  ${(props) =>(props.theme === "light" ? "#ffff" : "#ffff")};
cursor: pointer;
margin: 5px;
&:hover{
  background-color: #3b76ce;
transform: scale(1.05);
  };
`
  
export { Button }
  