import React from "react";

import { Container, LabelFavorities, Row, Botao } from "./styles";
import HeaderSearch from "../../components/header-search";
import CardBlocks from "../../components/card-blocks";
import CardList from "../../components/card-list";
import { useListagem } from "../../contexts/listagem";
import { Organize, useOrganizacao } from "../../contexts/organizacao";
import Contatos from "../../model/contatos";
import { history } from "../../helpers/history";
import add from "../../resources/img/add.png";

const Lista: React.FC = () => {
  const { listContatos, updateStar, selecionaContato } = useListagem();
  const { organizacao } = useOrganizacao();

  const favoritos = listContatos.filter((c) => c.star);
  const naoFavoritos = listContatos.filter((c) => !c.star);

  function handleStar(contato: Contatos) {
    updateStar(contato.name, contato.shortName);
  }

  function handleCard(contato: Contatos) {
    selecionaContato(contato.shortName);
    history.push(`/detalhe`);
  }

  function renderLista(star: boolean = false) {
    return (star ? favoritos : naoFavoritos).map((contato) => {
      if (organizacao === Organize.ORGANIZE_LIST) {
        return (
          <Row className="row">
            <CardList
              onClickStar={() => handleStar(contato)}
              contato={contato}
              onClick={() => handleCard(contato)}
            />
          </Row>
        );
      } else {
        return (
          <div className="col col-auto align-self-start">
            <CardBlocks
              onClickStar={() => handleStar(contato)}
              contato={contato}
              onClick={() => handleCard(contato)}
            />
          </div>
        );
      }
    });
  }

  return (
    <Container>
      <HeaderSearch />
      <LabelFavorities>
        <h2>Favorities</h2>
      </LabelFavorities>
      {organizacao === Organize.ORGANIZE_BLOCKS ? (
        <Row className="row d-flex justify-content-start">
          {renderLista(true)}
        </Row>
      ) : (
        renderLista(true)
      )}
      <hr />
      {organizacao === Organize.ORGANIZE_BLOCKS ? (
        <Row className="row d-flex justify-content-start">
          {renderLista(false)}
        </Row>
      ) : (
        renderLista(false)
      )}
      <Botao className="position-absolute bottom-10 end-10">
        <img src={add} alt="" />
      </Botao>
    </Container>
  );
};

export default Lista;
