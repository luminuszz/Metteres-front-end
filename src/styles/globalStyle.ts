import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
   margin:0;
   padding:0;
   outline:0;
   box-sizing:0;
   box-sizing: border-box;
 }

 body{
   font: 400 14px Roboto, sans-serif;
   background:#f0f0f5;
   -webkit-font-smoothing: antialiased;
 }

 input{
   width: 100%;
  margin-top: 10px;
  height: 60px;
  color: #333;
  border: 1px solid #dcdce6;
  border-radius: 8px;
  padding: 0 24px;
  margin-top: 10px;
 }

`;
