import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  @import url("https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Pangolin&display=swap");

  & h1, h2, h3 {
    font-family: "Roboto", sans-serif;
    color: #d6dceb;
  }

  & p {
    font-family: "Pangolin", sans-serif;
    color: #d6dceb;
  }
`;
