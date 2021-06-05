import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --primary-bg: #0f1113;
    --primary-font: #9a9a9a;
    --primary-border: #9a9a9a;

    --success-bg: #002101;
    --success-font: #89e68a;
    --success-border: #89e68a;

    --info-bg: #04273c;
    --info-font: #cae9fb;
    --info-border: #cae9fb;

    --warning-bg: #3c2d03;
    --warning-font: #f9da83;
    --warning-border: #f9da83;

    --danger-bg: #250303;
    --danger-font: #ff5151;
    --danger-border: #ff5151;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }
  * {
    margin: 0;
    outline: 0 none;
    padding: 0;
  }
  *:focus {
    outline: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: var(--primary-bg);
    color: var(--primary-font);
    text-rendering: optimizeLegibility;

    vertical-align: baseline;
    position: relative;
  }
  body, input, button, select, textarea {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 24px;
    font-weight: 400;
  }
  a,
  a:active,
  a:hover,
  a:focus {
    text-decoration: none;
  }
  a:active,
  a:hover,
  a:focus {
    outline: 0 none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  ul {
    list-style: outside none none;
  }
  button {
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
`
