import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Star =styled.img`
  margin: 20px;
  cursor: pointer;
`;

export const Card = styled.div`
  height: 50px;
  width: 90%;
  align-items: center;
  flex-direction: row;
  cursor: pointer;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-right: 10px;
    justify-content: space-between;
  }

  h6 {
    margin-left: 8px;
  }

  p {
    margin-top: 10px;
    font-size: small;
  }
`; 

export const Imagem = styled.img`
  margin-left: 10px;
`;
