import styled from "styled-components";

export const ChallengeBoxContainer = styled.div`
height: 100%;

background: var(--white);
border-radius: 5px;
box-shadow: 0 0 60px rgba(0,0,0,0.05);
padding: 1.5rem 2rem;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

text-align: center;
`;

export const ChallengeNotActive = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;

& strong{
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.4;
}

& span{
  height: 180px;
  padding: 0;
}

& p{
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.4;
  max-width: 70%;
}

& button{
  margin-top: 1rem;

  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;

  padding: 1rem;

  color: var(--white);
  background: var(--green);


  font-size: 1rem;
  font-weight: 600;

  transition: filter 0.5s;
}

& button:hover{
  filter: brightness(0.8);
}
`;

export const ChallengeActive = styled.div`
height: 100%;

display: flex;
flex-direction: column;

& header{
  color: var(--blue);
  font-weight: 600;
  font-size: 1.25rem;
  padding: 0 2rem 1.5rem;
  border-bottom: 1px solid var(--gray-line);
}

& main{
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

& main strong{
  font-weight: 600;
  font-size: 2rem;
  color: var(--title);
  margin: 1.5rem 0 1rem;
}

& main p{
  line-height: 1.5;
}

& footer{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
`;

export const ChallengeButton = styled.button<{ color: string }>`
height: 3rem;

display: flex;
align-items: center;
justify-content: center;

border: 0;
border-radius: 5px;

color: var(--white);
background: ${props => props.color == 'fail' ? props.theme.colors.red : props.theme.colors.green};

font-size: 1rem;
font-weight: 600;

transition: filter 0.5s;

&:hover{
  filter: brightness(0.9);
}
`
