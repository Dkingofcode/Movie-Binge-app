import React from 'react';
import styled from 'styled-components/macro';


// export default jumbotron() {

// }



export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) =>  direction};
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px){
    flex-direction: column;
  }
`;

export const Container = styled.div`


`;


export const Pane = styled.div`
  width: 50%;

`;


export const Title = styled.h1`

`;

export const SubTitle = styled.h2`

`;

export const Image = styled.img`
   max-width: 100%;
   height: auto;
`;