import { createGlobalStyle, css } from "styled-components";
export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  font-family: "Poppins";
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
  scroll-behavior: smooth;
}

html {
  font-size: 100%;
}

body {
  margin: 0;
  padding: 0 ;
  overflow-x: hidden;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  font-size: 1rem;
  line-height: 1;
}
h1,
h2,
h3,
h4,
h5,
h6,
p,
ul,
figure,
blockquote,
dl,
dd {
  font-family: 'Poppins';

  padding: 0;
  margin: 0;
}
button {
  border: none;
  font-family: inherit; 
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.title};
  padding: 0;
  cursor: pointer;
}

h1{
  font-size: 50px;
  font-family: 'Poppins';
  line-height: 60px;
  color: ${(props) => props.theme.text};
 }
 h3{
  color: ${(props) => props.theme.subText};
  letter-spacing: normal;
  line-height: 30px; 
 }
 h2{
  margin-top: 10px;
  color: ${(props) => props.theme.subText};
  font-size: 40px;
  line-height: 1.2;
 }
 a{
  color: ${(props) => props.theme.text};
  font-weight: 500;
  &:active{
    color: ${(props) => props.theme.primary};
  }
 }
 li{
  color: ${(props) => props.theme.subText};
 }
body {
    background-color: ${(props) => props.theme.bodyBg};
   line-height: 1.5;
   font-size: 1.1rem; 
   font-family: 'Poppins';
   font-weight:300;
   transition: all ${(props) => props.theme.transitionTime};
 }
`;

export const iconStyle = css`
  height: 30px;
  width: 30px;
  stroke-width: 1.5px;
  object-fit: cover;
  margin-bottom: 10px;
`;

export const hover = css`
  cursor: pointer;
  color: ${(props) => props.theme.text};
  &:hover {
    color: ${(props) => props.theme.primary};
  }
`;
