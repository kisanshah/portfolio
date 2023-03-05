import styled from "styled-components";

const Button = styled.button`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 0.5em 1em;
  font-size: ${(props) => props.theme.fontSize.button};
  border: none;
`;
