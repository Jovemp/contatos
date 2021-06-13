import React from "react";

import { Container } from "./styles";
import HeaderProfile from "../../components/header-profile";
import Region from "../../components/region";
import CardValor from "../../components/card-valor";
import Plano from "../../components/plano";
import user from "../../resources/img/user.png";
import union from "../../resources/img/union.png";
import sent from "../../resources/img/sent.png";
import { useListagem } from "../../contexts/listagem";

const Profile: React.FC = () => {
  const { contatoSelecionado } = useListagem();

  return (
    <Container>
      <HeaderProfile />
      <hr />
      <div className="row">
        <div className="col col-9">
          <div className="row">
            <Region className="card col m-3 col-3 shadow" />
            <CardValor
              className="card col m-3 col-8 shadow"
              valor={contatoSelecionado?.analytics.user.actived.toString()!}
              descricao="Usuário ativo"
              icone={user}
            />
          </div>
          <div className="row">
            <CardValor
              className="card col m-3 col-7 shadow"
              valor={contatoSelecionado?.analytics.message.received.toString()!}
              descricao="Mensagens Recebidas"
              icone={union}
              corLogo="#4dcb7b"
            />
            <CardValor
              className="card col m-3 col-4 shadow"
              valor={contatoSelecionado?.analytics.message.sent.toString()!}
              descricao="Mensagens Enviadas"
              icone={sent}
              corLogo="#517bf2"
            />
          </div>
        </div>
        <div className="col col-3">
          <Plano />
        </div>
      </div>
    </Container>
  );
};

export default Profile;
