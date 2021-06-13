import React from "react";

import { Container, Star, Imagem } from "./styles";
import favorite from "../../resources/img/favorite.png";
import star from "../../resources/img/star.png";
import Contato from "../../model/contatos";
import { format, parseISO } from "date-fns";

interface CardBlocksParam {
  onClickStar: () => void;
  contato: Contato;
  onClick: () => void;
}

const CardBlocks: React.FC<CardBlocksParam> = ({
  onClickStar,
  contato,
  onClick,
}) => {
  return (
    <Container className="card mb-4 shadow">
      <Star
        data-testid="star-contato"
        src={contato.star ? star : favorite}
        alt=""
        width="30"
        height="30"
        onClick={onClickStar}
      />
      <div data-testid="card-contato" className="card-body" onClick={onClick}>
        <Imagem
          src={contato.image}
          alt=""
          width="90"
          height="90"
          className="rounded-circle"
        />
        <h6 data-testid="name-contato">{contato.name}</h6>
        <p className="card-text">
          {format(parseISO(contato.created), "dd/MM/yyyy")}
        </p>
      </div>
    </Container>
  );
};

export default CardBlocks;
