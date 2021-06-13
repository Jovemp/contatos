import React from "react";
import { format, parseISO } from "date-fns";
import logo from "../../resources/img/blip.png";

import { Logo, Header, InfoUser, Info } from "./styles";
import { useListagem } from "../../contexts/listagem";

const HeaderProfile: React.FC = () => {
  const { contatoSelecionado } = useListagem();

  return (
    <Header className="mt-4">
      <Info>
        <Logo>
          <img src={logo} alt="" width={30} height={30} />
        </Logo>
        <InfoUser>
          <h5>{contatoSelecionado?.name}</h5>
          <p>id: {contatoSelecionado?.shortName}</p>
        </InfoUser>
      </Info>
      <p>
        Create at {format(parseISO(contatoSelecionado?.created!), "dd/MM/yyyy")}
      </p>
    </Header>
  );
};

export default HeaderProfile;
