import React from "react";
import { format, parseISO } from "date-fns";
import Contato from "../../model/contatos";
import favorite from "../../resources/img/favorite.png";
import star from "../../resources/img/star.png";
import { Container, Star, Card, Imagem } from "./styles";

interface CardListParam {
  onClickStar: () => void;
  contato: Contato;
  onClick: () => void;
}

const CardList: React.FC<CardListParam> = ({
  onClickStar,
  contato,
  onClick,
}) => {
  return (
    <Container>
      <Star
        data-testid="star-contato"
        src={contato.star ? star : favorite}
        alt=""
        width="30"
        height="30"
        onClick={onClickStar}
      />
      <Card className="card" onClick={onClick} data-testid="card-contato">
        <Imagem src={contato.image} alt={contato.name} width="30" height="30" />
        <div>
          <h6 data-testid="name-contato">{contato.name}</h6>
          <p>Created at {format(parseISO(contato.created), "dd/MM/yyyy")}</p>
        </div>
      </Card>
    </Container>
  );
};

export default CardList;
