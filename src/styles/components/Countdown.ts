import { motion } from "framer-motion";
import styled from "styled-components";

export const CountdownContainer = styled.div`
display: flex;
align-items: center;
font-family: Rajdhani;
font-weight: 600;
color: ${props => props.theme.colors.title};

& > div {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  background: ${props => props.theme.colors.white};
  box-shadow: 5px;
  font-size: 8.5rem;
  text-align: center;
}

& > div span{
  flex: 1;
}

& > div span:first-child{
  border-right: 1px solid ${props => props.theme.colors.background};
}

& > div span:last-child{
  border-left: 1px solid ${props => props.theme.colors.background};
}

& > span{
  font-size: 6.25rem;
  margin: 0 0.5rem;
}
`;

export const CountdownButton = styled(motion.button) <{ active?: boolean }>`
width: 100%;
height: 5rem;

margin-top: 2rem;
display: flex;
align-items: center;
justify-content: center;

border: 0;
border-radius: 5px;

background: ${props => props.active ? props.theme.colors.white : props.theme.colors.blue};
color: ${props => props.active ? props.theme.colors.title : props.theme.colors.white};

font-size: 1.25rem;
font-weight: 600;

transition: background-color 0.5s;

&:not(:disabled):hover{
  background: ${props => props.active ? props.theme.colors.red : props.theme.colors.bluedark};
  border: 0;
  color: ${props => props.active ? props.theme.colors.white : props.theme.colors.title}
}

&:disabled{
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.text};
  cursor: not-allowed;

  display: flex;
  align-items: center;
  justify-content: center;

  border-bottom: 2px solid ${props => props.theme.colors.green};
}

&:disabled:hover{
  border-bottom-color: ${props => props.theme.colors.red};
}
`;
