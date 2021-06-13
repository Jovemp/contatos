import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;

  button {
    color: #FFFF;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 5px;
    width: 30rem;
    max-height: 40px;
    height: 100%;
  }
`;

export const Titulo = styled.h1`
  color: #56616e;
`;

export const InputSearch = styled.input`
  color: #56616e;
  border-radius: 5px;
  border-color: #dee8ed;
  height: 40px;
  width: 90%;
  margin-right: 10px;
  padding-left: 8px;
`;

export const Search = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Organizador = styled.div`
  margin: 5px;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    border: 1px solid #cecece;
  }
`;
