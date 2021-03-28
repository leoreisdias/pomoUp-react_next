import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled(motion.main)`
display: grid;

grid-template-columns: 6rem 2fr 1fr 1fr;
height: 6rem;
border-radius: 20px;
background: var(--blue);

margin-bottom: 1rem;
color: var(--white);

& > span{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;

  font-size: 2rem;

  border-right: 2px solid var(--background);
  border-radius: 10%;
  background: var(--blue);
}

& > span > strong{
  font-weight: 400;
}

& strong{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

& strong > span{
  margin-right: 0.2rem;
}

`;

export const ProfileContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;

& img{
  width: 4rem;
  height: 4rem;

  border-radius: 50%;
}

& > div{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  margin-left: 1rem;
  height: 100%;
}

& > div > span{
  display: flex;
  align-items: center;
  height: 1rem;
}

& > div span > img{
  width: 0.7rem;
  margin-right: 0.4rem;
}

`;
