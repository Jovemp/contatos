import styled, { css } from 'styled-components';

interface Props {
  corLogo?: string;
}

export const Container = styled.div`
  height: 190px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-top: 15px;
  p {
    color: #97a1a6;
    font-size: 0.7rem;
    margin-top: -10px;
  }
`;

export const Logo = styled.div<Props>`
   ${props =>
    props.corLogo ? css`
      background-color: ${props.corLogo};
    ` : css` 
      background-color: #2cc3d5;    
    ` };

  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin-left: 35px;

  img {
    margin: 10px;
    margin-left: 12px;
  }
`;
