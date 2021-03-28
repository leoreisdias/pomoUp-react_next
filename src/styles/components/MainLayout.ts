import styled from 'styled-components';

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 10% 90%;

  @media(max-width: 600px){
      display: flex;
      flex-direction: column-reverse;

      & aside{
      margin-top: 15rem;
    }
  }

  &:after,
  &:before{
    box-sizing: border-box;
  }
`
