import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Lato');
@import url('https://fonts.googleapis.com/css?family=Raleway');
@import url('https://fonts.googleapis.com/css?family=Lobster');
@import url('https://fonts.googleapis.com/css?family=Lusitana');

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
*::placeholder {
  color: #23374d;;
}
html, body, #root {
  min-height: 100%;
  font-family: Roboto, Arial, Helvetica, sans-serif;
}
body {
  background-color: #23374d;
}
`;
