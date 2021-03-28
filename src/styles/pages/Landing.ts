import styled from "styled-components";

export const LandingWrapper = styled.div`
background: ${props => props.theme.colors.backgrounddark};
position: fixed;
top: 0;
bottom: 0;
left: 0;
right: 0;

z-index: 1;

display: flex;
justify-content: center;
align-items: center;
`;

export const LandingContainer = styled.div`
background: ${props => props.theme.colors.backgrounddarklight};
width: 100%;
max-width: 400px;
height: 400px;

padding: 2rem 3rem;
border-radius: 5px;
box-shadow: 0 0 60px rgba(0,0,0,0.5);

text-align: center;

display: flex;
justify-content: center;
flex-direction: column;

& span{
  display: flex;
  justify-content: center;
  align-items: center;
}

& header{
  font-size: 8.75rem;
  font-weight: 600;
  color: #6b63ff00;
  background: url('/icons/cup.svg') no-repeat center;
  background-size: contain;
}

& p{
  font-size: 1.25rem;
  color: ${props => props.theme.colors.white};
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: right;
}

& input{
  font: 400 1rem "Inter", sans-serif;

  height: 3rem;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.blue};
  padding-left: 1rem;
  color: ${props => props.theme.colors.white};

  background: ${props => props.theme.colors.backgrounddark};
}

& small{
  margin-top: 0.3rem;
  margin-left: 0.2rem;

  text-align: left;
  color: ${props => props.theme.colors.red};
}

& button{
  position: relative;
  height: 3rem;
  top: 0.5rem;
  background: ${props => props.theme.colors.blue};
  border: 0;
  border-radius: 5px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-size: 0;

  transition: ease-in 0.2s;
}

& button:hover{
  filter: brightness(0.8);
  background: ${props => props.theme.colors.darklight};
}

& button:hover img{
  display: none;
}

& button img{
  width: 2rem;
  margin-right: 0.25rem;
}

& button strong{
  font-size: 1.25rem;
  color: ${props => props.theme.colors.white};
}

`;

