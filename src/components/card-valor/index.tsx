import React, { HtmlHTMLAttributes } from "react";

import { Container, Logo, Info } from "./styles";

interface CardValorProps extends HtmlHTMLAttributes<HTMLDivElement> {
  icone: string;
  valor: string;
  descricao: string;
  corLogo?: string;
}

const CardValor: React.FC<CardValorProps> = ({
  icone,
  valor,
  descricao,
  corLogo,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Logo corLogo={corLogo} data-testid="fundo-imagem-card">
        <img data-testid="imagem-card" src={icone} alt="" />
      </Logo>
      <Info>
        <h6 data-testid="valor-card">{valor}</h6>
        <p data-testid="descricao-card">{descricao}</p>
      </Info>
    </Container>
  );
};

export default CardValor;
