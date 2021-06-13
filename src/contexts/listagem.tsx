import * as React from "react";
import { parseISO } from "date-fns";
import { useEffect, useState, useContext } from "react";
import Contato from "../model/contatos";
import dados from "../resources/dados/data.json";

interface ListagemContextData {
  updateStar: (name: string, shortName: string) => void;
  listContatos: Contato[];
  updateFiltro: (value: string) => void;
  sortName: () => void;
  sortDate: () => void;
  contatoSelecionado: Contato | undefined;
  selecionaContato: (shortName: string) => void;
}

export const ListagemContext = React.createContext<ListagemContextData>(
  {} as ListagemContextData
);

export const ListagemProvider: React.FC = ({ children }) => {
  const dadosPadrao = dados.map((c) => ({ ...c, star: false }));
  const [listagem, setListagem] = useState<Contato[]>(dadosPadrao);
  const [contato, setContato] = useState<Contato | undefined>();
  const [filtro, setFiltro] = useState<string>("");

  useEffect(() => {
    if (filtro) {
      const dados =
        dadosPadrao.filter((c) =>
          c.name.toLowerCase().includes(filtro.toLowerCase())
        ) || [];
      setListagem(dados);
    } else {
      setListagem(dadosPadrao);
    }
  }, [filtro]);

  function updateFiltro(value: string) {
    setFiltro(value);
  }

  function selecionaContato(shortName: string) {
    const contato = dadosPadrao.find((c) => c.shortName === shortName);
    setContato(contato);
  }

  function sortName() {
    const list = listagem.slice();
    setListagem([]);
    const contatos = list.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    setListagem(contatos);
  }

  function sortDate() {
    const list = listagem.slice();
    setListagem([]);
    const contatos = list.sort(
      (a, b) => parseISO(a.created).getTime() - parseISO(b.created).getTime()
    );
    console.log(contatos);
    setListagem(contatos);
  }

  function updateStar(name: string, shortName: string) {
    const newListagem = listagem.map((contato) =>
      contato.name === name && contato.shortName === shortName
        ? { ...contato, star: !contato.star }
        : contato
    );

    setListagem(newListagem);
  }

  return (
    <ListagemContext.Provider
      value={{
        listContatos: listagem,
        updateStar,
        updateFiltro,
        sortName,
        sortDate,
        selecionaContato,
        contatoSelecionado: contato,
      }}
    >
      {children}
    </ListagemContext.Provider>
  );
};

export function useListagem() {
  const context = useContext(ListagemContext);

  return context;
}
