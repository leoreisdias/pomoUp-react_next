import styled from "styled-components";

export const HomeWrapper = styled.main`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
overflow: auto;
`;

export const HomeContainer = styled.div`
height: 100vh;
max-width: 992px;
margin: 0 auto;
padding: 2.5rem 2rem;

display: flex;
flex-direction: column;

& section{
  flex: 1;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6.25rem;

  align-content: center;
  margin-top: 2rem;
}

@media(max-height: 800px){
  & section{
    margin-top: 4rem;
  }
}

@media(max-width: 720px){
  & section{
    grid-template-columns: 1fr;
    margin-top: 4rem;
  }
}

`;
