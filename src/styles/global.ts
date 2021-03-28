import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  @media(max-width: 1080px){
    html{
        font-size: 93.75%;
    }
}

@media(max-width: 720px){
    html{
        font-size: 87.5%;
    }
}

body {
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
}

body, input, textarea, button{
    font: 400 1rem "Inter", sans-serif;
}

button{
    cursor: pointer;
}

a {
    color: inherit;
    text-decoration: none;
}

::-webkit-scrollbar {
    width: 0;  /* Remove scrollbar space */
    height: 0;
    background: transparent;  /* Optional: just make scrollbar invisible */
}
`
