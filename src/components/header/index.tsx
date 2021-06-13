import React from "react";

import { Container } from "./styles";
import logo from "../../resources/img/logo.png";
import { history } from "../../helpers/history";

const Header: React.FC = () => {
  return (
    <Container className="nav-wrapper">
      <div className="brand-logo center">
        <span data-testid="span-icone" onClick={() => history.replace("/")}>
          <img
            data-testid="icone"
            src={logo}
            alt=""
            width="55"
            height="18"
            className="d-inline-block text-center"
          />
        </span>
      </div>
    </Container>
  );
};

export default Header;
