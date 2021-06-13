import React from "react";
import plano from "../../resources/img/plano.png";
import { Container } from "./styles";

const Plano: React.FC = () => {
  return (
    <Container>
      <img src={plano} alt="" />
      <p>Status account</p>
      <h5>Free</h5>
      <button className="btn btn-info">Update account</button>
    </Container>
  );
};

export default Plano;
