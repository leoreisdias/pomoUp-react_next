import styled from "styled-components";

export const LoadingContainer = styled.div`
height: 100vh;
width: 100%;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const RankingWrapper = styled.main`
display: flex;
flex-direction: row;
align-items: center;
overflow: auto;
`;

export const RankingContainer = styled.div`
height: 100vh;
width: 100%;
max-width: 992px;
padding: 2.5rem 2rem;

display: flex;
flex-direction: column;

& header {
  margin-bottom: 2rem;
}

& section div:first-child{
  display: grid;
  grid-template-columns: 6rem 2fr 1fr 1fr;

  margin-bottom: 1rem;
}

`;
