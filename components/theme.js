export const theme = {
  maxWidth: "1200px", // Set your desired max width here
};

import { createGlobalStyle } from "styled-components";

const HamburgerColor = createGlobalStyle`
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    background-color:rgb(255, 255, 255) !important;
  }
`;

