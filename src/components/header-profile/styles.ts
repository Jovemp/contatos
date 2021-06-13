import styled from 'styled-components';

export const Logo = styled.div`
  background-color: #dee8ec;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  img {
    margin: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoUser = styled.div`
  margin-left: 5px;
  p {
    margin-top: -9px;
  }
`;