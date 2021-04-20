import { motion } from "framer-motion";
import styled, { keyframes } from "styled-components";



const animate = keyframes`
0%,
100% {
  transform: translateY(20px);
}
50% {
  transform: translateY(-10px);
}
`
export const Content = styled.div`
position: relative;
left: -1.5rem;
width: 10rem;
padding: 20px 40px;
background: rgba(255, 255, 255, 0.05);
box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
border-radius: 8px;
backdrop-filter: blur(10px);
z-index: 1;
transition: 0.5s;
color: #fff;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

& h2 {
  font-size: 1em;
  width: 6rem;
  text-align: center;
  color: #fff;
  margin-bottom: 10px;
}

& p {
  margin-bottom: 10px;
  line-height: 1.4em;
}
`


export const Box = styled(motion.div)<{picture: string, background: number}>`
position: relative;
width: 20rem;
min-height: 20rem;
display: flex;
justify-content: center;
align-items: center;
margin: 40px 30px;
transition: 0.5s;

&::before{
  content: "";
  position: absolute;
  top: 0;
  left: 50px;
  width: 50%;
  height: 100%;
  background: #fff;
  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
}

&::after {
  content: "";
  position: absolute;
  top: 0;
  left: 50px;
  width: 50%;
  height: 100%;
  background: #fff;

  border-radius: 8px;
  transform: skewX(15deg);
  transition: 0.5s;
  filter: blur(20px);
  transition: 0.5s;
}

&::before,
&::after{
  ${props => props.background == 1 ? 'background: linear-gradient(315deg, #4568dc , #b06ab3);' :
  props.background == 2 ? '  background: linear-gradient(315deg,  #c33764 , #1d2671);' :
  '  background: linear-gradient(315deg, #000428   , #004e92);'}
}

&:hover::before,
&:hover::after {
  transform: skewX(0deg);
  left: 20px;
  width: calc(100% - 90px);
}

& span {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
  cursor: pointer;
}

& span::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: url(${props => props.picture}) no-repeat;
  background-size: 100%;

  backdrop-filter: blur(10px);
  opacity: 0;
  transition: 0.5s;

  animation: ${animate} 2s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

&:hover span::before {
  top: -40px;
  left: 30px;
  width: 100px;
  height: 100px;
  opacity: 1;
}

& span::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background: url('https://i.pinimg.com/originals/b0/b8/23/b0b823037823f4365a08be3bfb8071f8.png');
  background-size: 100%;
  backdrop-filter: blur(10px);
  opacity: 0;
  transition: 0.5s;

  animation: ${animate} 2s ease-in-out infinite;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  animation-delay: -1s;
}

&:hover span::after {
  bottom: -20px;
  right: 50px;
  width: 100px;
  height: 100px;
  opacity: 1;
}

`;

