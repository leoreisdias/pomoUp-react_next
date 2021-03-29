import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled(motion.main)`
display: grid;

grid-template-columns: 6rem 2fr 1fr 1fr;
height: 6rem;
border-radius: 20px;
background: ${props => props.theme.colors.blue};

margin-bottom: 1rem;
color: ${props => props.theme.colors.white};

& > span{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;

  font-size: 2rem;

  border-right: 2px solid ${props => props.theme.colors.background};
  border-radius: 10%;
  background:  ${props => props.theme.colors.blue};
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

@media(max-width:500px){
  grid-template-columns: 3rem 2fr 1fr 1fr;
  height: 4.8rem;

  & strong{
    font-size: 0.65rem
  }

  & > span{
    width: 2rem;
    font-size: 1rem
  }

  & strong{
  justify-content: center;
}

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

@media(max-width: 500px){
  font-size: 0.65rem;

  & img{
    width: 2.5rem;
    height: 2.5rem
  }

  & > div{
    justify-content: center;
    margin-left: 0.2rem
  }

  & > div > span{
    margin-top: 0.5rem
  }

  & > div span > img{
  width: 0.5rem;
}
}
`;
