import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
   --dark-bg: linear-gradient(to left, #3333cc 0%, #ffffcc 100%);/*BG */
    --gray-1:#000066;/* DESCRIPTION ,CNTCT BTN */
    --deep-dark:linear-gradient(to bottom right, #cc00cc 0%, #33ccff 100%);  /* nav-hover, form bg,FOOTER */
    --gray-2: #ffffff;/* HERO BORDER ,CNTCT FORM ICON  */
    --white : #ffffcc;/* NAME */
    --black: #ffffff; /* SEND BTN  */

  }
  html{
    font-size: 10px;
    font-family: 'Cheque';
    background:var(--dark-bg)
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--gray-1);
    .scroll-content {
      background-color: var(--dark-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--gray-1);
      }
    }
  }
`;
export default GlobalStyles;
