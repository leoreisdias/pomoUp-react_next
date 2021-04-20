import { motion } from "framer-motion";
import styled from "styled-components";
import { Box } from "../components/TopRankCard";

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
max-width: 1100px;
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

@media(max-width: 500px){

  & section div strong{
    font-size: 0.65rem;
  }
}
`;

export const TopRankContainer = styled(motion.div)`
  margin-top: 2rem;
  display: grid;
  grid-template-areas: 'second first third';

  & ${Box}:nth-child(1){
    grid-area: first;
    bottom: 2rem;
    left: -5rem;
  }
  &  ${Box}:nth-child(2){
    grid-area: second;
    left: 0;
  }
  & ${Box}:nth-child(3){
    grid-area: third;
    left: -10rem;
  }

@media(max-width: 800px){
  display: none;
}

`;
