import React from "react";
import blocks from "../../resources/img/organize-blocks.png";
import list from "../../resources/img/organize-list.png";
import { Container, Titulo, InputSearch, Search, Organizador } from "./styles";
import { Organize, useOrganizacao } from "../../contexts/organizacao";
import { useListagem } from "../../contexts/listagem";

const HeaderSearch: React.FC = () => {
  const { updateOrganizacao } = useOrganizacao();
  const { updateFiltro, sortDate, sortName } = useListagem();

  return (
    <Container>
      <div>
        <Titulo>My chatbots</Titulo>
      </div>
      <Search>
        <InputSearch
          type="text"
          name="search"
          placeholder="Search"
          onChange={(e) => updateFiltro(e.target.value)}
        />
        <button className="btn btn-info" onClick={() => sortName()}>
          Order by name
        </button>
        <button className="btn btn-info" onClick={() => sortDate()}>
          Order by creation
        </button>
        <Organizador
          onClick={() => updateOrganizacao(Organize.ORGANIZE_BLOCKS)}
        >
          <img
            src={blocks}
            alt=""
            width="30"
            height="30"
            className="d-inline-block text-center"
          />
        </Organizador>
        <Organizador onClick={() => updateOrganizacao(Organize.ORGANIZE_LIST)}>
          <img
            src={list}
            alt=""
            width="30"
            height="30"
            className="d-inline-block text-center"
          />
        </Organizador>
      </Search>
    </Container>
  );
};

export default HeaderSearch;
