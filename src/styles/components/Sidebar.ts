import styled from "styled-components";

export const SidebarContainer = styled.aside`
display: grid;

grid-template-rows: 10% 80% 10%;
justify-content: center;
align-items: center;

height: 100vh;
width: 5rem;
background: ${props => props.theme.colors.blue};

& > div:first-child{
  display: flex;
  justify-content: center;
}

& > div:last-child{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme.colors.white};
  cursor: pointer;
}

@media(max-width: 600px){
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 1;

  grid-template-rows: 100%;
  grid-template-columns: 10% 80% 10%;

  height: 5rem;
  width: 100vw;

  & > div:first-child{
    justify-content: flex-start;
  }
}
`;

export const Menu = styled.div`
display: flex;
flex-direction: column;

color: ${props => props.theme.colors.white};

& span{
  width: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
}

& span:not(:first-child){
  margin-top: 1rem;
}

& span div:last-child{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 1rem;
}

@media(max-width: 600px){
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & span {
    flex-direction: column-reverse;
  }

  & span:last-child{
    margin-top: 0rem;
  }

  & span div:last-child{
    margin-left: 0rem;
  }
}
`;

export const SelectedOption = styled.div`
width: 5px;
height: 56px;
margin: 0.5rem 0;
background-color: ${props => props.theme.colors.white};
border-radius: 0 5px 5px 0;

@media(max-width: 600px){
  width: 56px;
  height: 5px;
  margin: 0 0.5rem;
  border-radius: 5px 5px 0 0;
}
`;
